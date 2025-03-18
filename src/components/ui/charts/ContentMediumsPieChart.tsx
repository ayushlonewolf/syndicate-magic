
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
    <div className="flex flex-col items-center justify-center h-full p-4 w-full">
      <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
        {title}
        <div className="flex items-center ml-2">
          <TrendingUp className="h-5 w-5 text-green-500" />
          <Mail className="h-5 w-5 text-primary ml-1" />
        </div>
      </h3>
      <div className="h-64 w-full relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={animate ? 90 : 0}
              innerRadius={animate ? 40 : 0}
              fill="#8884d8"
              dataKey="value"
              animationDuration={1200}
              animationBegin={300}
              paddingAngle={2}
              label={({ name, value }) => `${name}: ${value}%`}
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.color} 
                  stroke="white" 
                  strokeWidth={1}
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
              verticalAlign="bottom"
              layout="horizontal" 
              align="center"
              iconType="circle"
              iconSize={10}
              formatter={(value) => <span style={{ color: '#64748b', fontSize: 12 }}>{value}</span>}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ContentMediumsPieChart;
