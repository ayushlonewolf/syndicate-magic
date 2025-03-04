
import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "This team transformed our content into a lead generation machine! Their multi-channel approach delivered results beyond our expectations.",
      author: "Sarah Johnson",
      position: "VP of Marketing",
      company: "CloudTech Solutions",
      delay: "animate-delay-100",
    },
    {
      quote: "We saw a huge increase in engagement from high-value accounts. Their targeting precision is what sets them apart from other syndication services.",
      author: "Michael Torres",
      position: "CMO",
      company: "DataSecure Inc.",
      delay: "animate-delay-200",
    },
    {
      quote: "The quality of leads we received allowed us to exceed our pipeline targets for three consecutive quarters.",
      author: "Jennifer Chen",
      position: "Demand Gen Director",
      company: "Nexus Systems",
      delay: "animate-delay-300",
    },
  ];

  return (
    <section id="testimonials" className="section bg-secondary/50">
      <SectionHeading
        title="What Our Clients Say About Us"
        subtitle="Don't just take our word for it—here's what our clients have to say about their experience with our content syndication services."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            quote={testimonial.quote}
            author={testimonial.author}
            position={testimonial.position}
            company={testimonial.company}
            delay={testimonial.delay}
          />
        ))}
      </div>

      <div className="text-center mt-12 animate-fade-in opacity-0 animate-delay-400">
        <Button className="cta-button">
          Let's Discuss Your Next Campaign
        </Button>
      </div>
    </section>
  );
};

export default Testimonials;
