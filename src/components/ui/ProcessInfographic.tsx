
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
    }, 500);
    
    return () => clearTimeout(timer);
  }, [type]);

  const renderInfographic = () => {
    switch (type) {
      case "create":
        return <ContentMediumsPieChart data={data} animate={animate} />;
        
      case "distribute":
        return <LeadGenerationBarChart data={data} />;
        
      case "track":
        return <BuyerPreferenceDonutChart data={data} animate={animate} />;
        
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
