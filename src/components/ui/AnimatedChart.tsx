
import { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
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

  return (
    <div className={cn("w-full h-72 animate-fade-in opacity-0", delay, className)}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis 
            dataKey="name" 
            tick={{ fill: 'hsl(var(--muted-foreground))' }}
          />
          <YAxis 
            tick={{ fill: 'hsl(var(--muted-foreground))' }} 
            label={{ value: 'Leads Generated', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fill: 'hsl(var(--muted-foreground))' } }} 
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'hsl(var(--background))', 
              borderColor: 'hsl(var(--border))',
              borderRadius: '0.5rem',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
            }} 
          />
          <Bar 
            dataKey="leads" 
            name="Leads Generated" 
            fill="hsl(var(--primary))" 
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AnimatedChart;
