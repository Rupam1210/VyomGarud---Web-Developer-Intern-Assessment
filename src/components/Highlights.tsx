import { Shield, Cpu, Globe } from 'lucide-react';

const highlights = [
  {
    icon: Shield,
    title: 'Battle-Tested Reliability',
    description: 'Engineered to military specifications with redundant systems, ruggedized components, and proven performance in extreme conditions.'
  },
  {
    icon: Cpu,
    title: 'AI-Powered Intelligence',
    description: 'Advanced neural networks for autonomous decision-making, object recognition, and predictive maintenance across all platforms.'
  },
  {
    icon: Globe,
    title: 'Global Operations Ready',
    description: 'Multi-climate certification, encrypted satellite communications, and 24/7 technical support for worldwide deployment scenarios.'
  }
];

const Highlights = () => {
  return (
    <section id="highlights" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,123,0,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,123,0,0.05),transparent_50%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Why VyomGarud
          </h2>
          <div className="w-24 h-1 bg-[#ff7b00] mx-auto mb-8" />
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff7b00]/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-gray-800 rounded-2xl p-10 h-full hover:border-[#ff7b00]/50 transition-all duration-300">
                <div className="mb-6 inline-flex p-5 bg-[#ff7b00]/10 rounded-xl">
                  <highlight.icon className="w-10 h-10 text-[#ff7b00]" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {highlight.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-8 sm:gap-16 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-gray-800 rounded-2xl p-8 sm:p-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#ff7b00] mb-2">99.8%</div>
              <div className="text-gray-400">Mission Success</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#ff7b00] mb-2">24/7</div>
              <div className="text-gray-400">Technical Support</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#ff7b00] mb-2">50+</div>
              <div className="text-gray-400">Active Deployments</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
