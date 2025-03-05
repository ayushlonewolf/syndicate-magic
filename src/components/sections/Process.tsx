
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/SectionHeading";
import ProcessInfographic from "@/components/ui/ProcessInfographic";
import { cn } from "@/lib/utils";

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Create & Optimize",
      description: "We refine your content for syndication, ensuring it resonates with your target audience.",
      delay: "animate-delay-100",
      infographicType: "create",
    },
    {
      number: "02",
      title: "Distribute & Promote",
      description: "Content gets syndicated across targeted platforms, reaching decision-makers efficiently.",
      delay: "animate-delay-300",
      infographicType: "distribute",
    },
    {
      number: "03",
      title: "Track & Convert",
      description: "You receive high-intent, qualified leads with detailed engagement analytics.",
      delay: "animate-delay-500",
      infographicType: "track",
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
                <ProcessInfographic 
                  type={step.infographicType as "create" | "distribute" | "track"} 
                  delay={`animate-delay-${(index + 3) * 100}`}
                />
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
