
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

  const renderInfographic = () => {
    switch (type) {
      case "create":
        return <ContentMediumsPieChart data={data} animate={animate} title={getChartTitle()} />;
        
      case "distribute":
        return <LeadGenerationBarChart data={data} title={getChartTitle()} />;
        
      case "track":
        return <BuyerPreferenceDonutChart data={data} animate={animate} title={getChartTitle()} />;
        
      default:
        return null;
    }
  };

  return (
    <div className={cn("aspect-video bg-white/90 rounded-lg shadow-md h-full flex items-center justify-center", className)}>
      {renderInfographic()}
    </div>
  );
};

export default ProcessInfographic;
