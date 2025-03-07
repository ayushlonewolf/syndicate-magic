
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { Users } from "lucide-react";

interface BuyerPreferenceDonutChartProps {
  data: Array<{ name: string; value: number; color: string }>;
  animate: boolean;
  className?: string;
}

const BuyerPreferenceDonutChart = ({ data, animate, className }: BuyerPreferenceDonutChartProps) => {
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
};

export default BuyerPreferenceDonutChart;
