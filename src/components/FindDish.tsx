import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const FindDish = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-serif mb-6 text-foreground">
              Find Your Favorite Dish
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Search for home chefs in your neighborhood, listen to their story and check out their signature dishes.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative bg-white rounded-full shadow-lg p-2 flex items-center gap-4 max-w-2xl mx-auto">
            <div className="flex-1 flex items-center gap-3 px-4">
              <Search className="w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search for dishes or chefs..."
                className="flex-1 outline-none text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <Button 
              size="lg"
              className="bg-foreground hover:bg-foreground/90 text-background rounded-full px-8"
            >
              Explore Now
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">180+</div>
              <p className="text-muted-foreground">Professional Home Chefs</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">500+</div>
              <p className="text-muted-foreground">Signature Dishes</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-brand-orange mb-2">24/7</div>
              <p className="text-muted-foreground">Available Service</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindDish;
