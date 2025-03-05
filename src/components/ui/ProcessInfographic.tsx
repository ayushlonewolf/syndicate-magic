
import { useState, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { MapPin, Users, ChartPie, CheckCheck, Send } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProcessInfographicProps {
  type: "create" | "distribute" | "track";
  className?: string;
  delay?: string;
}

const ProcessInfographic = ({ type, className, delay = "animate-delay-300" }: ProcessInfographicProps) => {
  // States for animations
  const [animate, setAnimate] = useState(false);
  const [data, setData] = useState<any[]>([]);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
      
      if (type === "create") {
        setData([
          { name: "Content Plan", value: 35, color: "#22c55e" },
          { name: "Optimization", value: 30, color: "#16a34a" },
          { name: "Research", value: 20, color: "#15803d" },
          { name: "Refinement", value: 15, color: "#166534" }
        ]);
      } else if (type === "distribute") {
        setData([
          { name: "Social Media", value: 30, color: "#22c55e" },
          { name: "Email", value: 25, color: "#16a34a" },
          { name: "PR Networks", value: 25, color: "#15803d" },
          { name: "Forums", value: 20, color: "#166534" }
        ]);
      } else if (type === "track") {
        setData([
          { name: "Conversions", value: 40, color: "#22c55e" },
          { name: "Engagement", value: 30, color: "#16a34a" },
          { name: "Analytics", value: 20, color: "#15803d" },
          { name: "ROI", value: 10, color: "#166534" }
        ]);
      }
    }, 500);
    
    return () => clearTimeout(timer);
  }, [type]);

  // Render different infographics based on type
  const renderInfographic = () => {
    switch (type) {
      case "create":
        return (
          <div className="flex flex-col items-center justify-center h-full">
            <ChartPie className={cn(
              "w-12 h-12 text-primary mb-4 opacity-0",
              animate ? "animate-fade-in" : ""
            )} />
            <div className="h-48 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={animate ? 60 : 0}
                    fill="#8884d8"
                    dataKey="value"
                    animationDuration={1000}
                    animationBegin={0}
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--background))', 
                      borderColor: 'hsl(var(--border))',
                      borderRadius: '0.5rem'
                    }}
                  />
                  <Legend verticalAlign="bottom" height={36} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className={cn(
              "mt-2 text-center text-sm text-primary font-medium opacity-0",
              animate ? "animate-fade-in animate-delay-500" : ""
            )}>
              Content Strategy Breakdown
            </div>
          </div>
        );
        
      case "distribute":
        return (
          <div className="relative h-full flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <Send className={cn(
                "w-12 h-12 text-primary opacity-0 transform translate-y-10",
                animate ? "animate-fade-in !translate-y-0 transition-all duration-700" : ""
              )} />
            </div>
            
            <div className="absolute inset-0">
              {animate && Array.from({ length: 12 }).map((_, i) => (
                <div 
                  key={i}
                  className={cn(
                    "absolute rounded-full bg-primary/80 w-2 h-2 opacity-0",
                    animate ? "animate-fade-in animate-pulse-soft" : "",
                    `animate-delay-${(i % 5) * 100}`
                  )}
                  style={{ 
                    top: `${10 + Math.random() * 80}%`, 
                    left: `${10 + Math.random() * 80}%`,
                    animationDelay: `${0.5 + i * 0.2}s`
                  }}
                />
              ))}
            </div>
            
            <div className="absolute bottom-0 w-full">
              <div className="grid grid-cols-4 gap-2 px-4">
                {data.map((platform, index) => (
                  <div 
                    key={index}
                    className={cn(
                      "h-0 bg-gradient-to-t from-primary/80 to-primary/40 rounded-t opacity-0",
                      animate ? "animate-fade-in h-[60px]" : ""
                    )}
                    style={{ 
                      transitionDelay: `${0.3 + index * 0.2}s`,
                      transitionDuration: "0.8s",
                      height: animate ? `${platform.value * 2}px` : 0
                    }}
                  />
                ))}
              </div>
              <div className="flex justify-between px-4 text-xs text-muted-foreground mt-1">
                {data.map((platform, index) => (
                  <span 
                    key={index}
                    className={cn(
                      "opacity-0",
                      animate ? "animate-fade-in animate-delay-700" : ""
                    )}
                  >
                    {platform.name.split(' ')[0]}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
        
      case "track":
        return (
          <div className="relative h-full flex flex-col items-center">
            <CheckCheck className={cn(
              "w-12 h-12 text-primary mb-4 opacity-0",
              animate ? "animate-fade-in" : ""
            )} />
            
            <div className="flex justify-center gap-8 mt-4">
              {data.slice(0, 2).map((metric, index) => (
                <div 
                  key={index}
                  className={cn(
                    "text-center opacity-0",
                    animate ? "animate-fade-in" : ""
                  )}
                  style={{ animationDelay: `${0.3 + index * 0.2}s` }}
                >
                  <div 
                    className="relative w-20 h-20 rounded-full flex items-center justify-center bg-primary/10"
                    style={{ 
                      background: `conic-gradient(${metric.color} ${animate ? metric.value * 3.6 : 0}deg, transparent 0deg)`
                    }}
                  >
                    <div className="absolute inset-2 rounded-full bg-background flex items-center justify-center">
                      <span className="text-lg font-bold text-primary">{animate ? metric.value : 0}%</span>
                    </div>
                  </div>
                  <p className="mt-2 text-sm font-medium">{metric.name}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-6 w-full grid grid-cols-2 gap-4">
              {data.slice(2).map((metric, index) => (
                <div 
                  key={index}
                  className={cn(
                    "bg-primary/10 rounded p-2 text-center opacity-0",
                    animate ? "animate-fade-in" : ""
                  )}
                  style={{ animationDelay: `${0.7 + index * 0.2}s` }}
                >
                  <span className="text-sm font-medium">{metric.name}</span>
                  <div className="mt-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full"
                      style={{ width: animate ? `${metric.value * 2}%` : '0%', transition: 'width 1s ease-out' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className={cn("aspect-video bg-background rounded-lg h-full w-full", className)}>
      {renderInfographic()}
    </div>
  );
};

export default ProcessInfographic;
