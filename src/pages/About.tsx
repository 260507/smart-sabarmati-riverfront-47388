import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Waves, Target, Award, Users, Lightbulb } from "lucide-react";

const About = () => {
  const teamMembers = [
    { name: "N.Nithisree", role: "Project Lead" },
    { name: "P.Piragadee Shree", role: "AI/ML Engineer" },
    { name: "R.Rohini", role: "IoT Specialist" },
    { name: "E.Senthamil Kannan", role: "Systems Architect" },
  ];

  const impacts = [
    {
      icon: Target,
      title: "Environmental Impact",
      description: "Real-time monitoring helps prevent pollution incidents and protects aquatic ecosystems",
      stats: ["24/7 water quality tracking", "Early pollution detection", "Ecosystem health monitoring"],
    },
    {
      icon: Award,
      title: "Social Impact",
      description: "Empowering communities with transparent data and citizen engagement opportunities",
      stats: ["Public health protection", "Community awareness", "Volunteer participation"],
    },
    {
      icon: Lightbulb,
      title: "Economic Impact",
      description: "Low-cost solution enables scalable deployment across multiple water bodies",
      stats: ["Cost-effective monitoring", "Reduced cleanup costs", "Preventive maintenance"],
    },
  ];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About the Project</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Smart Sabarmati Riverfront is a pioneering initiative leveraging AI, IoT, and robotics to revolutionize urban water body management
          </p>
        </div>

        {/* Project Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Project Overview</CardTitle>
            <CardDescription>Innovative technology for sustainable water management</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="prose prose-sm max-w-none">
              <p className="text-muted-foreground mb-4">
                The Smart Sabarmati Riverfront & Urban Water Bodies project represents a groundbreaking approach to water quality monitoring and flood prediction. Led by the Government of Gujarat in collaboration with Gujarat Council on Science & Technology (GJ-COST), this initiative deploys an AI-driven modular floating robot swarm equipped with IoT sensors to continuously monitor water parameters across the Sabarmati Riverfront and other urban water bodies.
              </p>
              <p className="text-muted-foreground">
                Our system combines cutting-edge technologies including autonomous floating robots, real-time IoT sensors, machine learning algorithms, and cloud-based analytics to provide comprehensive water quality insights. This low-cost, scalable solution enables early detection of pollution events, predictive maintenance, and data-driven decision-making for urban water resource management.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Technical Approach */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <Cpu className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Technological Innovation</CardTitle>
              <CardDescription>Novel approach to water monitoring</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2 flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                    Modular Floating Robot Swarm
                  </h3>
                  <p className="text-sm text-muted-foreground pl-4">
                    Autonomous robots equipped with multi-parameter sensors navigate water bodies to collect real-time data from multiple locations simultaneously.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-2" />
                    IoT Sensor Network
                  </h3>
                  <p className="text-sm text-muted-foreground pl-4">
                    Low-cost, energy-efficient sensors measure turbidity, pH, temperature, dissolved oxygen, and other critical water quality parameters.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 flex items-center">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-2" />
                    AI/ML Analytics
                  </h3>
                  <p className="text-sm text-muted-foreground pl-4">
                    Machine learning models predict water quality trends, detect anomalies, and forecast flood risks based on historical and real-time data.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Waves className="h-10 w-10 text-accent mb-2" />
              <CardTitle>Key Features</CardTitle>
              <CardDescription>Comprehensive monitoring capabilities</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-accent mr-2 mt-1">✓</span>
                  <div>
                    <span className="font-semibold">Real-Time Monitoring:</span>
                    <span className="text-sm text-muted-foreground ml-2">24/7 continuous data collection and analysis</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 mt-1">✓</span>
                  <div>
                    <span className="font-semibold">Predictive Analytics:</span>
                    <span className="text-sm text-muted-foreground ml-2">AI-based forecasting of water quality and flood risks</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 mt-1">✓</span>
                  <div>
                    <span className="font-semibold">Early Warning System:</span>
                    <span className="text-sm text-muted-foreground ml-2">Automated alerts for pollution and flood events</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 mt-1">✓</span>
                  <div>
                    <span className="font-semibold">Citizen Engagement:</span>
                    <span className="text-sm text-muted-foreground ml-2">Public reporting and volunteer coordination platform</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 mt-1">✓</span>
                  <div>
                    <span className="font-semibold">Scalable Architecture:</span>
                    <span className="text-sm text-muted-foreground ml-2">Low-cost design enables deployment across multiple water bodies</span>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Impact Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Project Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {impacts.map((impact, index) => (
              <Card key={index}>
                <CardHeader>
                  <impact.icon className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>{impact.title}</CardTitle>
                  <CardDescription>{impact.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {impact.stats.map((stat, idx) => (
                      <li key={idx} className="text-sm flex items-center">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
                        {stat}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Users className="h-6 w-6 text-primary" />
              <CardTitle>Project Team</CardTitle>
            </div>
            <CardDescription>Dedicated professionals driving innovation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{member.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Partners */}
        <div className="mt-12 text-center">
          <h2 className="text-xl font-bold mb-6">Institutional Partners</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="border border-border rounded-lg p-6 min-w-[250px]">
              <h3 className="font-bold text-primary">Government of Gujarat</h3>
              <p className="text-sm text-muted-foreground mt-2">Lead Agency</p>
            </div>
            <div className="border border-border rounded-lg p-6 min-w-[250px]">
              <h3 className="font-bold text-primary">Gujarat Council on Science & Technology</h3>
              <p className="text-sm text-muted-foreground mt-2">Technology Partner</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
