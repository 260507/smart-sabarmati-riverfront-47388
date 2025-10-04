import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Droplets, Activity, Shield } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-[600px] flex items-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent" />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30">
              <Shield className="h-4 w-4" />
              <span className="text-sm font-medium">Government of Gujarat Initiative</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Smart Sabarmati Riverfront & Urban Water Bodies
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl mb-4 text-white/90 leading-relaxed">
            AI-Driven Modular Floating Robot Swarm for Real-Time Water Quality Monitoring & Flood Prediction
          </p>

          <p className="text-lg mb-8 text-white/80 max-w-3xl mx-auto">
            A revolutionary low-cost, innovative solution combining IoT sensors, AI analytics, and autonomous robotics to safeguard our water bodies and communities.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/dashboard">
              <Button size="lg" variant="secondary" className="group">
                View Live Dashboard
                <Activity className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              </Button>
            </Link>
            <Link to="/citizen-portal">
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30">
                Join as Citizen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Droplets className="h-10 w-10 mb-3 mx-auto text-accent" />
              <div className="text-3xl font-bold mb-1">24/7</div>
              <div className="text-sm text-white/80">Real-Time Monitoring</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Activity className="h-10 w-10 mb-3 mx-auto text-secondary" />
              <div className="text-3xl font-bold mb-1">AI-Powered</div>
              <div className="text-sm text-white/80">Predictive Analytics</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Shield className="h-10 w-10 mb-3 mx-auto text-white" />
              <div className="text-3xl font-bold mb-1">Solar Powered</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-pulse" />
    </div>
  );
};

export default Hero;
