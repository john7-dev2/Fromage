import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-serif font-bold mb-4 text-background">
              Pizzetta Bella
            </h3>
            <p className="text-background/70 text-sm leading-relaxed">
              Artisan Italian pizzeria in Mumbai. Wood-fired perfection using authentic Neapolitan techniques and imported ingredients.
            </p>
          </div>

          {/* Our Menus */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-background">Our Pizzas</h4>
            <ul className="space-y-2">
              <li>
                <a href="#classic" className="text-background/70 hover:text-background transition-colors text-sm">
                  Classic Pizzas
                </a>
              </li>
              <li>
                <a href="#signature" className="text-background/70 hover:text-background transition-colors text-sm">
                  Signature Pizzas
                </a>
              </li>
              <li>
                <a href="#meat" className="text-background/70 hover:text-background transition-colors text-sm">
                  Meat Lovers
                </a>
              </li>
              <li>
                <a href="#vegetarian" className="text-background/70 hover:text-background transition-colors text-sm">
                  Vegetarian
                </a>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-background">Information</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-background/70 hover:text-background transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-background/70 hover:text-background transition-colors text-sm">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#events" className="text-background/70 hover:text-background transition-colors text-sm">
                  Events
                </a>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-background">Useful Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-background/70 hover:text-background transition-colors text-sm">
                  Services
                </a>
              </li>
              <li>
                <a href="#support" className="text-background/70 hover:text-background transition-colors text-sm">
                  Support
                </a>
              </li>
              <li>
                <a href="#conditions" className="text-background/70 hover:text-background transition-colors text-sm">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} Pizzetta Bella. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a 
              href="https://instagram.com/pizzettabella.mumbai" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/70 hover:text-background transition-colors flex items-center gap-2"
            >
              <Instagram className="w-5 h-5" />
              <span className="text-sm">@pizzettabella.mumbai</span>
            </a>
            <a href="#" className="text-background/70 hover:text-background transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-background/70 hover:text-background transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
