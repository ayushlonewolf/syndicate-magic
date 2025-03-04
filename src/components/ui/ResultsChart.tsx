
import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";
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

  return (
    <div className={cn("w-full h-40 animate-fade-in opacity-0", delay, className)}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={getGrowthData()} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis 
            dataKey="month" 
            tick={{ fill: 'hsl(var(--muted-foreground))' }}
            label={{ value: 'Month', position: 'insideBottom', style: { textAnchor: 'middle', fill: 'hsl(var(--muted-foreground))' } }}
          />
          <YAxis 
            tick={{ fill: 'hsl(var(--muted-foreground))' }} 
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'hsl(var(--background))', 
              borderColor: 'hsl(var(--border))',
              borderRadius: '0.5rem'
            }} 
            labelStyle={{ color: 'hsl(var(--foreground))' }}
            itemStyle={{ color: 'hsl(var(--foreground))' }}
            formatter={(value, name) => {
              if (name === 'growth') {
                return [`+${value}%`, 'Growth'];
              }
              return [value, name];
            }}
          />
          <defs>
            <linearGradient id="colorGrowth" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="rgb(34, 197, 94)" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="rgb(34, 197, 94)" stopOpacity={0.2}/>
            </linearGradient>
          </defs>
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
            activeDot={{ r: 8, fill: "rgb(34, 197, 94)" }}
          />
        </AreaChart>
      </ResponsiveContainer>
      <div className="mt-1 text-center text-xs">
        <span className="font-medium text-green-500">+{growthPercentage}%</span> 
        <span className="text-muted-foreground ml-1">improvement with our solution</span>
      </div>
    </div>
  );
};

export default ResultsChart;
