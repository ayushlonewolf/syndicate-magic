
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  className?: string;
  delay?: string;
}

const TestimonialCard = ({
  quote,
  author,
  position,
  company,
  className,
  delay = "animate-delay-100",
}: TestimonialCardProps) => {
  return (
    <div
      className={cn(
        "glass-card p-6 hover:shadow-xl transition-all duration-500 animate-fade-in opacity-0",
        delay,
        className
      )}
    >
      <div className="mb-6">
        <svg
          className="h-8 w-8 text-primary/40"
          fill="currentColor"
          viewBox="0 0 32 32"
          aria-hidden="true"
        >
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
      </div>
      <p className="text-lg font-medium mb-5">{quote}</p>
      <div className="flex items-center">
        <div className="mr-3 h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-semibold">
          {author.charAt(0)}
        </div>
        <div>
          <p className="font-medium">{author}</p>
          <p className="text-sm text-muted-foreground">
            {position}, {company}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
