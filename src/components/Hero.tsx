import { ArrowRight, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,123,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,123,0,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#ff7b00]/20 bg-[#ff7b00]/5 mb-8 animate-fade-in">
            <Shield className="w-4 h-4 text-[#ff7b00]" />
            <span className="text-sm text-gray-300">Military-Grade UAV Systems</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight animate-slide-up">
            <span className="text-white">Vyom</span>
            <span className="text-[#ff7b00]">Garud</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-4 max-w-3xl mx-auto leading-relaxed animate-slide-up-delay-1">
            Advanced Autonomous Systems
          </p>

          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto animate-slide-up-delay-2">
            Precision-engineered unmanned aerial vehicles delivering unmatched reliability for critical operations
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up-delay-3">
            <button className="group px-8 py-4 bg-[#ff7b00] text-white rounded-lg font-semibold text-lg hover:bg-[#e66d00] transition-all duration-300 flex items-center justify-center gap-2 hover:gap-4">
              Explore Capabilities
              <ArrowRight className="w-5 h-5 transition-all duration-300" />
            </button>
            <button className="px-8 py-4 border-2 border-gray-700 text-white rounded-lg font-semibold text-lg hover:border-[#ff7b00] hover:text-[#ff7b00] transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-700 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-[#ff7b00] rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
