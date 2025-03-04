
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 backdrop-blur-lg shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-foreground">
          SyndicateMagic
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="nav-link">
            Services
          </a>
          <a href="#why-us" className="nav-link">
            Why Us
          </a>
          <a href="#process" className="nav-link">
            How It Works
          </a>
          <a href="#pricing" className="nav-link">
            Pricing
          </a>
          <a href="#case-studies" className="nav-link">
            Case Studies
          </a>
          <Button className="cta-button">Contact Us</Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "md:hidden fixed top-[60px] right-0 left-0 bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300 ease-in-out transform",
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="container py-6 px-8 flex flex-col space-y-4">
          <a
            href="#services"
            className="py-2 text-foreground/80 hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="#why-us"
            className="py-2 text-foreground/80 hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Why Us
          </a>
          <a
            href="#process"
            className="py-2 text-foreground/80 hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            How It Works
          </a>
          <a
            href="#pricing"
            className="py-2 text-foreground/80 hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Pricing
          </a>
          <a
            href="#case-studies"
            className="py-2 text-foreground/80 hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Case Studies
          </a>
          <Button
            className="w-full cta-button mt-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
