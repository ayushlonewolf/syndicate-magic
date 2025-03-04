
import SectionHeading from "@/components/ui/SectionHeading";
import PricingCard from "@/components/ui/PricingCard";

const Pricing = () => {
  const pricingOptions = [
    {
      title: "Campaign Setup",
      price: "$3,000 - $5,000",
      description: "Fixed fee for each content syndication campaign setup and initial distribution.",
      features: [
        { name: "Content optimization" },
        { name: "Multi-channel distribution setup" },
        { name: "Custom audience targeting" },
        { name: "Campaign dashboard" },
        { name: "Basic analytics & reporting" },
      ],
      delay: "animate-delay-100",
    },
    {
      title: "Lead Generation (CPL)",
      price: "$40 - $250",
      description: "Cost per lead based on qualification level and targeting specificity.",
      features: [
        { name: "MQLs: $40 - $80 per lead" },
        { name: "SQLs: $80 - $150 per lead" },
        { name: "ABM-Qualified Leads: $150 - $250" },
        { name: "Advanced lead scoring" },
        { name: "CRM integration" },
      ],
      popular: true,
      delay: "animate-delay-200",
    },
    {
      title: "Monthly Retainer",
      price: "$4,000 - $12,000",
      description: "Ongoing syndication services across multiple channels with dedicated support.",
      features: [
        { name: "Multiple content pieces" },
        { name: "Continuous optimization" },
        { name: "Priority distribution" },
        { name: "Dedicated account manager" },
        { name: "Advanced analytics dashboard" },
      ],
      delay: "animate-delay-300",
    },
  ];

  return (
    <section id="pricing" className="section section-pattern">
      <SectionHeading
        title="Flexible Pricing That Grows With You"
        subtitle="Our pricing model scales with your needs and adapts to your specific targeting requirements."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingOptions.map((option, index) => (
          <PricingCard
            key={index}
            title={option.title}
            price={option.price}
            description={option.description}
            features={option.features}
            popular={option.popular}
            delay={option.delay}
          />
        ))}
      </div>

      <div className="mt-16 text-center animate-fade-in opacity-0 animate-delay-400">
        <p className="text-muted-foreground mb-6">
          Custom solutions available for enterprise clients with specific requirements.
        </p>
        <div className="glass-card inline-block px-8 py-4">
          <span className="font-semibold">Need a custom solution?</span>{" "}
          <a href="#contact" className="text-primary hover:underline">
            Request a Custom Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
