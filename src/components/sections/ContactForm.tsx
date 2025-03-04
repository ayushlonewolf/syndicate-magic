
import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { 
  Phone, 
  Mail, 
  Send,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { cn } from "@/lib/utils";

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    helpType: "",
    message: "",
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted with:", formState);
    // Here you would normally send the data to your backend
    setTimeout(() => {
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="section section-pattern">
      <SectionHeading
        title="Ready to Scale Your Content Syndication?"
        subtitle="Fill out the form below and one of our experts will get back to you within 24 hours."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in-right opacity-0">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="glass-card p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Smith"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="bg-white/80"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Your Company"
                    required
                    value={formState.company}
                    onChange={handleChange}
                    className="bg-white/80"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="bg-white/80"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="(555) 123-4567"
                    value={formState.phone}
                    onChange={handleChange}
                    className="bg-white/80"
                  />
                </div>
              </div>
              
              <div className="space-y-2 mb-6">
                <Label htmlFor="helpType">How Can We Help?</Label>
                <select
                  id="helpType"
                  name="helpType"
                  value={formState.helpType}
                  onChange={handleChange as any}
                  className="w-full rounded-md border border-input bg-white/80 px-3 py-2 text-sm ring-offset-background 
                            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  required
                >
                  <option value="" disabled>Select an option</option>
                  <option value="strategy">Content Syndication Strategy</option>
                  <option value="pricing">Pricing Information</option>
                  <option value="custom">Custom Solution</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="space-y-2 mb-6">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your content syndication needs..."
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  className="bg-white/80"
                />
              </div>
              
              <Button type="submit" className="w-full cta-button">
                <Send className="mr-2 h-4 w-4" /> Let's Get Started
              </Button>
            </form>
          ) : (
            <div className="glass-card p-12 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Thank You!</h3>
              <p className="text-muted-foreground mb-6">
                Your message has been sent successfully. One of our syndication experts will get back to you within 24 hours.
              </p>
              <Button
                onClick={() => setIsSubmitted(false)}
                className="secondary-button"
              >
                Send Another Message
              </Button>
            </div>
          )}
        </div>
        
        <div className="animate-fade-in-left opacity-0 animate-delay-200">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Why Work With Us</h3>
              <ul className="space-y-4">
                {[
                  "Multi-channel syndication beyond just email",
                  "Precision targeting to reach the right decision-makers",
                  "Data-driven approach with detailed performance metrics",
                  "Cost-effective model with guaranteed results",
                  "White-glove service with dedicated account managers"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-3 mt-1">
                      <CheckCircle size={18} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
              <div className="space-y-4">
                <a 
                  href="mailto:contact@syndicatemagic.com" 
                  className={cn(
                    "flex items-center p-4 glass-card hover:shadow-md transition-all duration-300",
                    "hover:translate-x-1"
                  )}
                >
                  <div className="mr-4 text-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="font-medium">Email Us</p>
                    <p className="text-muted-foreground text-sm">contact@syndicatemagic.com</p>
                  </div>
                  <ArrowRight size={16} className="ml-auto text-primary" />
                </a>
                
                <a 
                  href="tel:+15551234567" 
                  className={cn(
                    "flex items-center p-4 glass-card hover:shadow-md transition-all duration-300",
                    "hover:translate-x-1"
                  )}
                >
                  <div className="mr-4 text-primary">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="font-medium">Call Us</p>
                    <p className="text-muted-foreground text-sm">(555) 123-4567</p>
                  </div>
                  <ArrowRight size={16} className="ml-auto text-primary" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
