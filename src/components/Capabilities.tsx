import { Eye, Radio, Zap, Target } from 'lucide-react';

const capabilities = [
  {
    icon: Eye,
    title: 'Advanced Surveillance',
    description: 'High-resolution ISR capabilities with real-time data transmission and multi-spectral imaging for comprehensive situational awareness.',
    features: ['4K+ Imaging', 'Night Vision', 'Real-time Streaming']
  },
  {
    icon: Radio,
    title: 'Autonomous Navigation',
    description: 'AI-powered flight systems with GPS-denied operation, obstacle avoidance, and adaptive mission planning for complex environments.',
    features: ['GPS-Independent', 'Auto-Pilot', 'Terrain Following']
  },
  {
    icon: Zap,
    title: 'Extended Endurance',
    description: 'Optimized power systems delivering extended flight times with hot-swappable batteries and solar-assisted operation capability.',
    features: ['6+ Hour Flight', 'Quick Recharge', 'Hybrid Power']
  },
  {
    icon: Target,
    title: 'Precision Systems',
    description: 'Military-grade accuracy for payload delivery, targeting, and geolocation with sub-meter precision and fail-safe redundancy.',
    features: ['Sub-meter GPS', 'Redundant Systems', 'Secure Comms']
  }
];

const Capabilities = () => {
  return (
    <section id="capabilities" className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Capabilities
          </h2>
          <div className="w-24 h-1 bg-[#ff7b00] mx-auto mb-8" />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Industry-leading UAV systems engineered for mission-critical operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-gray-800 rounded-xl p-8 hover:border-[#ff7b00]/50 transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              <div className="mb-6 inline-flex p-4 bg-[#ff7b00]/10 rounded-lg group-hover:bg-[#ff7b00]/20 transition-colors duration-300">
                <capability.icon className="w-8 h-8 text-[#ff7b00]" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#ff7b00] transition-colors duration-300">
                {capability.title}
              </h3>

              <p className="text-gray-400 mb-6 leading-relaxed">
                {capability.description}
              </p>

              <div className="space-y-2">
                {capability.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#ff7b00] rounded-full" />
                    <span className="text-sm text-gray-500">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
