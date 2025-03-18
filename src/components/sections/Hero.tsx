
import { Button } from "@/components/ui/button";
import { Rocket, CheckCircle, BarChart2, Calendar, ArrowUpRight, TrendingUp, Target, FileText, Users } from "lucide-react";
import BannerAreaChart from "@/components/ui/charts/BannerAreaChart";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type DecisionMakerToolForm = {
  contentTitle: string;
  contentType: string;
  targetAudience: string;
};

const Hero = () => {
  const [timeRange, setTimeRange] = useState("6m");
  const [metric, setMetric] = useState("engagement");
  const [showAnalytics, setShowAnalytics] = useState(true);
  const [showTool, setShowTool] = useState(false);

  const form = useForm<DecisionMakerToolForm>({
    defaultValues: {
      contentTitle: "",
      contentType: "whitepaper",
      targetAudience: "cmo",
    }
  });

  const handleSubmit = (data: DecisionMakerToolForm) => {
    toast.success("Analysis complete! Your content has a high potential to engage decision makers.", {
      description: `"${data.contentTitle}" will be most effective when distributed to ${getAudienceLabel(data.targetAudience)} via our network.`,
      duration: 5000,
    });
    
    // Simulate loading state
    setShowAnalytics(false);
    setTimeout(() => setShowAnalytics(true), 500);
  };

  const getAudienceLabel = (value: string) => {
    switch(value) {
      case "cmo": return "Chief Marketing Officers";
      case "cto": return "Chief Technology Officers";
      case "cio": return "Chief Information Officers";
      case "vp": return "VP of Marketing/Technology";
      default: return "Decision Makers";
    }
  };

  const getContentTypeLabel = (value: string) => {
    switch(value) {
      case "whitepaper": return "Whitepapers";
      case "case-study": return "Case Studies";
      case "research": return "Research Reports";
      case "webinar": return "Webinar Recordings";
      case "ebook": return "eBooks";
      default: return "Content";
    }
  };

  const toggleTool = () => {
    setShowTool(!showTool);
    if (!showTool) {
      form.reset();
    }
  };

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
              <Button className="cta-button" onClick={toggleTool}>
                <Target className="mr-2 h-5 w-5" /> {showTool ? "Hide Tool" : "Analyze Content Reach"}
              </Button>
              <Button variant="outline" className="secondary-button">Talk to Our Experts</Button>
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
            {showTool ? (
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl transform -rotate-2"></div>
                <Card className="glass-card relative z-10">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-xl font-bold">Decision Maker Engagement Analyzer</CardTitle>
                        <CardDescription>Predict how well your content will engage decision makers</CardDescription>
                      </div>
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="contentTitle"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Content Title</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Enter your whitepaper or content title" 
                                {...field} 
                                required
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="contentType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Content Type</FormLabel>
                              <Select 
                                onValueChange={field.onChange} 
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select content type" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="whitepaper">Whitepaper</SelectItem>
                                  <SelectItem value="case-study">Case Study</SelectItem>
                                  <SelectItem value="research">Research Report</SelectItem>
                                  <SelectItem value="webinar">Webinar Recording</SelectItem>
                                  <SelectItem value="ebook">eBook</SelectItem>
                                </SelectContent>
                              </Select>
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="targetAudience"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Target Decision Makers</FormLabel>
                              <Select 
                                onValueChange={field.onChange} 
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select target audience" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="cmo">Chief Marketing Officers</SelectItem>
                                  <SelectItem value="cto">Chief Technology Officers</SelectItem>
                                  <SelectItem value="cio">Chief Information Officers</SelectItem>
                                  <SelectItem value="vp">VP of Marketing/Technology</SelectItem>
                                  <SelectItem value="director">Directors & Managers</SelectItem>
                                </SelectContent>
                              </Select>
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <Button type="submit" className="w-full">
                        <FileText className="mr-2 h-5 w-5" /> Analyze Content Reach
                      </Button>
                    </form>
                    
                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <div className="bg-green-50/50 p-2 rounded-lg">
                        <p className="text-xs text-gray-500">Typical Engagement</p>
                        <p className="text-lg font-bold">
                          {form.watch("contentType") === "research" ? "8.4k" : 
                           form.watch("contentType") === "whitepaper" ? "7.2k" : 
                           form.watch("contentType") === "case-study" ? "6.5k" : "5.9k"}
                        </p>
                      </div>
                      <div className="bg-blue-50/50 p-2 rounded-lg">
                        <p className="text-xs text-gray-500">Decision Makers</p>
                        <p className="text-lg font-bold">
                          {form.watch("targetAudience") === "cmo" ? "3.2k" : 
                           form.watch("targetAudience") === "cto" ? "2.8k" : 
                           form.watch("targetAudience") === "cio" ? "2.4k" : "3.6k"}
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-4 p-3 bg-orange-50/50 rounded-lg">
                      <p className="text-xs mb-1">Distribution Effectiveness by Channel for {getContentTypeLabel(form.watch("contentType"))} targeting {getAudienceLabel(form.watch("targetAudience"))}</p>
                      <div className="flex space-x-1">
                        <div className="h-4 bg-green-400 rounded-l-full" style={{ width: form.watch("contentType") === "research" ? "60%" : "50%" }}></div>
                        <div className="h-4 bg-blue-400" style={{ width: form.watch("targetAudience") === "cmo" ? "25%" : "20%" }}></div>
                        <div className="h-4 bg-purple-400 rounded-r-full" style={{ width: "20%" }}></div>
                      </div>
                      <div className="flex text-xs mt-1 justify-between">
                        <span className="text-green-600">Email</span>
                        <span className="text-blue-600">Social</span>
                        <span className="text-purple-600">Paid</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : (
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
                  
                  {showAnalytics ? (
                    <BannerAreaChart timeRange={timeRange} metric={metric} />
                  ) : (
                    <div className="h-64 flex items-center justify-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                    </div>
                  )}
                  
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
            )}
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
