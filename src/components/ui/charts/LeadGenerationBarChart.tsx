
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from "recharts";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

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
      fontSize={13}
      fontWeight="600"
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
    <div className={cn("flex flex-col p-6 h-full", className)}>
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-xl font-bold text-gray-800">
          {title}
        </h3>
        <ArrowUpRight className="h-5 w-5 text-green-500" />
      </div>
      
      <div className="h-[210px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 30,
              right: 0,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
            <XAxis 
              dataKey="name"
              tick={{ fill: '#64748b', fontSize: 13, fontWeight: 500 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis 
              hide={true}
            />
            <Tooltip
              contentStyle={{ 
                backgroundColor: 'white', 
                borderColor: '#e2e8f0',
                borderRadius: '0.5rem',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                padding: '8px 12px',
                border: 'none'
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
              maxBarSize={50}
            >
              <LabelList dataKey="leads" position="top" content={renderCustomizedLabel} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-6 bg-green-50 text-green-600 px-5 py-2 rounded-full font-bold text-sm inline-flex items-center self-center">
        +{calculateGrowthPercentage()}% <span className="ml-1 text-green-700">growth</span>
      </div>
    </div>
  );
};

export default LeadGenerationBarChart;
