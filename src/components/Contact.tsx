import { MapPin, Phone, Clock, Instagram } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["Shop 12, Phoenix Market City", "Kurla West", "Mumbai, Maharashtra 400070"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 98765 43210", "hello@pizzettabella.com", "Dine-in • Delivery • Takeaway"],
  },
  {
    icon: Clock,
    title: "Opening Hours",
    details: ["Monday - Sunday", "12:00 PM - 11:00 PM", "Last order: 10:30 PM"],
  },
  {
    icon: Instagram,
    title: "Follow Us",
    details: ["@pizzettabella.mumbai", "Share your pizza moments", "#PizzettaBella"],
  },
];

const Contact = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
            Find Us
          </h2>
          <p className="text-xl text-muted-foreground">
            Visit our pizzeria or enjoy authentic Italian pizza at home
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <Card key={index} className="border-none bg-card hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-muted-foreground text-sm">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Map Placeholder */}
        <div className="rounded-3xl overflow-hidden shadow-2xl h-96 bg-muted flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
            <p className="text-xl font-semibold text-foreground mb-2">
              Phoenix Market City, Mumbai
            </p>
            <p className="text-muted-foreground">
              Shop 12, Kurla West, Mumbai 400070
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
