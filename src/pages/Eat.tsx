import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Star, Clock, Flame } from "lucide-react";

const menuCategories = [
  {
    name: "Breakfast",
    description: "Start your day right",
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400&h=400&fit=crop",
    dishes: [
      { name: "Classic Pancakes", price: "₹249", rating: 4.8 },
      { name: "Avocado Toast", price: "₹299", rating: 4.9 },
      { name: "Breakfast Burrito", price: "₹349", rating: 4.7 },
    ]
  },
  {
    name: "Lunch",
    description: "Hearty midday meals",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=400&fit=crop",
    dishes: [
      { name: "Pasta Primavera", price: "₹449", rating: 4.9 },
      { name: "Grilled Chicken Bowl", price: "₹499", rating: 4.8 },
      { name: "Mediterranean Wrap", price: "₹399", rating: 4.7 },
    ]
  },
  {
    name: "Dinner",
    description: "Evening delights",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=400&fit=crop",
    dishes: [
      { name: "Butter Chicken", price: "₹549", rating: 4.9 },
      { name: "Seafood Paella", price: "₹699", rating: 4.8 },
      { name: "Vegetable Stir Fry", price: "₹449", rating: 4.7 },
    ]
  },
  {
    name: "Desserts",
    description: "Sweet endings",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=400&fit=crop",
    dishes: [
      { name: "Chocolate Lava Cake", price: "₹299", rating: 4.9 },
      { name: "Tiramisu", price: "₹349", rating: 4.8 },
      { name: "Fruit Tart", price: "₹279", rating: 4.7 },
    ]
  }
];

const Eat = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-brand-purple to-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-6xl md:text-7xl font-serif mb-6">
              Our Menu
            </h1>
            <p className="text-xl leading-relaxed opacity-90">
              Explore our diverse menu of authentic Italian pizzas and delicious dishes
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Flame className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fresh Ingredients</h3>
              <p className="text-muted-foreground">
                Only the finest, locally sourced ingredients
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quick Delivery</h3>
              <p className="text-muted-foreground">
                Hot meals delivered to your doorstep
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Top Rated</h3>
              <p className="text-muted-foreground">
                Highly rated by our community
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-serif text-center mb-16 text-foreground">
            Our Menu
          </h2>
          
          <div className="space-y-16 max-w-6xl mx-auto">
            {menuCategories.map((category, idx) => (
              <div key={idx} className="space-y-8">
                {/* Category Header */}
                <div className="flex items-center gap-6">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-4xl font-serif text-foreground">{category.name}</h3>
                    <p className="text-lg text-muted-foreground">{category.description}</p>
                  </div>
                </div>

                {/* Dishes Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                  {category.dishes.map((dish, dishIdx) => (
                    <Card key={dishIdx} className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border-none">
                      <div className="flex items-start justify-between mb-4">
                        <h4 className="text-xl font-semibold text-foreground flex-1">
                          {dish.name}
                        </h4>
                        <div className="flex items-center gap-1 bg-yellow-100 px-2 py-1 rounded-full">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-semibold">{dish.rating}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-primary">{dish.price}</span>
                        <button className="bg-foreground hover:bg-foreground/90 text-background px-6 py-2 rounded-full text-sm font-semibold transition-all">
                          Order
                        </button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl font-serif mb-6 text-foreground">
              Ready to Order?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Experience authentic home-cooked meals delivered to your door
            </p>
            <button className="bg-primary hover:bg-primary/90 text-white px-12 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 shadow-lg">
              Browse Full Menu
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Eat;
