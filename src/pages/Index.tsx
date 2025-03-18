
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Differentiators from "@/components/sections/Differentiators";
import Process from "@/components/sections/Process";
import Pricing from "@/components/sections/Pricing";
import CaseStudies from "@/components/sections/CaseStudies";
import Testimonials from "@/components/sections/Testimonials";
import ContactForm from "@/components/sections/ContactForm";
import Footer from "@/components/sections/Footer";

const Index = () => {
  useEffect(() => {
    // Add a class to show the body is loaded
    document.body.classList.add('page-loaded');
    
    // Initialize any scripts or observe elements for animations
    const observeElements = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate-in");
              entry.target.classList.remove("opacity-0");
            }
          });
        },
        {
          root: null,
          threshold: 0.1,
          rootMargin: "0px 0px -100px 0px",
        }
      );

      document.querySelectorAll(".animate-fade-in, .animate-fade-in-right, .animate-fade-in-left").forEach((el) => {
        observer.observe(el);
      });
    };

    // Add a small delay to ensure elements are rendered
    setTimeout(observeElements, 300);

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        if (targetId === "#") return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });

    // Add additional CSS class for the tool container
    document.documentElement.classList.add('js-enabled');

    return () => {
      // Clean up event listeners if needed
      document.body.classList.remove('page-loaded');
      document.documentElement.classList.remove('js-enabled');
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Differentiators />
        <Process />
        <Pricing />
        <CaseStudies />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
