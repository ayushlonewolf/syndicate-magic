
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import SectionHeading from "@/components/ui/SectionHeading";
import ProcessInfographic from "@/components/ui/ProcessInfographic";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const Process = () => {
  const [openDetails, setOpenDetails] = useState<number | null>(null);

  const steps = [
    {
      number: "01",
      title: "Create & Optimize",
      description: "We refine your content for syndication, ensuring it resonates with your target audience.",
      delay: "animate-delay-100",
      infographicType: "create",
      details: [
        "Content analysis and optimization for maximum engagement",
        "Format conversion to match platform requirements",
        "SEO enhancement for improved discoverability",
        "Audience-specific messaging adaptation",
        "Professional editing and quality assurance"
      ],
      statistic: "93% of B2B buyers engage with optimized content vs. 27% with unoptimized content",
      caseStudy: "Tech SaaS company saw 156% increase in qualified leads after content optimization"
    },
    {
      number: "02",
      title: "Distribute & Promote",
      description: "Content gets syndicated across targeted platforms, reaching decision-makers efficiently.",
      delay: "animate-delay-300",
      infographicType: "distribute",
      details: [
        "Multi-channel distribution across industry-specific platforms",
        "Programmatic advertising to targeted decision-makers",
        "Strategic promotion timing based on audience behavior",
        "Social amplification through industry influencers",
        "Continuous performance monitoring and optimization"
      ],
      statistic: "64% higher conversion rates through syndicated content vs. single-channel publishing",
      caseStudy: "Manufacturing client reached 3.5x more qualified prospects using our distribution network"
    },
    {
      number: "03",
      title: "Track & Convert",
      description: "You receive high-intent, qualified leads with detailed engagement analytics.",
      delay: "animate-delay-500",
      infographicType: "track",
      details: [
        "Real-time lead qualification and scoring",
        "Detailed engagement analytics and attribution",
        "Behavioral intent tracking across channels",
        "Integration with your CRM and marketing automation",
        "Regular performance reporting and strategy adjustment"
      ],
      statistic: "41% shorter sales cycles when using intent data from content engagement",
      caseStudy: "Financial services client increased conversion rate by 78% with our tracking insights"
    },
  ];

  const toggleDetails = (index: number) => {
    setOpenDetails(openDetails === index ? null : index);
  };

  return (
    <section id="process" className="section section-pattern py-24">
      <SectionHeading
        title="Simple, Effective, and Scalable Syndication"
        subtitle="Our streamlined process delivers maximum impact with minimal complexity, helping you reach decision-makers efficiently."
      />

      <div className="relative mt-16">
        {/* Progress Line */}
        <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-0.5 h-[calc(100%-200px)] bg-primary/20 hidden md:block"></div>

        <div className="space-y-28 md:space-y-40">
          {steps.map((step, index) => (
            <div
              key={index}
              className={cn(
                "relative grid md:grid-cols-2 gap-10 md:gap-16 items-center",
                "animate-fade-in opacity-0",
                step.delay
              )}
            >
              {/* Step Number */}
              <div className={cn(
                "z-10 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
                "w-16 h-16 rounded-full bg-white shadow-lg border border-primary/20 hidden md:flex items-center justify-center",
                "text-primary font-bold text-2xl"
              )}>
                {step.number}
              </div>

              <div className={cn(
                index % 2 === 0 ? "md:text-right md:order-1" : "md:order-2",
                "px-4 md:px-8"
              )}>
                <div className="inline-block bg-primary/10 text-primary font-bold text-lg px-4 py-2 rounded-md mb-5 md:hidden">
                  {step.number}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{step.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">{step.description}</p>
                
                <Card className="bg-gradient-to-br from-white to-slate-50 p-4 border border-slate-100 mb-6 shadow-sm">
                  <h4 className="font-medium text-primary mb-2">Key Insight:</h4>
                  <p className="text-sm text-slate-700">{step.statistic}</p>
                </Card>
                
                <Collapsible 
                  open={openDetails === index} 
                  onOpenChange={() => toggleDetails(index)}
                  className="mb-6"
                >
                  <CollapsibleTrigger className="flex items-center gap-2 text-sm font-medium text-primary hover:underline transition-all">
                    {openDetails === index ? (
                      <>
                        <ChevronUp className="h-4 w-4" />
                        <span>Hide process details</span>
                      </>
                    ) : (
                      <>
                        <ChevronDown className="h-4 w-4" />
                        <span>Show process details</span>
                      </>
                    )}
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-4 space-y-2">
                    <div className={cn(
                      "text-left p-4 bg-slate-50 rounded-lg border border-slate-100",
                      index % 2 === 0 ? "" : ""
                    )}>
                      <h4 className="font-medium mb-3 text-slate-800">What we do:</h4>
                      <ul className="space-y-2">
                        {step.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 pt-4 border-t border-slate-200">
                        <h4 className="font-medium mb-2 text-slate-800">Success Story:</h4>
                        <p className="text-sm text-slate-700 italic">{step.caseStudy}</p>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
                
                <Button variant="outline" className="hidden md:inline-flex">
                  Learn More
                </Button>
              </div>

              <div className={cn(
                "glass-card p-6 md:p-8 lg:p-10 h-full transform transition-all duration-500 hover:shadow-xl rounded-xl",
                index % 2 === 0 ? "md:order-2" : "md:order-1"
              )}>
                <ProcessInfographic 
                  type={step.infographicType as "create" | "distribute" | "track"} 
                  delay={`animate-delay-${(index + 3) * 100}`}
                  className="h-full"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-24 animate-fade-in opacity-0 animate-delay-600">
          <Button className="cta-button">
            Start Your Campaign Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Process;
