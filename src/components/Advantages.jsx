import { RotateCw, Users, Heart, Handshake, Globe, Mountain, Camera, Award, Shield } from 'lucide-react';
import FloatingIcon from './FloatingIcon';

const Advantages = () => {
  const advantages = [
    {
      id: 1,
      icon: RotateCw,
      title: "Trek Again Philosophy",
      description: "If you're unable to complete a trek, or if you love a trek, repeat it with us anytime—absolutely free. No payment required."
    },
    {
      id: 2,
      icon: Users,
      title: "Expert Guidance",
      description: "Get personalized support from our experienced coordinators. From registration to departure, we prepare you every step of the way."
    },
    {
      id: 3,
      icon: Heart,
      title: "Women-Friendly Groups",
      description: "With 30% of our trekkers being women, all our groups are welcoming and comfortable for solo female travelers."
    },
    {
      id: 4,
      icon: Handshake,
      title: "Like-Minded Community",
      description: "Join a community of trekkers united by fitness, minimalism, mindfulness, and a deep love for nature."
    },
    {
      id: 5,
      icon: Globe,
      title: "Environmental Stewardship",
      description: "We don't just leave no trace—we actively clean mountains. Trek with us and contribute positively to the environment."
    },
    {
      id: 6,
      icon: Mountain,
      title: "Premium Equipment",
      description: "Decades of outdoor expertise culminated in India's finest trekking gear, available for your trek."
    }
  ];

  return (
    <div id="why-section" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-bg text-white relative overflow-hidden">
      {/* Premium background decorative elements - responsive sizing */}
      <div className="absolute top-0 left-0 w-48 h-48 sm:w-96 sm:h-96 bg-[#EFB71A]/5 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-96 sm:h-96 bg-[#0CE88C]/5 rounded-full blur-3xl opacity-50" />
      <div className="absolute top-1/4 right-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-[#0CE88C]/3 rounded-full blur-2xl opacity-40" />
      <div className="absolute bottom-1/4 left-1/4 w-24 h-24 sm:w-48 sm:h-48 bg-[#EFB71A]/4 rounded-full blur-2xl opacity-30" />
      <div className="absolute inset-0 bg-linear-to-br from-transparent via-[#EFB71A]/2 to-transparent opacity-20" />

      {/* Floating travel icons - hide on mobile for better performance */}
      <FloatingIcon icon={Mountain} className="hidden sm:block top-16 right-12" animationDelay={1} animationDuration={30} />
      <FloatingIcon icon={Users} className="hidden sm:block bottom-32 left-8" animationDelay={3} animationDuration={27} />
      <FloatingIcon icon={Handshake} className="hidden sm:block top-1/3 right-1/4" animationDelay={5} animationDuration={25} />
      <FloatingIcon icon={Globe} className="hidden sm:block bottom-1/3 left-1/3" animationDelay={2} animationDuration={28} />
      <FloatingIcon icon={Camera} className="hidden sm:block top-24 left-16" animationDelay={4} animationDuration={32} />
      <FloatingIcon icon={Award} className="hidden sm:block bottom-24 right-8" animationDelay={1.5} animationDuration={29} />
      <FloatingIcon icon={Shield} className="hidden sm:block top-1/2 right-1/3" animationDelay={3.5} animationDuration={26} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header - responsive text sizes */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="font-elms text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-linear-to-r from-[#EFB71A] to-[#0CE88C] bg-clip-text text-transparent">
            Why IndiaHikes?
          </h2>
          <p className="font-elms text-base sm:text-lg text-gray-300 max-w-3xl mx-auto px-4">
            You're guarded with our <span className="text-[#EFB71A] font-semibold">Trek Again Philosophy</span>
          </p>
          <div className="h-1 w-16 sm:w-24 bg-linear-to-r from-[#EFB71A] to-[#0CE88C] rounded-full mx-auto mt-3 sm:mt-4 opacity-60" />
        </div>

        {/* Advantages Grid - improved responsive breakpoints */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {advantages.map((advantage) => (
            <div
              key={advantage.id}
              className="group relative bg-linear-to-br from-gray-900/50 to-gray-800/30 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-xl border border-gray-700/50 hover:border-[#EFB71A]/60 transition-all duration-300 hover:scale-[1.02] sm:hover:scale-105 cursor-pointer overflow-hidden backdrop-blur-sm"
            >
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-linear-to-br from-[#EFB71A]/10 to-[#0CE88C]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Premium accent line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-[#EFB71A]/0 via-[#EFB71A] to-[#EFB71A]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Subtle inner glow */}
              <div className="absolute inset-0 bg-linear-to-t from-transparent via-[#EFB71A]/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl sm:rounded-2xl" />

              <div className="relative z-10">
                {/* Icon - responsive sizing */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mb-4 sm:mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <advantage.icon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#EFB71A] group-hover:text-[#0CE88C] transition-colors duration-300" strokeWidth={1.5} />
                </div>

                {/* Title - responsive text */}
                <h3 className="font-elms font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-white group-hover:text-[#EFB71A] transition-colors duration-300">
                  {advantage.title}
                </h3>

                {/* Description - responsive text */}
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                  {advantage.description}
                </p>

                {/* Bottom accent */}
                <div className="h-1 w-8 sm:w-12 bg-linear-to-r from-[#0CE88C] to-[#EFB71A] rounded-full mt-3 sm:mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Trust Statement - responsive text */}
        <div className="mt-8 sm:mt-12 lg:mt-16 text-center">
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto font-elms px-4">
            Experience trekking the way it should be—with <span className="text-[#EFB71A] font-semibold">integrity, safety, and community</span> at the heart of everything we do.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
