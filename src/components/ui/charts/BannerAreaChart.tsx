
import { useState, useEffect } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts";
import { ArrowUpRight, TrendingUp, Download, RefreshCw, Maximize2, Filter } from "lucide-react";
import { getAreaChartColors } from "./colorUtils";
import { Button } from "@/components/ui/button";

interface DataPoint {
  name: string;
  value: number;
  comparison?: number;
}

interface BannerAreaChartProps {
  timeRange: string;
  metric: string;
}

const BannerAreaChart = ({ timeRange, metric }: BannerAreaChartProps) => {
  const [data, setData] = useState<DataPoint[]>([]);
  const [animate, setAnimate] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showComparison, setShowComparison] = useState(false);
  const [tooltip, setTooltip] = useState({ show: false, x: 0, y: 0, value: 0 });
  
  useEffect(() => {
    setIsLoading(true);
    
    // Generate dynamic data based on timeRange and metric
    const generateData = () => {
      const pointCount = timeRange === '1m' ? 4 : 
                         timeRange === '3m' ? 7 : 
                         timeRange === '6m' ? 8 : 12;
      
      const multiplier = metric === 'engagement' ? 1 : 
                          metric === 'conversion' ? 0.15 : 
                          metric === 'reach' ? 2.5 : 0.8;
      
      const baseValue = metric === 'engagement' ? 4000 : 
                        metric === 'conversion' ? 800 : 
                        metric === 'reach' ? 10000 : 2500;
      
      const variance = 0.2;
      const trend = 0.1;
      
      // Generate month labels based on time range
      const labels = generateTimeLabels(timeRange, pointCount);
      
      const mockData: DataPoint[] = [];
      for (let i = 0; i < pointCount; i++) {
        const growthFactor = 1 + (trend * i);
        const randomVariance = 1 + ((Math.random() * 2 - 1) * variance);
        const value = Math.floor(baseValue * multiplier * growthFactor * randomVariance);
        
        // Add comparison data for previous period
        const comparisonValue = Math.floor(value * (0.7 + Math.random() * 0.2));
        
        mockData.push({ 
          name: labels[i], 
          value: value,
          comparison: showComparison ? comparisonValue : undefined
        });
      }
      
      return mockData;
    };
    
    const timer = setTimeout(() => {
      setAnimate(true);
      setData(generateData());
      setIsLoading(false);
    }, 400);
    
    return () => clearTimeout(timer);
  }, [timeRange, metric, showComparison]);

  const colors = getAreaChartColors();
  
  const calculateGrowthPercentage = () => {
    if (data.length < 2) return 0;
    const firstValue = data[0].value;
    const lastValue = data[data.length - 1].value;
    return Math.round(((lastValue - firstValue) / firstValue) * 100);
  };

  const handleRefreshData = () => {
    setIsLoading(true);
    setTimeout(() => {
      const refreshedData = data.map(item => ({
        ...item,
        value: Math.floor(item.value * (0.9 + Math.random() * 0.2)),
        comparison: item.comparison ? Math.floor(item.comparison * (0.9 + Math.random() * 0.2)) : undefined
      }));
      setData(refreshedData);
      setIsLoading(false);
    }, 800);
  };

  const handleDownloadData = () => {
    const headers = showComparison ? "Period,Value,Comparison\n" : "Period,Value\n";
    const csvContent = "data:text/csv;charset=utf-8," + 
      headers + 
      data.map(item => showComparison ? 
        `${item.name},${item.value},${item.comparison}` : 
        `${item.name},${item.value}`
      ).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${metric}_analytics_${timeRange}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  const toggleComparisonData = () => {
    setShowComparison(!showComparison);
  };
  
  const generateTimeLabels = (timeRange: string, count: number): string[] => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const today = new Date();
    const labels: string[] = [];
    
    for (let i = count - 1; i >= 0; i--) {
      let date = new Date();
      
      if (timeRange === '1m') {
        // Weekly labels for 1 month
        date.setDate(today.getDate() - (i * 7));
        labels.push(`W${4-i}`);
      } else {
        // Monthly labels
        date.setMonth(today.getMonth() - i);
        labels.push(months[date.getMonth()]);
      }
    }
    
    return labels;
  };
  
  const getMetricName = () => {
    switch (metric) {
      case 'engagement': return 'Engagement';
      case 'conversion': return 'Conversion Rate';
      case 'reach': return 'Audience Reach';
      case 'leads': return 'Qualified Leads';
      default: return 'Value';
    }
  };
  
  const getYAxisTickFormatter = () => {
    if (metric === 'conversion') {
      return (value: any) => `${value.toFixed(1)}%`;
    } else if (['engagement', 'reach', 'leads'].includes(metric)) {
      return (value: any) => value >= 1000 ? `${(value/1000).toFixed(1)}k` : value;
    }
    return (value: any) => value;
  };

  return (
    <div className="h-full w-full bg-white/80 backdrop-blur-sm rounded-xl shadow-sm">
      <div className="flex justify-end gap-2 mb-3">
        <Button 
          variant="outline" 
          size="sm" 
          className="h-8 text-xs"
          onClick={handleRefreshData}
          disabled={isLoading}
        >
          <RefreshCw className={`h-3.5 w-3.5 mr-1 ${isLoading ? 'animate-spin' : ''}`} />
          Refresh
        </Button>
        <Button 
          variant="outline" 
          size="sm" 
          className="h-8 text-xs"
          onClick={toggleComparisonData}
        >
          <Filter className="h-3.5 w-3.5 mr-1" />
          {showComparison ? "Hide" : "Show"} Comparison
        </Button>
        <Button 
          variant="outline" 
          size="sm" 
          className="h-8 text-xs"
          onClick={handleDownloadData}
        >
          <Download className="h-3.5 w-3.5 mr-1" />
          Export
        </Button>
      </div>
      
      <div className="h-[240px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#22c55e" stopOpacity={0.1}/>
              </linearGradient>
              {showComparison && (
                <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.6}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
                </linearGradient>
              )}
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
            <XAxis 
              dataKey="name" 
              tick={{ fill: '#64748b', fontSize: 10 }}
              axisLine={{ stroke: '#e2e8f0' }}
              tickLine={false}
            />
            <YAxis 
              tick={{ fill: '#64748b', fontSize: 10 }}
              axisLine={false}
              tickLine={false}
              tickFormatter={getYAxisTickFormatter()}
            />
            <Tooltip
              contentStyle={{ 
                backgroundColor: 'white', 
                borderColor: '#e2e8f0',
                borderRadius: '0.5rem',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                fontSize: '12px'
              }}
              formatter={(value: any, name: string) => {
                if (name === 'value') return [`${value.toLocaleString()}`, getMetricName()];
                if (name === 'comparison') return [`${value.toLocaleString()}`, 'Previous Period'];
                return [value, name];
              }}
              labelFormatter={(label) => `Period: ${label}`}
            />
            
            {/* Highlight the trend with a reference line */}
            {data.length > 0 && (
              <ReferenceLine
                y={data[0].value}
                stroke="#22c55e"
                strokeDasharray="3 3"
                strokeOpacity={0.6}
              />
            )}
            
            {showComparison && (
              <Area 
                type="monotone" 
                dataKey="comparison" 
                stroke="#3b82f6" 
                fill="url(#blueGradient)" 
                fillOpacity={0.4}
                strokeWidth={1.5}
                dot={{ r: 0 }}
                activeDot={{ r: 6, stroke: '#3b82f6', strokeWidth: 1, fill: '#ffffff' }}
                animationDuration={1500}
                animationBegin={200}
              />
            )}
            
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke={colors.stroke} 
              fill="url(#greenGradient)" 
              fillOpacity={colors.fillOpacity}
              strokeWidth={2}
              dot={{ r: 0 }}
              activeDot={{ r: 6, stroke: colors.stroke, strokeWidth: 1, fill: '#ffffff' }}
              animationDuration={1500}
              animationBegin={0}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BannerAreaChart;
