import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-3xl font-serif font-bold text-foreground">
              Pizzetta Bella
            </h1>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </Link>
            <Link to="/eat" className="text-foreground hover:text-primary transition-colors font-medium">
              Eat
            </Link>
            <Link to="/health-safety" className="text-foreground hover:text-primary transition-colors font-medium">
              Health & Safety
            </Link>
            <Link to="/cook" className="text-foreground hover:text-primary transition-colors font-medium">
              Cook
            </Link>
          </nav>

          {/* Menu Button */}
          <Button 
            variant="outline" 
            className="rounded-full px-6 border-2 border-foreground hover:bg-foreground hover:text-background"
          >
            Menu
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
