import { Card, CardContent } from "@/components/ui/card";
import pizzaSliceImage from "@/assets/pizza-slice.jpg";
import freshIngredientsImage from "@/assets/fresh-ingredients.jpg";

const menuItems = [
  {
    name: "Margherita Classica",
    description: "San Marzano tomatoes, buffalo mozzarella, fresh basil, extra virgin olive oil",
    price: "₹599",
    image: pizzaSliceImage,
    tag: "Classic",
  },
  {
    name: "Prosciutto e Rucola",
    description: "Parma prosciutto, arugula, cherry tomatoes, parmesan shavings, balsamic glaze",
    price: "₹849",
    image: pizzaSliceImage,
    tag: "Signature",
  },
  {
    name: "Vegetariana Suprema",
    description: "Grilled zucchini, bell peppers, eggplant, artichokes, sun-dried tomatoes, mozzarella",
    price: "₹699",
    image: freshIngredientsImage,
    tag: "Veggie",
  },
];

const MenuHighlights = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
            Our Signature Pizzas
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Handcrafted with passion, served with love
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-none bg-card"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  {item.tag}
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold text-foreground">{item.name}</h3>
                  <span className="text-2xl font-bold text-primary">{item.price}</span>
                </div>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 shadow-lg">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;
