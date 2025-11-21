import { Instagram, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-bold mb-4">
              <span className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-lg">
                Fromage
              </span>
            </h3>
            <p className="text-background/80">
              Authentic Italian Pizza in the heart of Delhi. 
              Handcrafted with passion, served with love.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#menu" className="text-background/80 hover:text-background transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#about" className="text-background/80 hover:text-background transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/80 hover:text-background transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-background/80 text-sm">
                  C-106, Block C, Lajpat Nagar I, Delhi 110024
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-background/80 text-sm">
                  Order Now: Delivery & Takeaway
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="w-5 h-5 text-primary flex-shrink-0" />
                <a 
                  href="https://instagram.com/fromage.delhi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-background/80 hover:text-background transition-colors text-sm"
                >
                  @fromage.delhi
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} Fromage. All rights reserved. Made with ❤️ in Delhi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
