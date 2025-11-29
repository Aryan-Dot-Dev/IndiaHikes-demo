import { useState, useEffect, useRef, useCallback } from "react";
import { Mountain, MapPin, Zap } from "lucide-react";
import Searchbar from "./Searchbar"

const Hero = () => {
  const images = [
    {
      src: "/assets/hero-images/hero_img_1.png",
      position: "center",
      mobilePosition: "center",
      title: "Conquer Mountain Peaks",
      tagline: "Experience breathtaking summits and pristine alpine meadows"
    },
    {
      src: "/assets/hero-images/buran_ghati.png",
      position: "bottom center",
      mobilePosition: "bottom",
      title: "Trek the High Passes",
      tagline: "Navigate stunning mountain passes with expert guidance"
    },
    {
      src: "/assets/hero-images/happy_trekker.png",
      position: "center bottom",
      mobilePosition: "center",
      title: "Join Fellow Adventurers",
      tagline: "Connect with passionate trekkers from across the globe"
    },
    {
      src: "/assets/hero-images/jothiran.png",
      position: "right",
      mobilePosition: "right center",
      title: "Discover Hidden Gems",
      tagline: "Explore lesser-known trails that showcase true beauty"
    },
    {
      src: "/assets/hero-images/miyar_valley.png",
      position: "right center",
      mobilePosition: "center bottom",
      title: "Walk Through Paradise",
      tagline: "Traverse lush valleys and pristine natural landscapes"
    },
    {
      src: "/assets/hero-images/stay.png",
      position: "bottom center",
      mobilePosition: "center",
      title: "Rest Under the Stars",
      tagline: "Experience comfortable camping in nature's embrace"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef(null);

  // Preload images for smooth transitions
  useEffect(() => {
    images.forEach((image) => {
      const img = new Image();
      img.src = image.src;
    });
  }, []);

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 800);
  };

  const handleNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 800);
  }, [isTransitioning, images.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);

    return () => clearInterval(interval);
  }, [images.length, handleNext]);

  return (
    <>
      {/* Desktop View */}
      <div className="px-4 sm:px-6 lg:px-8">
        <div ref={containerRef} className='hidden md:block relative w-full h-[calc(100vh-88px)] max-h-[calc(100vh-88px)] max-w-full mx-0 my-0 overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-700/30'>
        {/* Layered background images for smooth transitions */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-800 ease-in-out hero-background bg-cover ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
            style={{
              backgroundImage: `url(${image.src})`,
              backgroundPosition: image.position
            }}
          />
        ))}

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-linear-to-b from-black/40 to-black/60 rounded-2xl sm:rounded-3xl"></div>
        <div className="absolute inset-0 bg-linear-to-br from-[#EFB71A]/5 via-transparent to-[#0CE88C]/5 rounded-2xl sm:rounded-3xl"></div>

        <div className="relative flex flex-col h-full w-full py-8 sm:py-20 z-10">
          {/* Title at top */}
          <div className="text-center text-white mb-4 sm:mb-6 max-w-5xl mx-auto px-4">
            <span className="text-xs tracking-[0.5em] uppercase text-[#EFB71A]/80 inline-block mb-2 font-semibold">IndiaHikes Expeditions</span>
            <h1 className="font-elms font-black text-3xl sm:text-4xl md:text-5xl lg:text-5xl leading-tight tracking-tight mb-3 drop-shadow-[0_0_15px_rgba(0,0,0,0.65)]">
              <span className="block">Experience trekking with the</span>
              <span className="block bg-linear-to-r from-[#EFB71A] to-[#0CE88C] bg-clip-text text-transparent">Organization That Sets the Standard</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white/80 tracking-[0.1em] uppercase">
              Trail tested, summit ready, leave no trace—every trek built for growth.
            </p>
          </div>

          {/* Spacer to push searchbar lower */}
          {/* <div className="flex-1"></div> */}

          {/* Searchbar with Navigation Buttons in flexbox */}
          <div className="flex items-center justify-center gap-0 px-0 relative w-full mt-24">
            <button
              onClick={handlePrev}
              disabled={isTransitioning}
              className="absolute left-6 group cursor-pointer hover:scale-110 transition-transform duration-300 p-2 sm:p-3 rounded-full hover:bg-white/10 backdrop-blur-sm shrink-0"
              aria-label="Previous image"
            >
              <img src="/assets/chevron-left.svg" alt="previous" className="w-8 sm:w-12 drop-shadow-lg" />
            </button>

            <div className="w-full max-w-2xl lg:max-w-4xl">
              <Searchbar />
            </div>

            <button
              onClick={handleNext}
              disabled={isTransitioning}
              className="absolute right-6 group cursor-pointer hover:scale-110 transition-transform duration-300 p-2 sm:p-3 rounded-full hover:bg-white/10 backdrop-blur-sm shrink-0"
              aria-label="Next image"
            >
              <img src="/assets/chevron-right.svg" alt="next" className="w-8 sm:w-12 drop-shadow-lg" />
            </button>
          </div>
        </div>

        {/* Pagination indicators at bottom */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (isTransitioning) return;
                setIsTransitioning(true);
                setCurrentIndex(idx);
                setTimeout(() => setIsTransitioning(false), 800);
              }}
              className={`transition-all duration-300 rounded-full backdrop-blur-sm ${
                idx === currentIndex
                  ? 'w-6 sm:w-8 h-2 bg-[#EFB71A] shadow-lg'
                  : 'w-2 h-2 bg-white/40 hover:bg-white/60'
              }`}
              disabled={isTransitioning}
            />
          ))}
        </div>
        </div>
      </div>

      {/* Mobile View - Redesigned */}
      <div className='md:hidden relative w-full overflow-hidden h-[calc(100vh-88px)] max-h-[calc(100vh-88px)]'>
          {/* Mobile Hero Background with simplified design */}
          <div className='relative h-screen bg-linear-to-b from-gray-900'>
            {/* Animated gradient background elements */}
            <div className='absolute top-0 left-0 w-full h-2/3 bg-linear-to-b from-[#EFB71A]/20 to-transparent opacity-40'></div>
            <div className='absolute -top-32 -right-32 w-64 h-64 bg-[#0CE88C]/10 rounded-full blur-3xl'></div>
            <div className='absolute top-1/3 -left-40 w-80 h-80 bg-[#EFB71A]/5 rounded-full blur-3xl'></div>

            {/* Featured Image Carousel - Full height, bottom positioned */}
            <div className='absolute inset-0'>
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                  style={{
                    backgroundImage: `url(${image.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: image.mobilePosition
                  }}
                />
              ))}
              {/* Dark gradient overlay for text readability */}
              <div className='absolute inset-0 bg-linear-to-t from-black/90 via-black/70 to-black/40'></div>
            </div>

            {/* Content - Positioned at bottom */}
            <div className='relative h-full flex flex-col justify-between p-4 z-10'>
            {/* Top Section - Title and branding */}
            <div className='flex flex-col gap-6 pt-8'>
              <div className='flex items-center gap-2'>
                <Mountain className='w-6 h-6 text-[#EFB71A]' />
                <span className='font-elms font-bold text-[#0CE88C] text-sm tracking-widest'>INDIA HIKES</span>
              </div>
              
              <div className='space-y-4'>
                <div>
                  <h1 className='font-elms font-black text-white text-4xl leading-tight mb-2 transition-all duration-500'>
                    {images[currentIndex].title}
                  </h1>
                  <p className='font-elms text-gray-300 text-sm leading-relaxed transition-all duration-500'>
                    {images[currentIndex].tagline}
                  </p>
                </div>

                <div className='flex gap-2 pt-2'>
                  <div className='flex items-center gap-1.5 px-3 py-2 bg-white/5 backdrop-blur-sm border border-[#EFB71A]/30 rounded-lg'>
                    <Zap className='w-4 h-4 text-[#EFB71A]' />
                    <span className='text-xs text-gray-300 font-elms'>Adventure</span>
                  </div>
                  <div className='flex items-center gap-1.5 px-3 py-2 bg-white/5 backdrop-blur-sm border border-[#0CE88C]/30 rounded-lg'>
                    <MapPin className='w-4 h-4 text-[#0CE88C]' />
                    <span className='text-xs text-gray-300 font-elms'>Explore</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section - Searchbar and Navigation */}
            <div className='space-y-4 pb-4'>
              {/* Searchbar */}
              <div className='w-full'>
                <Searchbar />
              </div>

              {/* Image Navigation Controls */}
              <div className='space-y-3'>
                {/* Dots Indicator */}
                <div className='flex justify-center items-center gap-1'>
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        if (isTransitioning) return;
                        setIsTransitioning(true);
                        setCurrentIndex(idx);
                        setTimeout(() => setIsTransitioning(false), 800);
                      }}
                      className={`transition-all duration-300 rounded-full ${
                        idx === currentIndex
                          ? 'w-8 h-2 bg-[#EFB71A] shadow-lg'
                          : 'w-2 h-2 bg-white/30 hover:bg-white/50'
                      }`}
                      disabled={isTransitioning}
                      aria-label={`Go to image ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Arrow Navigation Buttons */}
                <div className='flex gap-3 justify-center'>
                  <button
                    onClick={handlePrev}
                    disabled={isTransitioning}
                    className='group cursor-pointer hover:scale-110 active:scale-95 transition-transform duration-200 p-2.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20'
                    aria-label="Previous image"
                  >
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  <button
                    onClick={handleNext}
                    disabled={isTransitioning}
                    className='group cursor-pointer hover:scale-110 active:scale-95 transition-transform duration-200 p-2.5 rounded-full bg-[#EFB71A]/20 hover:bg-[#EFB71A]/40 backdrop-blur-sm border border-[#EFB71A]/50'
                    aria-label="Next image"
                  >
                    <svg className="w-5 h-5 text-[#EFB71A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Quick Stats */}
              <div className='grid grid-cols-3 gap-3 pt-2'>
                <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 text-center'>
                  <div className='text-[#EFB71A] font-bold text-lg'>500+</div>
                  <div className='text-gray-300 text-xs'>Trails</div>
                </div>
                <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 text-center'>
                  <div className='text-[#0CE88C] font-bold text-lg'>50K+</div>
                  <div className='text-gray-300 text-xs'>Trekkers</div>
                </div>
                <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 text-center'>
                  <div className='text-[#EFB71A] font-bold text-lg'>15+</div>
                  <div className='text-gray-300 text-xs'>States</div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
    </>
  )
}

export default Hero