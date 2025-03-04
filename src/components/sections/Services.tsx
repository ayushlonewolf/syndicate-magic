
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCard from "@/components/ui/AnimatedCard";
import { Button } from "@/components/ui/button";
import { FileText, Users, Search, TrendingUp } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <FileText />,
      title: "Content Syndication",
      description: "Distribute research reports & whitepapers to targeted audiences across multiple channels.",
      delay: "animate-delay-100"
    },
    {
      icon: <Users />,
      title: "Lead Generation",
      description: "Delivering high-intent leads from targeted audiences that match your ideal customer profile.",
      delay: "animate-delay-200"
    },
    {
      icon: <Search />,
      title: "SEO & LinkedIn Syndication",
      description: "Ensuring long-term visibility and engagement through strategic content distribution.",
      delay: "animate-delay-300"
    },
    {
      icon: <TrendingUp />,
      title: "Paid Syndication",
      description: "Scale reach through Outbrain, Taboola, Bombora and other premium networks.",
      delay: "animate-delay-400"
    }
  ];

  return (
    <section id="services" className="section section-pattern">
      <SectionHeading
        title="Full-Funnel B2B Content Syndication That Delivers Results"
        subtitle="Our comprehensive suite of content syndication services designed specifically for B2B technology companies."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {services.map((service, index) => (
          <AnimatedCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            delay={service.delay}
          />
        ))}
      </div>

      <div className="text-center">
        <Button className="cta-button animate-fade-in opacity-0 animate-delay-500">
          Discover Our Services
        </Button>
      </div>
    </section>
  );
};

export default Services;
