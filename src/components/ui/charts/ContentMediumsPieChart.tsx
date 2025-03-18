
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { TrendingUp, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContentMediumsPieChartProps {
  data: Array<{ name: string; value: number; color: string }>;
  animate: boolean;
  className?: string;
  title?: string;
}

const ContentMediumsPieChart = ({ data, animate, className, title = "Content Mediums" }: ContentMediumsPieChartProps) => {
  return (
    <div className={cn("flex flex-col p-6 h-full", className)}>
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-xl font-bold text-gray-800">
          {title}
        </h3>
        <div className="flex items-center">
          <TrendingUp className="h-5 w-5 text-green-500 mr-1" />
          <Mail className="h-5 w-5 text-primary" />
        </div>
      </div>
      
      <div className="h-[280px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={animate ? 100 : 0}
              innerRadius={animate ? 60 : 0}
              fill="#8884d8"
              dataKey="value"
              animationDuration={1200}
              animationBegin={300}
              paddingAngle={2}
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.color} 
                  stroke="#FFFFFF"
                  strokeWidth={2}
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{ 
                backgroundColor: 'white', 
                borderColor: '#e2e8f0',
                borderRadius: '0.5rem',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                padding: '8px 12px',
                border: 'none'
              }}
              formatter={(value) => [`${value}%`, '']}
            />
            <Legend 
              layout="horizontal" 
              verticalAlign="bottom"
              align="center"
              iconType="circle"
              iconSize={10}
              formatter={(value, entry: any) => (
                <span style={{ color: '#334155', fontSize: 13, fontWeight: 500, margin: '0 8px' }}>
                  {value}
                </span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ContentMediumsPieChart;
