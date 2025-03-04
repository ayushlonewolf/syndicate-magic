
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCard from "@/components/ui/AnimatedCard";
import { Share2, Target, BarChart4, DollarSign } from "lucide-react";

const Differentiators = () => {
  const differentiators = [
    {
      icon: <Share2 />,
      title: "Multi-Channel Distribution",
      description: "We syndicate content across press releases, social media, paid networks, and SEO—not just email.",
      delay: "animate-delay-100"
    },
    {
      icon: <Target />,
      title: "Precision Targeting",
      description: "Ensure your content reaches CMOs, Demand Gen Heads, and Decision-Makers who matter to your business.",
      delay: "animate-delay-200"
    },
    {
      icon: <BarChart4 />,
      title: "Data-Driven Insights & Reporting",
      description: "Track engagement, conversion rates, and optimize campaigns in real time with detailed analytics.",
      delay: "animate-delay-300"
    },
    {
      icon: <DollarSign />,
      title: "Cost-Effective Performance Model",
      description: "Only pay for quality leads that fit your ideal customer profile, maximizing your marketing ROI.",
      delay: "animate-delay-400"
    }
  ];

  return (
    <section id="why-us" className="section bg-secondary/50">
      <SectionHeading
        title="Why Top B2B Brands Trust Us for Content Syndication"
        subtitle="Our approach delivers consistent results through strategic distribution and rigorous quality control."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {differentiators.map((item, index) => (
          <AnimatedCard
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
            delay={item.delay}
          />
        ))}
      </div>
    </section>
  );
};

export default Differentiators;
