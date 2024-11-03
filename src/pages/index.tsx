import React, { useState, useEffect } from 'react';
import { 
  Shield, Network, Router, Lock, Mail, Phone, ChevronRight, Menu, X,
  Globe, Users, Server, ShieldCheck, 
  AlertTriangle, CheckCircle, Clock, Cpu, FileTerminal, 
  Building, MonitorSmartphone, Binary, 
  ShieldBan, NetworkIcon, Palette
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';

const NexusSecWebsite = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [hoveredService, setHoveredService] = useState(null);
  
  useEffect(() => {
    // Sophisticated loading animation
    const loadingInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(loadingInterval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => clearInterval(loadingInterval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const coreServices = [
    {
      icon: <Network className="w-12 h-12" />,
      title: "Network Design & Architecture",
      description: "Enterprise-grade network infrastructure design with advanced security integration",
      features: [
        "Network Segmentation",
        "Zero Trust Architecture",
        "High Availability Design",
        "Performance Optimization"
      ]
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Cybersecurity Consulting",
      description: "Strategic security consulting to protect your digital assets",
      features: [
        "Risk Assessment",
        "Security Roadmap",
        "Compliance Planning",
        "Security Architecture"
      ]
    },
    {
      icon: <ShieldCheck className="w-12 h-12" />,
      title: "Cybersecurity Services",
      description: "Comprehensive security solutions for modern enterprises",
      features: [
        "Threat Detection & Response",
        "Security Monitoring",
        "Incident Response",
        "Vulnerability Management"
      ]
    }
  ];

  const technologies = [
    { icon: <Server />, label: "Infrastructure" },
    { icon: <Shield />, label: "Security" },
    { icon: <NetworkIcon />, label: "Networks" },
    { icon: <Binary />, label: "Systems" },
    { icon: <MonitorSmartphone />, label: "Endpoints" },
    { icon: <FileTerminal />, label: "Analysis" }
  ];

  if (isLoading) {
    return (
      <div className="h-screen bg-black flex flex-col items-center justify-center">
        <div className="relative w-24 h-24 mb-8">
          <div className="absolute inset-0 border-4 border-blue-500/20 rounded-full" />
          <div 
            className="absolute inset-0 border-4 border-blue-500 rounded-full border-t-transparent"
            style={{ 
              transform: `rotate(${loadingProgress * 3.6}deg)`,
              transition: 'transform 0.2s ease-out'
            }}
          />
        </div>
        <div className="text-3xl font-bold text-blue-500 mb-4">NEXUSSEC</div>
        <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-blue-700 transition-all duration-300"
            style={{ width: `${loadingProgress}%` }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-gray-100">
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Header */}
      <header className="fixed w-full bg-black/95 backdrop-blur-xl z-40 border-b border-gray-800/50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-3xl font-bold tracking-tighter">
            <span className="text-blue-500">NEXUS</span>
            <span className="text-gray-300">SEC</span>
          </div>
          
          <nav className="hidden lg:flex space-x-8">
            {['Solutions', 'Services', 'Technology', 'Contact'].map(item => (
              <button
                key={item}
                onClick={() => setActiveSection(item.toLowerCase())}
                className={`relative group ${
                  activeSection === item.toLowerCase() ? 'text-blue-500' : ''
                }`}
              >
                <span className="hover:text-blue-500 transition-colors">{item}</span>
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full ${
                  activeSection === item.toLowerCase() ? 'w-full' : ''
                }`} />
              </button>
            ))}
            <button className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-md transition-all transform hover:scale-105">
              Contact Us
            </button>
          </nav>

          <button 
            className="lg:hidden text-blue-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-black/95 border-t border-gray-800/50 absolute w-full">
            <div className="container mx-auto py-4 space-y-4">
              {['Solutions', 'Services', 'Technology', 'Contact'].map(item => (
                <button
                  key={item}
                  onClick={() => {
                    setActiveSection(item.toLowerCase());
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left py-3 px-4 hover:bg-gray-800/50 rounded transition-colors"
                >
                  {item}
                </button>
              ))}
              <button className="w-full bg-blue-500 hover:bg-blue-600 px-4 py-3 rounded-md">
                Contact Us
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-black/50 to-black" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Advanced
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700"> Network </span>
              & 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700"> Security </span>
              Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Protecting enterprise infrastructure with next-generation security architecture
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-md transition-all transform hover:scale-105 flex items-center text-lg">
              Secure Your Infrastructure
              <ChevronRight className="ml-2" />
            </button>
          </div>
        </div>
        
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-circuit-pattern" />
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900/50 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
            Enterprise Security Solutions
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-3xl mx-auto">
            Comprehensive security and network solutions designed for modern enterprise infrastructure
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <Card 
                key={index}
                className={`bg-gray-900/30 border-gray-800 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2 ${
                  hoveredService === index ? 'scale-105' : ''
                }`}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <CardContent className="p-8">
                  <div className="text-blue-500 mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-blue-500 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-16 text-center">Technology Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="flex flex-col items-center p-6 bg-gray-900/30 rounded-lg hover:bg-gray-800/50 transition-all group"
              >
                <div className="text-blue-500 mb-4 transform group-hover:scale-110 transition-transform">
                  {tech.icon}
                </div>
                <span className="text-gray-300">{tech.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900/30 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gray-900/30 rounded-lg p-8 border border-gray-800">
            <h2 className="text-3xl font-bold mb-8 text-center">Connect With Our Team</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <a href="mailto:contact@nexussec.com" className="flex items-center text-blue-500 hover:text-blue-400">
                    <Mail className="mr-2" />
                    contact@nexussec.com
                  </a>
                  <a href="tel:+1234567890" className="flex items-center text-blue-500 hover:text-blue-400">
                    <Phone className="mr-2" />
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
                <div className="flex items-start space-x-2 text-blue-500">
                  <Shield />
                  <div>
                    <p className="font-semibold">Security Operations Center</p>
                    <p className="text-gray-400 text-sm">Round-the-clock monitoring and support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .bg-circuit-pattern {
          background-image: 
            linear-gradient(to right, #1a365d 1px, transparent 1px),
            linear-gradient(to bottom, #1a365d 1px, transparent 1px);
          background-size: 50px 50px;
          animation: patternMove 20s linear infinite;
        }

        @keyframes patternMove {
          0% { transform: translateY(0) translateX(0); }
          100% { transform: translateY(-50%) translateX(-50%); }
        }

        @media (max-width: 768px) {
          .bg-circuit-pattern {
            background-size: 30px 30px;
          }
        }
      `}</style>
    </div>
  );
};

export default NexusSecWebsite;
