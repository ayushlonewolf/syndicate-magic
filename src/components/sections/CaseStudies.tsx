
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/SectionHeading";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "SaaS Firm Doubles SQLs",
      description: "How a leading SaaS company doubled their sales-qualified leads through our research report syndication strategy.",
      stats: [
        { value: "107%", label: "Increase in SQLs" },
        { value: "3.2x", label: "ROI" },
      ],
      category: "SaaS",
      delay: "animate-delay-100",
    },
    {
      title: "Cybersecurity Lead Conversion",
      description: "Cybersecurity company achieved a 45% increase in lead conversions through targeted content syndication.",
      stats: [
        { value: "45%", label: "Higher Conversion" },
        { value: "12,400+", label: "New Leads" },
      ],
      category: "Cybersecurity",
      delay: "animate-delay-200",
    },
    {
      title: "Martech LinkedIn Syndication",
      description: "Martech company improved engagement by combining LinkedIn and PR syndication strategies.",
      stats: [
        { value: "68%", label: "Engagement Increase" },
        { value: "5.4x", label: "Content Reach" },
      ],
      category: "MarTech",
      delay: "animate-delay-300",
    },
  ];

  return (
    <section id="case-studies" className="section">
      <SectionHeading
        title="See How We've Helped B2B Brands Scale With Syndication"
        subtitle="Real results from our content syndication campaigns across various B2B technology sectors."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {caseStudies.map((study, index) => (
          <div
            key={index}
            className={cn(
              "glass-card p-6 hover:shadow-xl transition-all duration-500",
              "animate-fade-in opacity-0",
              study.delay
            )}
          >
            <div className="mb-4 inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
              {study.category}
            </div>
            <h3 className="text-xl font-bold mb-3">{study.title}</h3>
            <p className="text-muted-foreground mb-6">{study.description}</p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              {study.stats.map((stat, i) => (
                <div key={i} className="bg-secondary/50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <a href="#" className="inline-flex items-center text-primary font-medium hover:underline">
              Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        ))}
      </div>

      <div className="text-center mt-12 animate-fade-in opacity-0 animate-delay-400">
        <Button className="secondary-button">
          Read More Success Stories
        </Button>
      </div>
    </section>
  );
};

export default CaseStudies;
