
import { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, LabelList } from "recharts";
import { cn } from "@/lib/utils";

interface AnimatedChartProps {
  className?: string;
  delay?: string;
}

const AnimatedChart = ({ className, delay = "animate-delay-300" }: AnimatedChartProps) => {
  const [data, setData] = useState([
    { name: "Jan", leads: 0 },
    { name: "Feb", leads: 0 },
    { name: "Mar", leads: 0 },
    { name: "Apr", leads: 0 },
    { name: "May", leads: 0 },
    { name: "Jun", leads: 0 },
  ]);

  const finalData = [
    { name: "Jan", leads: 450 },
    { name: "Feb", leads: 650 },
    { name: "Mar", leads: 850 },
    { name: "Apr", leads: 1200 },
    { name: "May", leads: 1700 },
    { name: "Jun", leads: 2300 },
  ];

  useEffect(() => {
    // Animate the chart data growth
    const animateData = () => {
      const steps = 30; // Number of animation steps
      let currentStep = 0;

      const interval = setInterval(() => {
        if (currentStep >= steps) {
          clearInterval(interval);
          return;
        }

        const newData = data.map((item, index) => ({
          ...item,
          leads: Math.round((finalData[index].leads / steps) * currentStep),
        }));

        setData(newData);
        currentStep++;
      }, 50);

      return () => clearInterval(interval);
    };

    // Delay the animation start
    const timer = setTimeout(() => {
      animateData();
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // Generate custom colors based on growth
  const getBarColor = (value: number) => {
    // Create a gradient of greens from lighter to darker based on value
    const greenBase = "rgba(34, 197, 94, ";
    const opacity = 0.6 + (value / 2300) * 0.4; // Scale opacity by value, 0.6-1.0
    return `${greenBase}${opacity})`;
  };

  return (
    <div className="relative">
      <div className={cn("w-full h-80 animate-fade-in opacity-0", delay, className)}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart 
            data={data} 
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            barGap={8}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis 
              dataKey="name" 
              tick={{ fill: 'hsl(var(--muted-foreground))', fontWeight: 500 }}
              axisLine={{ stroke: 'rgba(200,200,200,0.3)' }}
              tickLine={false}
            />
            <YAxis 
              tick={{ fill: 'hsl(var(--muted-foreground))' }} 
              axisLine={{ stroke: 'rgba(200,200,200,0.3)' }}
              tickLine={false}
              domain={[0, 2400]}
              tickCount={7}
              label={{ 
                value: 'Leads Generated', 
                angle: -90, 
                position: 'insideLeft', 
                style: { 
                  textAnchor: 'middle', 
                  fill: 'hsl(var(--muted-foreground))',
                  fontWeight: 500
                } 
              }} 
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--background))', 
                borderColor: 'hsl(var(--border))',
                borderRadius: '0.5rem',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
              }}
              labelStyle={{ color: 'hsl(var(--foreground))', fontWeight: 'bold' }}
              itemStyle={{ color: 'rgb(34, 197, 94)' }}
              cursor={{ fill: 'rgba(34, 197, 94, 0.05)' }}
            />
            <Bar 
              dataKey="leads" 
              name="Leads Generated" 
              radius={[4, 4, 0, 0]}
              isAnimationActive={true}
              animationDuration={1000}
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={getBarColor(entry.leads)} 
                  className={index === data.length - 1 ? "animate-float" : ""}
                />
              ))}
              <LabelList 
                dataKey="leads" 
                position="top" 
                style={{ 
                  fill: 'rgb(34, 197, 94)', 
                  fontWeight: 'bold',
                  fontSize: '12px',
                  opacity: 0.9
                }}
                formatter={(value: number) => (value > 0 ? value : '')}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-3 text-center animate-fade-in opacity-0 animate-delay-500">
        <span className="text-lg font-bold text-green-500 mr-2 inline-block bg-green-50 px-3 py-1 rounded-full">+411%</span> 
        <span className="text-muted-foreground">average lead growth over 6 months</span>
      </div>
    </div>
  );
};

export default AnimatedChart;
