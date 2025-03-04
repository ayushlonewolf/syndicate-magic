
import { cn } from "@/lib/utils";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Services",
      links: [
        { name: "Content Syndication", href: "#services" },
        { name: "Lead Generation", href: "#services" },
        { name: "SEO Syndication", href: "#services" },
        { name: "Paid Syndication", href: "#services" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Case Studies", href: "#case-studies" },
        { name: "Testimonials", href: "#testimonials" },
        { name: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "#" },
        { name: "Guides", href: "#" },
        { name: "FAQ", href: "#" },
        { name: "Privacy Policy", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-secondary/80 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <a href="#" className="text-2xl font-bold text-foreground inline-block mb-4">
              SyndicateMagic
            </a>
            <p className="text-muted-foreground max-w-md mb-6">
              Your trusted partner for B2B content syndication and lead generation, helping technology companies reach their ideal customers.
            </p>
            <div className="flex space-x-4">
              {["twitter", "linkedin", "facebook", "instagram"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/80 text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-current opacity-80 rounded-sm"></div>
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="font-semibold text-lg mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {currentYear} SyndicateMagic. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-muted-foreground text-sm hover:text-primary">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground text-sm hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground text-sm hover:text-primary">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
