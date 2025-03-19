
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { Users } from "lucide-react";
import { cn } from "@/lib/utils";

interface BuyerPreferenceDonutChartProps {
  data: Array<{ name: string; value: number; color: string }>;
  animate: boolean;
  className?: string;
  title?: string;
}

const BuyerPreferenceDonutChart = ({ data, animate, className }: BuyerPreferenceDonutChartProps) => {
  return (
    <div className={cn("flex flex-col h-full", className)}>
      <div className="h-[280px] w-full flex">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={animate ? 100 : 0}
              innerRadius={70}
              fill="#8884d8"
              dataKey="value"
              animationDuration={1000}
              animationBegin={0}
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

export default BuyerPreferenceDonutChart;
