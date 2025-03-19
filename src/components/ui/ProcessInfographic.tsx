
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import ContentMediumsPieChart from "./charts/ContentMediumsPieChart";
import LeadGenerationBarChart from "./charts/LeadGenerationBarChart";
import BuyerPreferenceDonutChart from "./charts/BuyerPreferenceDonutChart";
import { 
  getContentMediumsData,
  getLeadGenerationData, 
  getBuyerPreferenceData,
  getInitialEmptyData,
  ChartType
} from "./charts/chartDataProvider";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./card";
import { AlertCircle, TrendingUp, BarChart2 } from "lucide-react";

interface ProcessInfographicProps {
  type: ChartType;
  className?: string;
  delay?: string;
}

const ProcessInfographic = ({ type, className, delay = "animate-delay-300" }: ProcessInfographicProps) => {
  const [animate, setAnimate] = useState(false);
  const [data, setData] = useState<any[]>(getInitialEmptyData(type));
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
      
      switch (type) {
        case "create":
          setData(getContentMediumsData());
          break;
        case "distribute":
          setData(getLeadGenerationData());
          break;
        case "track":
          setData(getBuyerPreferenceData());
          break;
      }
    }, 700);
    
    return () => clearTimeout(timer);
  }, [type]);

  const getChartTitle = () => {
    switch (type) {
      case "create":
        return "Content Distribution Channels";
      case "distribute":
        return "Lead Generation Growth";
      case "track":
        return "Decision Maker Engagement";
      default:
        return "";
    }
  };

  const getChartDescription = () => {
    switch (type) {
      case "create":
        return "Effectiveness of different content mediums in reaching your target audience";
      case "distribute":
        return "Month-over-month increase in qualified leads through our syndication network";
      case "track":
        return "Breakdown of engagement by decision-maker roles across industries";
      default:
        return "";
    }
  };

  const getChartInsight = () => {
    switch (type) {
      case "create":
        return "Interactive content sees 2x higher engagement than static formats";
      case "distribute":
        return "Consistent growth trajectory with 6-month average of 27% increase";
      case "track":
        return "C-level executives represent the highest engagement-to-conversion ratio";
      default:
        return "";
    }
  };

  const renderInfographic = () => {
    switch (type) {
      case "create":
        return (
          <Card className="h-full border-0 shadow-none">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                {getChartTitle()} 
                <AlertCircle className="h-4 w-4 text-amber-500" />
              </CardTitle>
              <CardDescription className="text-sm text-slate-500">
                {getChartDescription()}
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
              <ContentMediumsPieChart data={data} animate={animate} />
            </CardContent>
            <CardFooter className="flex items-center pt-2 text-xs text-slate-500 bg-slate-50 rounded-b-lg p-3 mt-auto">
              <TrendingUp className="h-3 w-3 mr-1 text-green-500" /> 
              <span>{getChartInsight()}</span>
            </CardFooter>
          </Card>
        );
        
      case "distribute":
        return (
          <Card className="h-full border-0 shadow-none">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                {getChartTitle()}
                <TrendingUp className="h-4 w-4 text-green-500" />
              </CardTitle>
              <CardDescription className="text-sm text-slate-500">
                {getChartDescription()}
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
              <LeadGenerationBarChart data={data} />
            </CardContent>
            <CardFooter className="flex items-center pt-2 text-xs text-slate-500 bg-slate-50 rounded-b-lg p-3 mt-auto">
              <BarChart2 className="h-3 w-3 mr-1 text-blue-500" /> 
              <span>{getChartInsight()}</span>
            </CardFooter>
          </Card>
        );
        
      case "track":
        return (
          <Card className="h-full border-0 shadow-none">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                {getChartTitle()}
                <AlertCircle className="h-4 w-4 text-primary" />
              </CardTitle>
              <CardDescription className="text-sm text-slate-500">
                {getChartDescription()}
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
              <BuyerPreferenceDonutChart data={data} animate={animate} />
            </CardContent>
            <CardFooter className="flex items-center pt-2 text-xs text-slate-500 bg-slate-50 rounded-b-lg p-3 mt-auto">
              <TrendingUp className="h-3 w-3 mr-1 text-green-500" /> 
              <span>{getChartInsight()}</span>
            </CardFooter>
          </Card>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className={cn("bg-white rounded-xl shadow-lg h-full", className)}>
      {renderInfographic()}
    </div>
  );
};

export default ProcessInfographic;
