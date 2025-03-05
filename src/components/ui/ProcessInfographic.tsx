
import { useState, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend, BarChart, Bar, XAxis, YAxis } from "recharts";
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
          { name: "Content Plan", value: 31, color: "#ff8a4c" },
          { name: "Research", value: 18, color: "#ff9d6c" },
          { name: "Optimization", value: 18, color: "#ffb28c" },
          { name: "Guest Blogging", value: 16, color: "#ffc7ac" },
          { name: "Paid Distribution", value: 14, color: "#ffdbc9" },
          { name: "Distribution Platforms", value: 3, color: "#f8f0ed" }
        ]);
      } else if (type === "distribute") {
        setData([
          { name: "Jan", opens: 18, clicks: 12 },
          { name: "Mar", opens: 22, clicks: 15 },
          { name: "May", opens: 26, clicks: 14 },
          { name: "Jul", opens: 24, clicks: 18 },
          { name: "Sep", opens: 32, clicks: 22 },
          { name: "Nov", opens: 30, clicks: 26 },
          { name: "Dec", opens: 35, clicks: 24 }
        ]);
      } else if (type === "track") {
        setData([
          { name: "CMO", value: 45, color: "#ff8a4c" },
          { name: "CEO", value: 25, color: "#ffa97c" },
          { name: "CFO", value: 15, color: "#ffc8ac" },
          { name: "Manager", value: 15, color: "#ffe8dc" }
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
          <div className="flex flex-col items-center justify-center h-full p-6">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Mediums</h3>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={animate ? 80 : 0}
                    fill="#8884d8"
                    dataKey="value"
                    animationDuration={1000}
                    animationBegin={0}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    labelStyle={{ fill: '#333', fontSize: 12 }}
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      borderColor: '#e2e8f0',
                      borderRadius: '0.5rem',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                    formatter={(value) => [`${value}%`, '']}
                  />
                  <Legend 
                    verticalAlign="bottom"
                    layout="vertical" 
                    align="right"
                    iconType="circle"
                    iconSize={8}
                    formatter={(value) => <span style={{ color: '#64748b', fontSize: 12 }}>{value}</span>}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        );
        
      case "distribute":
        return (
          <div className="flex flex-col items-center justify-center h-full p-6">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Engagement Rate</h3>
            <div className="h-60 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={data}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 0,
                    bottom: 10,
                  }}
                  barGap={0}
                  barCategoryGap="35%"
                >
                  <XAxis 
                    dataKey="name"
                    tick={{ fill: '#64748b', fontSize: 12 }}
                    axisLine={{ stroke: '#e2e8f0' }}
                    tickLine={false}
                  />
                  <YAxis hide />
                  <Tooltip
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      borderColor: '#e2e8f0',
                      borderRadius: '0.5rem',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                    cursor={false}
                  />
                  <Legend 
                    verticalAlign="top"
                    iconType="circle"
                    iconSize={8}
                    formatter={(value) => <span style={{ color: '#64748b', fontSize: 12 }}>{value}</span>}
                  />
                  <Bar 
                    dataKey="opens" 
                    fill="#ff8a4c" 
                    name="Opens"
                    radius={[4, 4, 0, 0]}
                    animationDuration={1500}
                    animationBegin={200}
                    maxBarSize={20}
                  />
                  <Bar 
                    dataKey="clicks" 
                    fill="#ffb28c" 
                    name="Clicks"
                    radius={[4, 4, 0, 0]}
                    animationDuration={1500}
                    animationBegin={400}
                    maxBarSize={20}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        );
        
      case "track":
        return (
          <div className="flex flex-col items-center justify-center h-full p-6">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Buyer Preference</h3>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={animate ? 80 : 0}
                    fill="#8884d8"
                    dataKey="value"
                    animationDuration={1000}
                    animationBegin={0}
                    label={false}
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      borderColor: '#e2e8f0',
                      borderRadius: '0.5rem',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                    formatter={(value) => [`${value}%`, '']}
                  />
                  <Legend 
                    verticalAlign="middle"
                    layout="vertical" 
                    align="right"
                    iconType="circle"
                    iconSize={8}
                    formatter={(value) => <span style={{ color: '#64748b', fontSize: 12 }}>{value}</span>}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className={cn("aspect-video bg-white rounded-lg shadow-md", className)}>
      {renderInfographic()}
    </div>
  );
};

export default ProcessInfographic;
