import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const dishes = [
  {
    name: "Truffle Mushroom Delight",
    chef: "Chef Marco Rossi",
    rating: 4.9,
    price: "₹899",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=600&fit=crop",
    description: "Wild mushrooms, truffle oil, mozzarella, parmesan"
  },
  {
    name: "Quattro Formaggi",
    chef: "Chef Isabella Romano",
    rating: 4.8,
    price: "₹799",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=600&fit=crop",
    description: "Four cheese blend with gorgonzola, mozzarella, parmesan, fontina"
  },
  {
    name: "Diavola Piccante",
    chef: "Chef Antonio Bianchi",
    rating: 4.9,
    price: "₹749",
    image: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=600&h=600&fit=crop",
    description: "Spicy salami, jalapeños, chili flakes, mozzarella"
  }
];

const PopularDishes = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif mb-4 text-foreground">
            Customer Favorites
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our most-ordered artisan pizzas, crafted by master Italian chefs
          </p>
        </div>

        {/* Dishes Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {dishes.map((dish, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-none bg-white"
            >
              {/* Image Area */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center gap-1 shadow-lg">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-semibold">{dish.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-2 line-clamp-2">
                    {dish.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">by {dish.chef}</p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-border">
                  <span className="text-2xl font-bold text-primary">{dish.price}</span>
                  <button className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
                    Order Now →
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-foreground hover:bg-foreground/90 text-background px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 shadow-lg">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularDishes;
