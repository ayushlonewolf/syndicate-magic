
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface AnimatedCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
  delay?: string;
}

const AnimatedCard = ({
  icon,
  title,
  description,
  className,
  delay = "animate-delay-100",
}: AnimatedCardProps) => {
  return (
    <div
      className={cn(
        "glass-card p-6 hover:shadow-xl transition-all duration-500",
        delay,
        className
      )}
    >
      <div className="text-primary mb-4 text-3xl">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default AnimatedCard;
