
import { Button } from "@/components/ui/button";
import { Rocket, CheckCircle, BarChart2 } from "lucide-react";
import BannerAreaChart from "@/components/ui/charts/BannerAreaChart";
import ContentMediumsPieChart from "@/components/ui/charts/ContentMediumsPieChart";
import BuyerPreferenceDonutChart from "@/components/ui/charts/BuyerPreferenceDonutChart";
import { useState, useEffect } from "react";
import { getContentMediumsData, getBuyerPreferenceData } from "@/components/ui/charts/chartDataProvider";

const Hero = () => {
  const [contentMediumsData, setContentMediumsData] = useState(getContentMediumsData());
  const [buyerPreferenceData, setBuyerPreferenceData] = useState(getBuyerPreferenceData());
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Add a slight delay before showing charts to enable animations
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

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
              <div className="flex items-center">
                <BarChart2 className="h-5 w-5 text-primary mr-2" />
                <span className="text-sm">Real-time Analytics Tools</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-2" />
                <span className="text-sm">Advanced Reporting Features</span>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 animate-fade-in-left opacity-0 animate-delay-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="col-span-1 md:col-span-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl transform -rotate-2"></div>
                  <div className="glass-card p-4 relative z-10">
                    <BannerAreaChart />
                  </div>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm p-2">
                <ContentMediumsPieChart data={contentMediumsData} animate={animate} />
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm p-2">
                <BuyerPreferenceDonutChart data={buyerPreferenceData} animate={animate} />
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
