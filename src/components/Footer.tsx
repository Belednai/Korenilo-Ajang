import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Mail, Linkedin, ArrowUp, Scale, Twitter } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Research', href: '#research' },
    { label: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:korenilo2016@gmail.com'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/korenilo-ajang-duot'
    },
    {
      icon: Twitter,
      label: 'X (Twitter)',
      href: 'https://twitter.com/korenilo_ajang'
    }
  ];

  return (
    <footer className="bg-lawyer-navy text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          
          {/* Brand & Bio */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="h-8 w-8 text-lawyer-blue" />
              <h3 className="text-2xl legal-serif font-bold">
                Korenilo Ajang Duot
              </h3>
            </div>
            <p className="text-white/80 legal-serif leading-relaxed max-w-lg">
              PhD Law Candidate · Legal Strategist · Community Advocate. Dedicated to advancing legal excellence in oil and gas law, contract law, and business development while creating meaningful impact for clients and communities across Africa.
            </p>
            
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="icon"
                  className="border-2 border-white/40 text-white hover:bg-lawyer-blue hover:text-white hover:border-lawyer-blue transition-all duration-300 shadow-lg hover:shadow-xl bg-white/10 backdrop-blur-sm"
                  asChild
                >
                  <a 
                    href={social.href}
                    target={social.href.startsWith('http') ? "_blank" : "_self"}
                    rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg legal-serif font-semibold mb-6">Navigation</h4>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-white/80 hover:text-lawyer-blue transition-colors duration-300 text-left legal-serif"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Summary */}
          <div>
            <h4 className="text-lg legal-serif font-semibold mb-6">Contact Information</h4>
            <div className="space-y-4 text-white/80">
              <div>
                <div className="font-medium text-white mb-1 legal-serif">Email</div>
                <div className="text-sm legal-serif">korenilo2016@gmail.com</div>
              </div>
              <div>
                <div className="font-medium text-white mb-1 legal-serif">Primary Phone</div>
                <div className="text-sm legal-serif">+211(0)917089734</div>
              </div>
              <div>
                <div className="font-medium text-white mb-1 legal-serif">Secondary Phone</div>
                <div className="text-sm legal-serif">+211926000232</div>
              </div>
              <div>
                <div className="font-medium text-white mb-1 legal-serif">Location</div>
                <div className="text-sm legal-serif">Juba, Central Equatoria</div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-12 bg-white/20" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/60 text-sm legal-serif">
            © 2024 Korenilo Ajang Duot. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6 text-sm text-white/60">
            <button className="hover:text-lawyer-blue transition-colors duration-300 legal-serif">
              Privacy Policy
            </button>
            <button className="hover:text-lawyer-blue transition-colors duration-300 legal-serif">
              Terms of Service
            </button>
            <button className="hover:text-lawyer-blue transition-colors duration-300 legal-serif">
              Legal Ethics
            </button>
          </div>

          {/* Back to Top */}
          <Button
            variant="outline"
            size="icon"
            onClick={scrollToTop}
            className="border-white/30 text-white hover:bg-lawyer-blue hover:text-white hover:border-lawyer-blue transition-all duration-300"
          >
            <ArrowUp className="h-4 w-4" />
          </Button>
        </div>

        {/* Professional Quote */}
        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <p className="text-white/70 text-sm italic legal-serif">
            "Justice delayed is justice denied." - Committed to providing timely, effective legal solutions.
          </p>
        </div>

        {/* Developer Credit */}
        <div className="mt-6 pt-6 border-t border-white/10 text-center">
          <p className="text-white/50 text-xs legal-serif">
            Developed by{' '}
            <a 
              href="https://www.belednai.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lawyer-blue hover:text-white transition-colors duration-300 font-medium"
            >
              Belednai Technology
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;