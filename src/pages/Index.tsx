
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
    // Initialize any scripts or observe elements for animations
    const observeElements = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate-in");
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
    setTimeout(observeElements, 100);

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

    return () => {
      // Clean up event listeners if needed
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
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
