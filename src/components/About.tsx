const About = () => {
  return (
    <section id="about" className="py-24 bg-[#0a0a0a] relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Mission Critical
            </h2>
            <div className="w-24 h-1 bg-[#ff7b00] mx-auto mb-8" />
          </div>

          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-gray-800 rounded-2xl p-10 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff7b00]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ff7b00]/5 rounded-full blur-3xl" />

            <div className="relative z-10">
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6">
                VyomGarud is pioneering the future of unmanned aerial systems with
                <span className="text-[#ff7b00] font-semibold"> military-grade precision</span> and
                <span className="text-[#ff7b00] font-semibold"> advanced autonomy</span>.
              </p>

              <p className="text-lg text-gray-400 leading-relaxed mb-6">
                Our mission is to deliver cutting-edge UAV solutions that redefine operational excellence
                in defense, surveillance, and critical infrastructure monitoring. Built on a foundation
                of reliability engineering and aerospace innovation, we develop systems that perform
                flawlessly in the most demanding environments.
              </p>

              <p className="text-lg text-gray-400 leading-relaxed">
                From concept to deployment, every VyomGarud platform embodies our commitment to
                uncompromising quality, operational resilience, and technological superiority.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
