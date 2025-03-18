
import { Button } from "@/components/ui/button";
import { Rocket, CheckCircle, BarChart2, Calendar, ArrowUpRight, TrendingUp } from "lucide-react";
import BannerAreaChart from "@/components/ui/charts/BannerAreaChart";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const Hero = () => {
  const [timeRange, setTimeRange] = useState("6m");
  const [metric, setMetric] = useState("engagement");

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
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl transform -rotate-2"></div>
              <div className="glass-card p-4 relative z-10">
                <div className="mb-3 flex flex-wrap justify-between items-center">
                  <div className="flex items-center mb-2 sm:mb-0">
                    <h3 className="text-lg font-bold text-gray-800 flex items-center mr-3">
                      Performance Analytics
                      <TrendingUp className="ml-2 h-4 w-4 text-green-500" />
                    </h3>
                    <div className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                      +212% <ArrowUpRight className="ml-1 h-3 w-3" />
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <Select 
                        defaultValue={timeRange} 
                        onValueChange={setTimeRange}
                      >
                        <SelectTrigger className="h-8 text-xs w-[90px]">
                          <SelectValue placeholder="Time Range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1m">Last Month</SelectItem>
                          <SelectItem value="3m">Last 3 Months</SelectItem>
                          <SelectItem value="6m">Last 6 Months</SelectItem>
                          <SelectItem value="1y">Last Year</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <Select 
                      defaultValue={metric} 
                      onValueChange={setMetric}
                    >
                      <SelectTrigger className="h-8 text-xs w-[130px]">
                        <SelectValue placeholder="Metric" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="engagement">Engagement</SelectItem>
                        <SelectItem value="conversion">Conversion Rate</SelectItem>
                        <SelectItem value="reach">Audience Reach</SelectItem>
                        <SelectItem value="leads">Qualified Leads</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <BannerAreaChart timeRange={timeRange} metric={metric} />
                
                <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <div className="bg-green-50/50 p-2 rounded-lg">
                    <p className="text-xs text-gray-500">Avg. Engagement</p>
                    <p className="text-lg font-bold">8.4k</p>
                    <p className="text-xs text-green-600">+18% vs last period</p>
                  </div>
                  <div className="bg-blue-50/50 p-2 rounded-lg">
                    <p className="text-xs text-gray-500">Decision Makers</p>
                    <p className="text-lg font-bold">3.2k</p>
                    <p className="text-xs text-green-600">+24% vs last period</p>
                  </div>
                  <div className="bg-purple-50/50 p-2 rounded-lg">
                    <p className="text-xs text-gray-500">Content Types</p>
                    <p className="text-lg font-bold">12</p>
                    <p className="text-xs text-green-600">+3 new types</p>
                  </div>
                  <div className="bg-orange-50/50 p-2 rounded-lg">
                    <p className="text-xs text-gray-500">Pipeline Value</p>
                    <p className="text-lg font-bold">$1.8M</p>
                    <p className="text-xs text-green-600">+32% vs last period</p>
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
