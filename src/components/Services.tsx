import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BarChart3, 
  Settings, 
  Shield, 
  TrendingUp, 
  Database, 
  Zap,
  MapPin,
  Calculator
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: BarChart3,
      title: "Reservoir Engineering",
      description: "Advanced reservoir characterization, production forecasting, and enhanced oil recovery strategies to maximize field performance.",
      features: ["Decline curve analysis", "Reservoir simulation", "Production optimization"]
    },
    {
      icon: Settings,
      title: "Production Operations",
      description: "Optimize drilling, completion, and production operations through advanced analytics and proven methodologies.",
      features: ["Drilling optimization", "Completion design", "Artificial lift"]
    },
    {
      icon: Shield,
      title: "Regulatory Compliance",
      description: "Navigate complex regulatory landscapes with expert guidance on environmental, safety, and operational compliance.",
      features: ["HSE audits", "Regulatory strategy", "Permit optimization"]
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights using cutting-edge analytics and machine learning techniques.",
      features: ["Predictive analytics", "Data integration", "Real-time monitoring"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comprehensive{" "}
            <span className="text-transparent bg-gradient-accent bg-clip-text">
              Energy Solutions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From reservoir engineering to digital transformation, we deliver integrated 
            consulting services that drive operational excellence and sustainable growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.title} 
                className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border/50 hover:border-accent/30"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Need a customized solution? Let's discuss your specific challenges.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center text-accent hover:text-energy-gold font-semibold transition-colors"
          >
            Discuss Your Project
            <TrendingUp className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;