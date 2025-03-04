
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Create & Optimize",
      description: "We refine your content for syndication, ensuring it resonates with your target audience.",
      delay: "animate-delay-100",
    },
    {
      number: "02",
      title: "Distribute & Promote",
      description: "Content gets syndicated across targeted platforms, reaching decision-makers efficiently.",
      delay: "animate-delay-300",
    },
    {
      number: "03",
      title: "Track & Convert",
      description: "You receive high-intent, qualified leads with detailed engagement analytics.",
      delay: "animate-delay-500",
    },
  ];

  return (
    <section id="process" className="section">
      <SectionHeading
        title="Simple, Effective, and Scalable Syndication"
        subtitle="Our streamlined process ensures maximum impact with minimal complexity."
      />

      <div className="relative">
        {/* Progress Line */}
        <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-0.5 h-[calc(100%-120px)] bg-primary/20 hidden md:block"></div>

        <div className="space-y-16 md:space-y-0">
          {steps.map((step, index) => (
            <div
              key={index}
              className={cn(
                "relative grid md:grid-cols-2 gap-8 items-center",
                "animate-fade-in opacity-0",
                step.delay
              )}
            >
              {/* Step Number */}
              <div className={cn(
                "z-10 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
                "w-12 h-12 rounded-full bg-white shadow-lg border border-primary/20 hidden md:flex items-center justify-center",
                "text-primary font-bold"
              )}>
                {step.number}
              </div>

              <div className={cn(
                index % 2 === 0 ? "md:text-right md:order-1" : "md:order-2"
              )}>
                <div className="inline-block bg-primary/10 text-primary font-bold text-lg px-3 py-1 rounded-md mb-4 md:hidden">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>

              <div className={cn(
                "glass-card p-6 md:p-8 lg:p-10",
                index % 2 === 0 ? "md:order-2" : "md:order-1"
              )}>
                <div className="aspect-video bg-gradient-to-br from-primary/5 to-primary/20 rounded-lg flex items-center justify-center">
                  {index === 0 && (
                    <svg className="w-16 h-16 text-primary/40" viewBox="0 0 24 24" fill="none">
                      <path d="M12 6.25278V19.2528M12 6.25278C10.8321 5.47686 9.24649 5 7.5 5C5.75351 5 4.16789 5.47686 3 6.25278V19.2528C4.16789 18.4769 5.75351 18 7.5 18C9.24649 18 10.8321 18.4769 12 19.2528M12 6.25278C13.1679 5.47686 14.7535 5 16.5 5C18.2465 5 19.8321 5.47686 21 6.25278V19.2528C19.8321 18.4769 18.2465 18 16.5 18C14.7535 18 13.1679 18.4769 12 19.2528" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                  {index === 1 && (
                    <svg className="w-16 h-16 text-primary/40" viewBox="0 0 24 24" fill="none">
                      <path d="M19 12H5M5 12L12 5M5 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                  {index === 2 && (
                    <svg className="w-16 h-16 text-primary/40" viewBox="0 0 24 24" fill="none">
                      <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5M12 12H15M12 16H15M9 12H9.01M9 16H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 animate-fade-in opacity-0 animate-delay-600">
          <Button className="cta-button">
            Start Your Campaign Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Process;
