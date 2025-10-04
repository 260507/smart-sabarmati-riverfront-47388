import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Smart Sabarmati Riverfront</h3>
            <p className="text-sm opacity-90">
              An innovative AI-driven water quality monitoring and flood prediction system for urban water bodies.
            </p>
            <div className="flex space-x-3 mt-4">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/dashboard" className="hover:opacity-80 transition-opacity">
                  Real-Time Dashboard
                </Link>
              </li>
              <li>
                <Link to="/ai-features" className="hover:opacity-80 transition-opacity">
                  AI Features
                </Link>
              </li>
              <li>
                <Link to="/citizen-portal" className="hover:opacity-80 transition-opacity">
                  Citizen Portal
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:opacity-80 transition-opacity">
                  About Project
                </Link>
              </li>
            </ul>
          </div>

          {/* Government Logos */}
          <div>
            <h3 className="text-lg font-bold mb-4">Powered By</h3>
            <div className="space-y-3">
              <div className="text-sm font-medium">Government of Gujarat</div>
              <div className="text-sm font-medium">Gujarat Council on Science & Technology (GJ-COST)</div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-90">
          <p>© {new Date().getFullYear()} Smart Sabarmati Riverfront Project. All rights reserved.</p>
          <p className="mt-2">A Government of Gujarat Initiative</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
