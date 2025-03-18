
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from "recharts";
import { ArrowUpRight } from "lucide-react";

interface LeadGenerationBarChartProps {
  data: Array<{ name: string; leads: number; growth: number }>;
  className?: string;
  title?: string;
}

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

const LeadGenerationBarChart = ({ data, className, title = "Lead Generation" }: LeadGenerationBarChartProps) => {
  const calculateGrowthPercentage = () => {
    if (data.length < 2) return 0;
    const firstValue = data[0].leads;
    const lastValue = data[data.length - 1].leads;
    return Math.round(((lastValue - firstValue) / firstValue) * 100);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-4">
      <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
        {title}
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
};

export default LeadGenerationBarChart;
