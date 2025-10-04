import Hero from "@/components/Hero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TrendingUp, Shield, Zap, Users, ArrowRight } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Real-Time Analytics",
      description: "Continuous monitoring and instant insights from IoT sensors deployed across water bodies",
    },
    {
      icon: Shield,
      title: "AI-Powered Predictions",
      description: "Machine learning models for water quality forecasting and flood risk assessment",
    },
    {
      icon: Zap,
      title: "Rapid Response",
      description: "Automated alerts and early warning system for pollution and flood events",
    },
    {
      icon: Users,
      title: "Citizen Engagement",
      description: "Community involvement through reporting, volunteering, and educational programs",
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero />

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Smart Sabarmati?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive solution combining cutting-edge technology with practical environmental monitoring
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">5</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Autonomous Robots</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">24/7</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Continuous Monitoring</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">8+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Water Parameters</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Us in Protecting Our Water Resources</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Every citizen can contribute to cleaner, healthier water bodies. Get involved today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/citizen-portal">
              <Button size="lg" variant="secondary">
                Become a Volunteer
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30">
                View Live Data
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
