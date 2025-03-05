
import { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, LabelList } from "recharts";
import { cn } from "@/lib/utils";

interface AnimatedChartProps {
  className?: string;
  delay?: string;
}

const AnimatedChart = ({ className, delay = "animate-delay-300" }: AnimatedChartProps) => {
  const [data, setData] = useState([
    { name: "Jan", views: 0, conversions: 0 },
    { name: "Feb", views: 0, conversions: 0 },
    { name: "Mar", views: 0, conversions: 0 },
    { name: "Apr", views: 0, conversions: 0 },
    { name: "May", views: 0, conversions: 0 },
    { name: "Jun", views: 0, conversions: 0 },
    { name: "Jul", views: 0, conversions: 0 },
    { name: "Aug", views: 0, conversions: 0 },
    { name: "Sep", views: 0, conversions: 0 },
    { name: "Oct", views: 0, conversions: 0 },
  ]);

  const finalData = [
    { name: "Jan", views: 450, conversions: 220 },
    { name: "Feb", views: 380, conversions: 180 },
    { name: "Mar", views: 520, conversions: 280 },
    { name: "Apr", views: 400, conversions: 200 },
    { name: "May", views: 350, conversions: 160 },
    { name: "Jun", views: 450, conversions: 230 },
    { name: "Jul", views: 480, conversions: 250 },
    { name: "Aug", views: 420, conversions: 210 },
    { name: "Sep", views: 500, conversions: 270 },
    { name: "Oct", views: 550, conversions: 300 },
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
          views: Math.round((finalData[index].views / steps) * currentStep),
          conversions: Math.round((finalData[index].conversions / steps) * currentStep),
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

  const getBarColor = (type: string) => {
    return type === "views" ? "rgba(255, 229, 210, 0.9)" : "rgba(255, 138, 76, 1)";
  };

  // Calculate total and growth percentages
  const totalViews = data.reduce((sum, item) => sum + item.views, 0);
  const totalConversions = data.reduce((sum, item) => sum + item.conversions, 0);
  const viewsGrowth = 9.2;
  const conversionsGrowth = 6.6;

  return (
    <div className="relative bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-bold mb-3 text-gray-800">Your Campaign Performance</h3>
      
      <div className="grid grid-cols-2 gap-8 mb-6">
        <div>
          <div className="text-gray-500 text-sm mb-1">Views</div>
          <div className="flex items-center">
            <span className="text-2xl font-bold mr-2">{totalViews.toLocaleString()}</span>
            <span className="text-green-500 text-sm flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12 7a1 1 0 01-1 1H9a1 1 0 01-1-1V6a1 1 0 011-1h2a1 1 0 011 1v1zm-3 5a1 1 0 011-1h2a1 1 0 011 1v1a1 1 0 01-1 1H9a1 1 0 01-1-1v-1z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
              </svg>
              {viewsGrowth}%
            </span>
          </div>
        </div>
        <div>
          <div className="text-gray-500 text-sm mb-1">Conversions</div>
          <div className="flex items-center">
            <span className="text-2xl font-bold mr-2">{totalConversions.toLocaleString()}</span>
            <span className="text-green-500 text-sm flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12 7a1 1 0 01-1 1H9a1 1 0 01-1-1V6a1 1 0 011-1h2a1 1 0 011 1v1zm-3 5a1 1 0 011-1h2a1 1 0 011 1v1a1 1 0 01-1 1H9a1 1 0 01-1-1v-1z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
              </svg>
              {conversionsGrowth}%
            </span>
          </div>
        </div>
      </div>
      
      <div className={cn("w-full h-48 animate-fade-in opacity-0", delay, className)}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart 
            data={data} 
            margin={{ top: 0, right: 0, left: 0, bottom: 5 }}
            barGap={0}
            barCategoryGap="35%"
          >
            <XAxis 
              dataKey="name" 
              tick={{ fill: '#94a3b8', fontSize: 12 }}
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
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
              cursor={false}
            />
            <Bar 
              dataKey="views" 
              name="Views" 
              fill={getBarColor("views")}
              radius={[4, 4, 0, 0]}
              maxBarSize={30}
            />
            <Bar 
              dataKey="conversions" 
              name="Conversions" 
              fill={getBarColor("conversions")}
              radius={[4, 4, 0, 0]}
              maxBarSize={30}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AnimatedChart;
