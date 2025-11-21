const LoveCooking = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl font-serif text-foreground leading-tight">
              People Who Love Cooking Love Their Kitchen
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              If a kitchen is good enough for their family, we help to make sure it's good 
              enough for yours. Italian kitchens are cleaned to professional standards. 
              The only difference is, it's not just a place of work.
            </p>
          </div>

          {/* Right Content - Image Grid */}
          <div className="relative">
            {/* Large Image */}
            <div className="relative bg-brand-orange rounded-3xl p-6 shadow-2xl transform rotate-2">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=600&fit=crop"
                  alt="Cooking in kitchen"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
              </div>
            </div>

            {/* Small Cards */}
            <div className="absolute -top-6 -left-6 bg-brand-purple rounded-2xl p-4 shadow-xl transform -rotate-6 w-40">
              <img 
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&h=400&fit=crop"
                alt="Chef cooking"
                className="w-full h-full object-cover aspect-square rounded-xl"
              />
            </div>

            <div className="absolute -bottom-6 -right-6 bg-accent rounded-2xl p-4 shadow-xl transform rotate-6 w-40">
              <img 
                src="https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=400&fit=crop"
                alt="Delicious food"
                className="w-full h-full object-cover aspect-square rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveCooking;
