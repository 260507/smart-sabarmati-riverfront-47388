import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { AlertCircle, Users, BookOpen, Send, Heart } from "lucide-react";

const CitizenPortal = () => {
  const { toast } = useToast();
  const [pollutionReport, setPollutionReport] = useState({
    name: "",
    email: "",
    location: "",
    description: "",
  });

  const [volunteerSignup, setVolunteerSignup] = useState({
    name: "",
    email: "",
    phone: "",
    availability: "",
  });

  const handlePollutionReport = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Report Submitted",
      description: "Thank you for reporting. Our team will investigate this issue.",
    });
    setPollutionReport({ name: "", email: "", location: "", description: "" });
  };

  const handleVolunteerSignup = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Welcome Volunteer!",
      description: "Thank you for joining us. We'll contact you with upcoming cleanup activities.",
    });
    setVolunteerSignup({ name: "", email: "", phone: "", availability: "" });
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Citizen Engagement Portal</h1>
          <p className="text-muted-foreground">Join us in preserving and protecting our water bodies</p>
        </div>

        {/* Report Pollution Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <AlertCircle className="h-6 w-6 text-destructive" />
                <CardTitle>Report Water Pollution</CardTitle>
              </div>
              <CardDescription>Help us identify and address pollution incidents quickly</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handlePollutionReport} className="space-y-4">
                <div>
                  <Label htmlFor="report-name">Your Name</Label>
                  <Input
                    id="report-name"
                    value={pollutionReport.name}
                    onChange={(e) => setPollutionReport({ ...pollutionReport, name: e.target.value })}
                    required
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <Label htmlFor="report-email">Email Address</Label>
                  <Input
                    id="report-email"
                    type="email"
                    value={pollutionReport.email}
                    onChange={(e) => setPollutionReport({ ...pollutionReport, email: e.target.value })}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <Label htmlFor="report-location">Location</Label>
                  <Input
                    id="report-location"
                    value={pollutionReport.location}
                    onChange={(e) => setPollutionReport({ ...pollutionReport, location: e.target.value })}
                    required
                    placeholder="Specific location or landmark"
                  />
                </div>
                <div>
                  <Label htmlFor="report-description">Description of Issue</Label>
                  <Textarea
                    id="report-description"
                    value={pollutionReport.description}
                    onChange={(e) => setPollutionReport({ ...pollutionReport, description: e.target.value })}
                    required
                    placeholder="Please describe what you observed..."
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Submit Report
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Volunteer Signup */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Heart className="h-6 w-6 text-accent" />
                <CardTitle>Volunteer for River Cleanup</CardTitle>
              </div>
              <CardDescription>Join our community in cleaning and protecting the riverfront</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleVolunteerSignup} className="space-y-4">
                <div>
                  <Label htmlFor="volunteer-name">Full Name</Label>
                  <Input
                    id="volunteer-name"
                    value={volunteerSignup.name}
                    onChange={(e) => setVolunteerSignup({ ...volunteerSignup, name: e.target.value })}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <Label htmlFor="volunteer-email">Email Address</Label>
                  <Input
                    id="volunteer-email"
                    type="email"
                    value={volunteerSignup.email}
                    onChange={(e) => setVolunteerSignup({ ...volunteerSignup, email: e.target.value })}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <Label htmlFor="volunteer-phone">Phone Number</Label>
                  <Input
                    id="volunteer-phone"
                    type="tel"
                    value={volunteerSignup.phone}
                    onChange={(e) => setVolunteerSignup({ ...volunteerSignup, phone: e.target.value })}
                    required
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <Label htmlFor="volunteer-availability">Availability</Label>
                  <Textarea
                    id="volunteer-availability"
                    value={volunteerSignup.availability}
                    onChange={(e) => setVolunteerSignup({ ...volunteerSignup, availability: e.target.value })}
                    placeholder="When are you available? (weekdays/weekends)"
                    rows={3}
                  />
                </div>
                <Button type="submit" variant="secondary" className="w-full">
                  <Users className="mr-2 h-4 w-4" />
                  Sign Up as Volunteer
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Educational Content */}
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6 text-primary" />
              <CardTitle>Water Conservation Education</CardTitle>
            </div>
            <CardDescription>Learn how to protect and preserve our water bodies</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border border-border rounded-lg p-6">
                <h3 className="font-semibold mb-3 text-primary">Why Water Quality Matters</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Clean water is essential for public health, biodiversity, and economic prosperity. Poor water quality can lead to disease, ecosystem collapse, and economic losses.
                </p>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Affects 2+ million people in the region</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Supports local wildlife and fish populations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Critical for agriculture and industry</span>
                  </li>
                </ul>
              </div>

              <div className="border border-border rounded-lg p-6">
                <h3 className="font-semibold mb-3 text-primary">Common Pollution Sources</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Understanding pollution sources helps us prevent contamination and protect our water resources for future generations.
                </p>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Industrial discharge and runoff</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Untreated sewage and wastewater</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Agricultural fertilizers and pesticides</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Plastic waste and litter</span>
                  </li>
                </ul>
              </div>

              <div className="border border-border rounded-lg p-6">
                <h3 className="font-semibold mb-3 text-primary">How You Can Help</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Every citizen can contribute to water conservation. Small actions collectively make a big difference.
                </p>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Never dump waste in water bodies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Report pollution incidents immediately</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Participate in cleanup drives</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Spread awareness in your community</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CitizenPortal;
