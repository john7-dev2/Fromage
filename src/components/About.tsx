import pizzaMakingImage from "@/assets/pizza-making.jpg";

const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={pizzaMakingImage} 
                alt="Pizza making at Fromage"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-8 py-6 rounded-2xl shadow-xl transform rotate-3">
              <p className="text-4xl font-bold">Since</p>
              <p className="text-5xl font-bold">2024</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Our Story
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                At Fromage, we believe pizza is more than just food—it's an experience, 
                a celebration, and a way to bring people together.
              </p>
              <p>
                Located in the heart of Lajpat Nagar, Delhi, we've dedicated ourselves 
                to crafting authentic Italian pizzas using traditional methods and the 
                finest ingredients.
              </p>
              <p>
                Every pizza is handmade with love, topped with premium ingredients, 
                and baked to perfection in our specialty ovens. From classic Margherita 
                to creative specialty pies, each bite tells a story of passion and craftsmanship.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-4xl font-bold text-primary mb-2">100%</p>
                <p className="text-sm text-muted-foreground">Fresh Ingredients</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary mb-2">24h</p>
                <p className="text-sm text-muted-foreground">Dough Fermentation</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary mb-2">450°C</p>
                <p className="text-sm text-muted-foreground">Wood Fired Oven</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
