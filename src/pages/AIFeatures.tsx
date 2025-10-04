import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, TrendingUp, AlertCircle, Waves, BarChart3, Shield } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from "recharts";

const AIFeatures = () => {
  const waterQualityPrediction = Array.from({ length: 7 }, (_, i) => ({
    day: `Day ${i + 1}`,
    predicted: 7 + Math.random() * 1.5,
    actual: 7 + Math.random() * 1.5,
    confidence: 85 + Math.random() * 10,
  }));

  const floodRiskData = [
    { location: "Zone A", risk: 15, threshold: 30 },
    { location: "Zone B", risk: 45, threshold: 30 },
    { location: "Zone C", risk: 25, threshold: 30 },
    { location: "Zone D", risk: 10, threshold: 30 },
    { location: "Zone E", risk: 55, threshold: 30 },
  ];

  const aiCapabilities = [
    {
      subject: "Accuracy",
      A: 95,
      fullMark: 100,
    },
    {
      subject: "Speed",
      A: 88,
      fullMark: 100,
    },
    {
      subject: "Reliability",
      A: 92,
      fullMark: 100,
    },
    {
      subject: "Cost Efficiency",
      A: 85,
      fullMark: 100,
    },
    {
      subject: "Scalability",
      A: 90,
      fullMark: 100,
    },
  ];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">AI-Powered Features</h1>
          <p className="text-muted-foreground">Advanced machine learning for water quality prediction and flood forecasting</p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <Brain className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Multi-Parameter Prediction</CardTitle>
              <CardDescription>
                AI models predict water quality parameters from core sensor data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Turbidity, pH, temperature forecasting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Dissolved oxygen level prediction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Contamination pattern detection</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Waves className="h-10 w-10 text-accent mb-2" />
              <CardTitle>Flood Prediction Model</CardTitle>
              <CardDescription>
                Real-time flood risk assessment and early warning system
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Dynamic risk mapping per zone</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Automated alert generation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Historical pattern analysis</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <TrendingUp className="h-10 w-10 text-secondary mb-2" />
              <CardTitle>Anomaly Detection</CardTitle>
              <CardDescription>
                Real-time identification of unusual water quality patterns
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Sudden pollution event detection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Sensor malfunction identification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Predictive maintenance alerts</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* AI Performance Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Water Quality Prediction Accuracy</CardTitle>
              <CardDescription>7-day forecast vs actual measurements</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={waterQualityPrediction}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area type="monotone" dataKey="predicted" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.3} name="AI Predicted" />
                  <Area type="monotone" dataKey="actual" stroke="hsl(var(--accent))" fill="hsl(var(--accent))" fillOpacity={0.3} name="Actual" />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>AI System Performance</CardTitle>
              <CardDescription>Key performance indicators</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart data={aiCapabilities}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} />
                  <Radar name="Performance" dataKey="A" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.6} />
                  <Legend />
                </RadarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Flood Risk Assessment */}
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <AlertCircle className="h-6 w-6 text-destructive" />
              <CardTitle>Real-Time Flood Risk Assessment</CardTitle>
            </div>
            <CardDescription>Dynamic risk mapping across monitored zones</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {floodRiskData.map((zone) => (
                <div key={zone.location} className="border border-border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold">{zone.location}</span>
                    <span className={`font-bold ${zone.risk > zone.threshold ? "text-destructive" : "text-accent"}`}>
                      {zone.risk > zone.threshold ? "High Risk" : "Low Risk"}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex-1">
                      <div className="w-full bg-muted rounded-full h-3">
                        <div
                          className={`h-3 rounded-full transition-all ${
                            zone.risk > zone.threshold ? "bg-destructive" : "bg-accent"
                          }`}
                          style={{ width: `${(zone.risk / 100) * 100}%` }}
                        />
                      </div>
                    </div>
                    <span className="text-sm font-medium w-16 text-right">{zone.risk}%</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Threshold: {zone.threshold}% | Current: {zone.risk}%
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Technology Details */}
        <div className="mt-8">
          <Card>
            <CardHeader>
              <BarChart3 className="h-8 w-8 text-primary mb-2" />
              <CardTitle>AI Technology Stack</CardTitle>
              <CardDescription>Advanced machine learning and data processing pipeline</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3 flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-accent" />
                    Models & Algorithms
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• LSTM networks for time-series prediction</li>
                    <li>• Random Forest for multi-parameter classification</li>
                    <li>• Gradient Boosting for anomaly detection</li>
                    <li>• Neural networks for pattern recognition</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 flex items-center">
                    <Brain className="h-5 w-5 mr-2 text-secondary" />
                    Key Capabilities
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Real-time data processing and inference</li>
                    <li>• Continuous model retraining and improvement</li>
                    <li>• Edge computing for low-latency predictions</li>
                    <li>• Scalable cloud-based analytics pipeline</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AIFeatures;
