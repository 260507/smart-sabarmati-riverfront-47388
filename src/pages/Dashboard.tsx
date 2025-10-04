import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { Droplets, Thermometer, TestTube, Activity, AlertTriangle, CheckCircle } from "lucide-react";

const Dashboard = () => {
  const [liveData, setLiveData] = useState({
    turbidity: 25.4,
    ph: 7.2,
    temperature: 28.5,
    dissolvedOxygen: 6.8,
  });

  // Simulate live data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveData({
        turbidity: 20 + Math.random() * 15,
        ph: 6.8 + Math.random() * 0.8,
        temperature: 26 + Math.random() * 5,
        dissolvedOxygen: 6 + Math.random() * 2,
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Mock historical data for charts
  const generateHistoricalData = () => {
    return Array.from({ length: 24 }, (_, i) => ({
      time: `${i}:00`,
      turbidity: 20 + Math.random() * 15,
      ph: 6.8 + Math.random() * 0.8,
      temperature: 26 + Math.random() * 5,
      dissolvedOxygen: 6 + Math.random() * 2,
    }));
  };

  const historicalData = generateHistoricalData();

  const robotStatus = [
    { id: 1, status: "active", location: "Zone A", battery: 85 },
    { id: 2, status: "active", location: "Zone B", battery: 92 },
    { id: 3, status: "charging", location: "Dock 1", battery: 45 },
    { id: 4, status: "active", location: "Zone C", battery: 78 },
    { id: 5, status: "active", location: "Zone D", battery: 88 },
  ];

  const getStatusColor = (value: number, type: string) => {
    if (type === "ph") {
      return value >= 6.5 && value <= 8.5 ? "text-accent" : "text-destructive";
    }
    if (type === "turbidity") {
      return value < 30 ? "text-accent" : "text-destructive";
    }
    return "text-accent";
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Real-Time Monitoring Dashboard</h1>
          <p className="text-muted-foreground">Live water quality data from Sabarmati Riverfront IoT sensors</p>
        </div>

        {/* Live Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Turbidity</CardTitle>
              <Droplets className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className={`text-2xl font-bold ${getStatusColor(liveData.turbidity, "turbidity")}`}>
                {liveData.turbidity.toFixed(1)} NTU
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {liveData.turbidity < 30 ? "Optimal range" : "Above threshold"}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">pH Level</CardTitle>
              <TestTube className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className={`text-2xl font-bold ${getStatusColor(liveData.ph, "ph")}`}>
                {liveData.ph.toFixed(1)}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {liveData.ph >= 6.5 && liveData.ph <= 8.5 ? "Optimal range" : "Outside range"}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Temperature</CardTitle>
              <Thermometer className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">
                {liveData.temperature.toFixed(1)}°C
              </div>
              <p className="text-xs text-muted-foreground mt-1">Within normal range</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Dissolved Oxygen</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">
                {liveData.dissolvedOxygen.toFixed(1)} mg/L
              </div>
              <p className="text-xs text-muted-foreground mt-1">Healthy levels</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>24-Hour Turbidity Trend</CardTitle>
              <CardDescription>Real-time water clarity measurement</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={historicalData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="turbidity" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.3} />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>pH & Temperature Monitoring</CardTitle>
              <CardDescription>Multi-parameter tracking over 24 hours</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={historicalData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="ph" stroke="hsl(var(--accent))" strokeWidth={2} name="pH" />
                  <Line type="monotone" dataKey="temperature" stroke="hsl(var(--secondary))" strokeWidth={2} name="Temp (°C)" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Robot Swarm Status */}
        <Card>
          <CardHeader>
            <CardTitle>Floating Robot Swarm Status</CardTitle>
            <CardDescription>Real-time status of autonomous monitoring units</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {robotStatus.map((robot) => (
                <div key={robot.id} className="border border-border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold">Robot {robot.id}</span>
                    {robot.status === "active" ? (
                      <CheckCircle className="h-5 w-5 text-accent" />
                    ) : (
                      <AlertTriangle className="h-5 w-5 text-secondary" />
                    )}
                  </div>
                  <div className="text-sm text-muted-foreground mb-1">
                    Location: {robot.location}
                  </div>
                  <div className="text-sm">
                    <span className="text-muted-foreground">Battery: </span>
                    <span className={robot.battery > 70 ? "text-accent" : "text-secondary"}>
                      {robot.battery}%
                    </span>
                  </div>
                  <div className="mt-2">
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${robot.battery > 70 ? "bg-accent" : "bg-secondary"}`}
                        style={{ width: `${robot.battery}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
