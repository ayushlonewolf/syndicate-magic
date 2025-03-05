
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
    <div className={cn("w-full h-48 animate-fade-in opacity-0", delay, className)}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={getGrowthData()} margin={{ top: 15, right: 15, bottom: 5, left: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis 
            dataKey="month" 
            tick={{ fill: 'hsl(var(--muted-foreground))', fontWeight: 500 }}
            axisLine={{ stroke: 'rgba(200,200,200,0.3)' }}
            tickLine={false}
            label={{ 
              value: 'Month', 
              position: 'insideBottom', 
              offset: -5,
              style: { 
                textAnchor: 'middle', 
                fill: 'hsl(var(--muted-foreground))',
                fontWeight: 500
              } 
            }}
          />
          <YAxis 
            tick={{ fill: 'hsl(var(--muted-foreground))' }} 
            axisLine={{ stroke: 'rgba(200,200,200,0.3)' }}
            tickLine={false}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'hsl(var(--background))', 
              borderColor: 'hsl(var(--border))',
              borderRadius: '0.5rem',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
            }} 
            labelStyle={{ color: 'hsl(var(--foreground))', fontWeight: 'bold' }}
            itemStyle={{ color: 'hsl(var(--foreground))' }}
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
            cursor={{ fill: 'rgba(34, 197, 94, 0.05)' }}
          />
          
          {/* Highlight the growth area with gradient */}
          <defs>
            <linearGradient id="colorGrowth" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="rgb(34, 197, 94)" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="rgb(34, 197, 94)" stopOpacity={0.2}/>
            </linearGradient>
            
            {/* Add glow effect for the highlight */}
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          
          {/* Add a reference line for the highest point */}
          <ReferenceLine 
            x={maxIndex + 1} 
            stroke="rgba(34, 197, 94, 0.5)" 
            strokeDasharray="3 3" 
            strokeWidth={1} 
          />
          
          <Area 
            type="monotone" 
            dataKey="before" 
            name="Before" 
            stroke="hsl(var(--muted-foreground))" 
            strokeWidth={2}
            strokeDasharray="3 3"
            fill="rgba(100,100,100,0.1)"
            dot={false} 
          />
          <Area 
            type="monotone" 
            dataKey="after" 
            name="After Our Solution" 
            stroke="rgb(34, 197, 94)" 
            strokeWidth={3}
            fill="url(#colorGrowth)"
            activeDot={{ 
              r: 8, 
              fill: "rgb(34, 197, 94)",
              stroke: "white",
              strokeWidth: 2,
              className: "animate-pulse-soft"
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
      
      <div className="mt-2 text-center">
        <span className="text-base font-bold text-green-500 bg-green-50 px-3 py-1 rounded-full inline-block">
          +{growthPercentage}%
        </span> 
        <span className="text-muted-foreground ml-2 font-medium">improvement with our solution</span>
      </div>
    </div>
  );
};

export default ResultsChart;
