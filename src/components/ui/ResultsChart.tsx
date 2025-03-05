
import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart, ReferenceLine } from "recharts";
import { cn } from "@/lib/utils";

interface ResultsChartProps {
  growthPercentage: number;
  className?: string;
  delay?: string;
}

const ResultsChart = ({ 
  growthPercentage, 
  className, 
  delay = "animate-delay-200" 
}: ResultsChartProps) => {
  const [data, setData] = useState([
    { month: 1, before: 100, after: 100 },
    { month: 2, before: 100, after: 100 },
    { month: 3, before: 100, after: 100 },
    { month: 4, before: 100, after: 100 },
    { month: 5, before: 100, after: 100 },
    { month: 6, before: 100, after: 100 },
  ]);

  useEffect(() => {
    // Calculate "after" data based on growth percentage
    const finalData = data.map((item, index) => {
      const growthFactor = 1 + (growthPercentage / 100) * (index / 5);
      return {
        ...item,
        before: 100,
        after: Math.round(100 * growthFactor)
      };
    });

    // Animate the data
    const animateData = () => {
      const steps = 20;
      let currentStep = 0;

      const interval = setInterval(() => {
        if (currentStep >= steps) {
          clearInterval(interval);
          return;
        }

        const newData = data.map((item, index) => {
          const targetAfter = finalData[index].after;
          const currentAfter = 100 + ((targetAfter - 100) / steps) * currentStep;
          
          return {
            ...item,
            after: Math.round(currentAfter)
          };
        });

        setData(newData);
        currentStep++;
      }, 50);

      return () => clearInterval(interval);
    };

    // Delay animation start
    const timer = setTimeout(() => {
      animateData();
    }, 800);

    return () => clearTimeout(timer);
  }, [growthPercentage]);

  // Calculate the difference between before and after for highlighting
  const getGrowthData = () => {
    return data.map(item => ({
      ...item,
      growth: item.after - item.before
    }));
  };

  // Find the maximum value for highlighting
  const maxPoint = Math.max(...data.map(item => item.after));
  const maxIndex = data.findIndex(item => item.after === maxPoint);

  return (
    <div className={cn("w-full animate-fade-in opacity-0 bg-white p-4 rounded-lg shadow-md", delay, className)}>
      <ResponsiveContainer width="100%" height={180}>
        <AreaChart data={getGrowthData()} margin={{ top: 15, right: 15, bottom: 5, left: 5 }}>
          <XAxis 
            dataKey="month" 
            tick={{ fill: '#94a3b8', fontSize: 12 }}
            axisLine={{ stroke: '#e2e8f0' }}
            tickLine={false}
            label={{ 
              value: 'Month', 
              position: 'insideBottom', 
              offset: -5,
              style: { 
                textAnchor: 'middle', 
                fill: '#64748b',
                fontSize: 12
              } 
            }}
          />
          <YAxis 
            tick={{ fill: '#94a3b8', fontSize: 12 }} 
            axisLine={false}
            tickLine={false}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'white', 
              borderColor: '#e2e8f0',
              borderRadius: '0.5rem',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }} 
            labelStyle={{ color: '#1e293b', fontWeight: 'bold' }}
            itemStyle={{ color: '#1e293b' }}
            formatter={(value, name) => {
              if (name === 'growth') {
                return [`+${value}%`, 'Growth'];
              }
              if (name === 'after') {
                return [`${value}%`, 'With Our Solution'];
              }
              if (name === 'before') {
                return [`${value}%`, 'Before'];
              }
              return [value, name];
            }}
            cursor={{ fill: 'rgba(255, 138, 76, 0.05)' }}
          />
          
          {/* Highlight the growth area with gradient */}
          <defs>
            <linearGradient id="colorGrowth" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="rgba(255, 138, 76, 0.8)" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="rgba(255, 138, 76, 0.2)" stopOpacity={0.2}/>
            </linearGradient>
          </defs>
          
          <Area 
            type="monotone" 
            dataKey="before" 
            name="Before" 
            stroke="#94a3b8" 
            strokeWidth={2}
            strokeDasharray="3 3"
            fill="rgba(148, 163, 184, 0.1)"
            dot={false} 
          />
          <Area 
            type="monotone" 
            dataKey="after" 
            name="After Our Solution" 
            stroke="#ff8a4c" 
            strokeWidth={3}
            fill="url(#colorGrowth)"
            activeDot={{ 
              r: 8, 
              fill: "#ff8a4c",
              stroke: "white",
              strokeWidth: 2,
              className: "animate-pulse-soft"
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
      
      <div className="mt-2 text-center">
        <span className="text-base font-bold text-[#ff8a4c] bg-orange-50 px-3 py-1 rounded-full inline-block">
          +{growthPercentage}%
        </span> 
        <span className="text-gray-500 ml-2 text-sm">improvement with our solution</span>
      </div>
    </div>
  );
};

export default ResultsChart;
