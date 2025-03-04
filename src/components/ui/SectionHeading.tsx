
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  subtitleClassName?: string;
}

const SectionHeading = ({
  title,
  subtitle,
  centered = true,
  className,
  subtitleClassName,
}: SectionHeadingProps) => {
  return (
    <div className={cn(centered ? "text-center mx-auto" : "", "mb-12 max-w-3xl", className)}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-lg text-muted-foreground leading-relaxed",
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
