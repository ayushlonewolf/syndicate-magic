
import { Button } from "@/components/ui/button";
import { Rocket, CheckCircle } from "lucide-react";
import BannerAreaChart from "@/components/ui/charts/BannerAreaChart";

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
              <div className="glass-card p-6 relative z-10">
                <BannerAreaChart />
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
