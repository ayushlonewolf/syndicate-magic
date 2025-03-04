
import { Button } from "@/components/ui/button";
import { Rocket, CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 md:px-8 lg:px-12 hero-pattern overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 animate-fade-in-right opacity-0">
            <div className="mb-4 inline-block px-4 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium">
              B2B Content Syndication
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
              Your Go-To <span className="title-sub">B2B Content Syndication Vendors</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Maximize your reach and pipeline growth with full-spectrum content syndication—not just email.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button className="cta-button">
                <Rocket className="mr-2 h-5 w-5" /> Get Started Today
              </Button>
              <Button className="secondary-button">Talk to Our Experts</Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-2" />
                <span className="text-sm">5M+ Decision-Makers Reached</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-2" />
                <span className="text-sm">100+ Successful Campaigns</span>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 animate-fade-in-left opacity-0 animate-delay-200">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl transform -rotate-2"></div>
              <div className="glass-card p-8 relative z-10 animate-float">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-24 h-24 text-primary/80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="space-y-4">
                  <div className="h-4 bg-primary/10 rounded-full w-5/6"></div>
                  <div className="h-4 bg-primary/10 rounded-full w-full"></div>
                  <div className="h-4 bg-primary/10 rounded-full w-4/6"></div>
                </div>
                <div className="mt-8 grid grid-cols-3 gap-3">
                  <div className="col-span-1 bg-primary/5 h-16 rounded-lg flex items-center justify-center">
                    <div className="w-8 h-8 bg-primary/20 rounded-full"></div>
                  </div>
                  <div className="col-span-1 bg-primary/5 h-16 rounded-lg flex items-center justify-center">
                    <div className="w-8 h-8 bg-primary/20 rounded-full"></div>
                  </div>
                  <div className="col-span-1 bg-primary/5 h-16 rounded-lg flex items-center justify-center">
                    <div className="w-8 h-8 bg-primary/20 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-sm text-muted-foreground mb-6">TRUSTED BY LEADING B2B TECH BRANDS</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-8 w-24 bg-foreground/5 rounded-md animate-pulse-soft"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
