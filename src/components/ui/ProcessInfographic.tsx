
import { useState, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid, LabelList } from "recharts";
import { TrendingUp, Users, ArrowUpRight, PieChartIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProcessInfographicProps {
  type: "create" | "distribute" | "track";
  className?: string;
  delay?: string;
}

const getGreenColorShades = (index: number, total: number) => {
  const baseColor = "#22c55e";
  const lightestColor = "#dcfce7";
  
  const lightenPercent = (index / (total - 1)) * 100;
  return index === 0 ? baseColor : calculateColor(baseColor, lightenPercent);
};

const calculateColor = (baseColor: string, percent: number) => {
  const r = parseInt(baseColor.slice(1, 3), 16);
  const g = parseInt(baseColor.slice(3, 5), 16);
  const b = parseInt(baseColor.slice(5, 7), 16);
  
  const targetR = Math.min(255, r + Math.floor((255 - r) * (percent / 100)));
  const targetG = Math.min(255, g + Math.floor((255 - g) * (percent / 100)));
  const targetB = Math.min(255, b + Math.floor((255 - b) * (percent / 100)));
  
  return `#${targetR.toString(16).padStart(2, '0')}${targetG.toString(16).padStart(2, '0')}${targetB.toString(16).padStart(2, '0')}`;
};

const renderCustomizedLabel = (props: any) => {
  const { x, y, width, value } = props;
  return (
    <text 
      x={x + width / 2} 
      y={y - 10} 
      fill="#22c55e" 
      textAnchor="middle" 
      dominantBaseline="middle"
      fontSize={12}
      fontWeight="bold"
    >
      {value}
    </text>
  );
};

const ProcessInfographic = ({ type, className, delay = "animate-delay-300" }: ProcessInfographicProps) => {
  const [animate, setAnimate] = useState(false);
  const [data, setData] = useState<any[]>([]);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
      
      if (type === "create") {
        setData([
          { name: "Content Plan", value: 31, color: "#22c55e" },
          { name: "Research", value: 18, color: "#4ade80" },
          { name: "Optimization", value: 18, color: "#86efac" },
          { name: "Guest Blogging", value: 16, color: "#bbf7d0" },
          { name: "Paid Distribution", value: 14, color: "#dcfce7" },
          { name: "Distribution Platforms", value: 3, color: "#f0fdf4" }
        ]);
      } else if (type === "distribute") {
        setData([
          { name: "Jan", leads: 435, growth: 0 },
          { name: "Feb", leads: 628, growth: 44 },
          { name: "Mar", leads: 822, growth: 31 },
          { name: "Apr", leads: 1160, growth: 41 },
          { name: "May", leads: 1643, growth: 42 },
          { name: "Jun", leads: 2223, growth: 35 }
        ]);
      } else if (type === "track") {
        setData([
          { name: "CMO", value: 45, color: "#22c55e" },
          { name: "CEO", value: 25, color: "#4ade80" },
          { name: "CFO", value: 15, color: "#86efac" },
          { name: "Manager", value: 15, color: "#bbf7d0" }
        ]);
      }
    }, 500);
    
    return () => clearTimeout(timer);
  }, [type]);

  const calculateGrowthPercentage = () => {
    if (type !== "distribute" || data.length < 2) return 0;
    const firstValue = data[0].leads;
    const lastValue = data[data.length - 1].leads;
    return Math.round(((lastValue - firstValue) / firstValue) * 100);
  };

  const renderInfographic = () => {
    switch (type) {
      case "create":
        return (
          <div className="flex flex-col items-center justify-center h-full p-4">
            <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
              Content Mediums
              <TrendingUp className="ml-2 h-5 w-5 text-green-500" />
            </h3>
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
                    label={({ name, value }) => `${name}: ${value}%`}
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
          <div className="flex flex-col items-center justify-center h-full p-4">
            <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
              Lead Generation
              <ArrowUpRight className="ml-2 h-5 w-5 text-green-500" />
            </h3>
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
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis 
                    dataKey="name"
                    tick={{ fill: '#64748b', fontSize: 12 }}
                    axisLine={{ stroke: '#e2e8f0' }}
                    tickLine={false}
                  />
                  <YAxis 
                    tick={{ fill: '#64748b', fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(value) => value.toString()}
                  />
                  <Tooltip
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      borderColor: '#e2e8f0',
                      borderRadius: '0.5rem',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                    cursor={false}
                    formatter={(value) => [`${value}`, 'Leads']}
                  />
                  <Bar 
                    dataKey="leads" 
                    fill="#22c55e" 
                    name="Leads Generated"
                    radius={[4, 4, 0, 0]}
                    animationDuration={1500}
                    animationBegin={200}
                    maxBarSize={40}
                  >
                    <LabelList dataKey="leads" position="top" content={renderCustomizedLabel} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 bg-green-50 text-green-600 px-4 py-2 rounded-full font-bold text-sm inline-flex items-center">
              +{calculateGrowthPercentage()}% <span className="ml-1 text-green-700">growth</span>
            </div>
          </div>
        );
        
      case "track":
        return (
          <div className="flex flex-col items-center justify-center h-full p-4">
            <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
              Buyer Preference
              <Users className="ml-2 h-5 w-5 text-green-500" />
            </h3>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={animate ? 80 : 0}
                    innerRadius={40}
                    fill="#8884d8"
                    dataKey="value"
                    animationDuration={1000}
                    animationBegin={0}
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {data.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={entry.color} 
                        className="hover:opacity-80 transition-opacity" 
                      />
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
