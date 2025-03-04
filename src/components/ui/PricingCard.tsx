
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PricingFeature {
  name: string;
}

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: PricingFeature[];
  popular?: boolean;
  className?: string;
  delay?: string;
}

const PricingCard = ({
  title,
  price,
  description,
  features,
  popular = false,
  className,
  delay = "animate-delay-100",
}: PricingCardProps) => {
  return (
    <div
      className={cn(
        "glass-card p-8 border hover:shadow-xl transition-all duration-500 animate-fade-in opacity-0 flex flex-col h-full",
        popular ? "border-primary/50 ring-1 ring-primary/20" : "border-border",
        delay,
        className
      )}
    >
      {popular && (
        <div className="py-1 px-3 bg-primary/10 text-primary font-medium text-sm rounded-full self-start mb-4">
          Popular Choice
        </div>
      )}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="mb-4">
        <span className="text-3xl font-bold">{price}</span>
      </div>
      <p className="text-muted-foreground mb-6">{description}</p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-primary mr-2">
              <Check size={18} />
            </span>
            <span className="text-sm">{feature.name}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto">
        <Button
          className={cn(
            "w-full transition-all duration-300",
            popular ? "bg-primary hover:bg-primary/90" : "bg-secondary text-primary hover:bg-secondary/80"
          )}
        >
          Request Quote
        </Button>
      </div>
    </div>
  );
};

export default PricingCard;
