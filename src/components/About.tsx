import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Target, Globe } from "lucide-react";

const About = () => {
  const stats = [
    { number: "15+", label: "Years Experience", icon: Award },
    { number: "200+", label: "Projects Completed", icon: Target },
    { number: "50+", label: "Global Clients", icon: Users },
    { number: "15", label: "Countries Served", icon: Globe },
  ];

  const expertise = [
    "Upstream Operations",
    "Reservoir Engineering",
    "Production Optimization",
    "Economic Modeling",
    "Risk Assessment", 
    "Digital Solutions",
    "Regulatory Compliance",
    "Asset Valuation",
    "Project Management",
    "Data Analytics"
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Industry{" "}
              <span className="text-transparent bg-gradient-accent bg-clip-text">
                Expertise
              </span>{" "}
              You Can Trust
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              PetroInsights brings together decades of upstream oil and gas experience 
              with cutting-edge analytical capabilities to deliver solutions that drive 
              measurable results.
            </p>

            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Our Approach</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We combine deep technical knowledge with strategic business acumen to 
                  provide actionable insights that optimize operations, reduce costs, and 
                  maximize asset value across the energy value chain.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Proven Track Record</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our consultants have successfully delivered projects ranging from 
                  individual well optimization to multi-billion dollar field developments, 
                  working with independents, majors, and national oil companies worldwide.
                </p>
              </div>
            </div>

            {/* Expertise Tags */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Core Competencies</h4>
              <div className="flex flex-wrap gap-2">
                {expertise.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="text-sm py-1 px-3 hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <Card key={stat.label} className="text-center p-6 hover:shadow-elegant transition-all duration-300 border-border/50">
                    <CardContent className="p-0">
                      <div className="w-12 h-12 mx-auto mb-4 bg-accent/10 rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>
                      <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Mission Statement */}
            <Card className="p-8 bg-gradient-to-br from-accent/5 to-energy-gold/5 border-accent/20">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed italic">
                  "To empower energy companies with the insights and strategies needed 
                  to navigate an evolving industry landscape while maintaining operational 
                  excellence and sustainable growth."
                </p>
                <div className="mt-4 text-sm text-accent font-semibold">
                  — PetroInsights Leadership Team
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;