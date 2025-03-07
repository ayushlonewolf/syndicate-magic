
import { useState, useEffect } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import { getAreaChartColors } from "./colorUtils";

interface DataPoint {
  name: string;
  value: number;
}

const BannerAreaChart = () => {
  const [data, setData] = useState<DataPoint[]>([]);
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    const mockData: DataPoint[] = [
      { name: "Jan", value: 4000 },
      { name: "Feb", value: 4500 },
      { name: "Mar", value: 6000 },
      { name: "Apr", value: 5500 },
      { name: "May", value: 7000 },
      { name: "Jun", value: 9000 },
      { name: "Jul", value: 11000 },
      { name: "Aug", value: 12500 }
    ];
    
    const timer = setTimeout(() => {
      setAnimate(true);
      setData(mockData);
    }, 400);
    
    return () => clearTimeout(timer);
  }, []);

  const colors = getAreaChartColors();
  
  const calculateGrowthPercentage = () => {
    if (data.length < 2) return 0;
    const firstValue = data[0].value;
    const lastValue = data[data.length - 1].value;
    return Math.round(((lastValue - firstValue) / firstValue) * 100);
  };

  return (
    <div className="h-full w-full bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-bold text-gray-800 flex items-center">
          Content Performance
          <TrendingUp className="ml-2 h-4 w-4 text-green-500" />
        </h3>
        <div className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-xs font-semibold flex items-center">
          +{calculateGrowthPercentage()}% <ArrowUpRight className="ml-1 h-3 w-3" />
        </div>
      </div>
      
      <div className="h-[calc(100%-40px)]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 10, left: -25, bottom: 0 }}
          >
            <defs>
              <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#22c55e" stopOpacity={0.1}/>
              </linearGradient>
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
              tickFormatter={(value) => value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "k").substring(0, 3)}
            />
            <Tooltip
              contentStyle={{ 
                backgroundColor: 'white', 
                borderColor: '#e2e8f0',
                borderRadius: '0.5rem',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                fontSize: '12px'
              }}
              formatter={(value) => [`${value.toLocaleString()}`, 'Views']}
            />
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke={colors.stroke} 
              fill={colors.fill} 
              fillOpacity={colors.fillOpacity}
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
