import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { gsap } from 'gsap';
import { Mountain, Map, Compass, Camera, Backpack, Tent, Footprints, Route } from 'lucide-react';
import FloatingIcon from './FloatingIcon';
import manojPrabhu from '../assets/reviews/manoj-prabhu.png';
import sabyasachiMukherjee from '../assets/reviews/sabyasachi-mukherjee.png';
import ankurWarikoo from '../assets/reviews/ankur-warikoo.png';
import atikaTantiya from '../assets/reviews/atika-tantiya.png';
import darshanShah from '../assets/reviews/darshan-shah.png';
import sujitDas from '../assets/reviews/sujit-das.png';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Manoj Prabhu",
      title: "Data Science & BI Freelancer",
      location: "Aarhus, Denmark",
      rating: 5,
      text: "IndiaHikes transformed my perspective on trekking. What started as a quest for physical challenges became a journey of self-discovery. The guides' deep knowledge of the terrain and their genuine care for each trekker made every step meaningful. I've trekked in multiple countries, but the combination of India's raw natural beauty and IndiaHikes' professionalism is unmatched. The organization is seamless—from pre-trek logistics to on-ground support. I returned with not just photos, but a renewed appreciation for nature and a stronger body and mind. Highly recommended for anyone seeking authentic mountain experiences.",
      avatar: manojPrabhu
    },
    {
      id: 2,
      name: "Sabyasachi Mukherjee",
      title: "Assistant Professor, Bengal Institute of Technology",
      location: "Kolkata, India",
      rating: 5,
      text: "As an educator, I've always believed in experiential learning. IndiaHikes provided exactly that. The trek was meticulously planned with safety as paramount, yet it challenged us physically and mentally. What impressed me most was the team's adaptability and their genuine passion for conservation. They don't just take you up a mountain; they teach you to respect it. The camaraderie among trekkers—people from different backgrounds coming together—was invaluable. I'm already planning my next trek with them. For anyone seeking a well-organized, professionally managed, and truly enriching trekking experience, IndiaHikes is the answer.",
      avatar: sabyasachiMukherjee
    },
    {
      id: 3,
      name: "Ankur Warikoo",
      title: "Entrepreneur & Content Creator",
      location: "India",
      rating: 5,
      text: "IndiaHikes isn't just about reaching a summit—it's about the journey and the people. Every moment was thoughtfully crafted, from the pre-trek communication to the post-trek follow-up. The guides were more like mentors, sharing not just navigation tips but also life lessons from their years in the mountains. What struck me was their commitment to sustainable tourism and community impact. You feel good about your money going to a company that genuinely cares. The physical challenge was real, but so was the mental clarity I gained. If you're on the fence, don't be. This is a life-changing experience.",
      avatar: ankurWarikoo
    },
    {
      id: 4,
      name: "Atika Tantiya",
      title: "Developer at SAP Labs India",
      location: "Bangalore, India",
      rating: 5,
      text: "Working in tech, I'm usually glued to screens. IndiaHikes gave me what I didn't know I was missing—a real disconnect and reconnect. The trek was challenging but perfectly paced. The guides' knowledge about flora, fauna, and local culture added dimensions I never expected. Safety measures were thorough without being overbearing. The post-trek stories and bonds formed with fellow trekkers lasted well beyond the mountains. IndiaHikes creates an environment where you can truly be yourself, challenge yourself, and inspire yourself. Every rupee spent felt like an investment in my wellbeing. Absolutely phenomenal experience!",
      avatar: atikaTantiya
    },
    {
      id: 5,
      name: "Darshan Shah",
      title: "Manager at Deloitte",
      location: "Hyderabad, India",
      rating: 5,
      text: "In my line of work, efficiency and precision matter. IndiaHikes delivers both, plus so much more. Every detail was handled professionally—permits, accommodation, meals, safety gear—nothing was left to chance. The guides were knowledgeable and encouraging, making even the toughest sections feel achievable. What I appreciated most was their emphasis on leaving no trace and supporting local communities. It's a company that operates with values, not just profit. The trek reignited my love for the outdoors and gave me a break I desperately needed. I've recommended IndiaHikes to all my colleagues, and they've all had similarly incredible experiences.",
      avatar: darshanShah
    },
    {
      id: 6,
      name: "Sujit Das",
      title: "Animation Supervisor at Mikros Animation",
      location: "Bangalore, India",
      rating: 5,
      text: "Coming from a creative background, I appreciate attention to detail and authentic storytelling. IndiaHikes excels at both. The trek wasn't just physical; it was a narrative journey through India's diverse landscapes and cultures. The guides shared stories that brought history and geography to life. The group dynamics fostered by the team created a sense of community and shared purpose. Every sunrise, every challenge overcome, every laugh shared made me realize the value of human connection. The photos I took tell a story, but the memories will last forever. If you want to experience India in its truest form with people who genuinely care, IndiaHikes is your answer. This experience has permanently changed how I see adventure and exploration.",
      avatar: sujitDas
    }
    // Add as many as needed
  ];

  const [currentReview, setCurrentReview] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [displayPage, setDisplayPage] = useState(0);
  const [selectedReviewId, setSelectedReviewId] = useState(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const reviewsPerPage = 3;
  const [hasMounted, setHasMounted] = useState(false);

  // Refs for GSAP animations
  const desktopGridRef = useRef(null);
  const mobileCardRef = useRef(null);

  // Auto-transition for mobile carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  // Auto-transition for desktop pagination
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % Math.ceil(reviews.length / reviewsPerPage));
    }, 6000);

    return () => clearInterval(interval);
  }, [reviews.length, reviewsPerPage]);

  // GSAP animation for desktop pagination - industry standard carousel
  useEffect(() => {
    if (desktopGridRef.current) {
      gsap.killTweensOf(desktopGridRef.current);
      
      // Smooth fade and scale effect (like Netflix)
      gsap.to(desktopGridRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 0.4,
        ease: "cubic.inOut",
        onComplete: () => {
          setDisplayPage(currentPage); // Update display after fade out
          if (desktopGridRef.current) {
            gsap.fromTo(
              desktopGridRef.current,
              { opacity: 0, scale: 0.95 },
              {
                opacity: 1,
                scale: 1,
                duration: 0.5,
                ease: "cubic.out"
              }
            );
          }
        }
      });
    }
  }, [currentPage]);

  // GSAP animation for mobile carousel - industry standard carousel
  useEffect(() => {
    if (mobileCardRef.current && currentReview !== undefined) {
      gsap.killTweensOf(mobileCardRef.current);
      
      // Smooth fade and scale effect
      gsap.to(mobileCardRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 0.35,
        ease: "cubic.inOut",
        onComplete: () => {
          if (mobileCardRef.current) {
            gsap.fromTo(
              mobileCardRef.current,
              { opacity: 0, scale: 0.95 },
              {
                opacity: 1,
                scale: 1,
                duration: 0.4,
                ease: "cubic.out"
              }
            );
          }
        }
      });
    }
  }, [currentReview]);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const nextPage = () => {
    const totalPages = Math.ceil(reviews.length / reviewsPerPage);
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    const totalPages = Math.ceil(reviews.length / reviewsPerPage);
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const openReviewPanel = (reviewId) => {
    setSelectedReviewId(reviewId);
    setIsPanelOpen(true);
  };

  const closeReviewPanel = () => {
    setIsPanelOpen(false);
    setTimeout(() => setSelectedReviewId(null), 300); // Delay to allow animation
  };

  useEffect(() => {
    if (typeof document === 'undefined') return;
    const html = document.documentElement;
    const applyLock = () => {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
      html.style.overflow = 'hidden';
      html.style.touchAction = 'none';
    };
    const releaseLock = () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
      html.style.overflow = '';
      html.style.touchAction = '';
    };

    if (isPanelOpen) {
      applyLock();
      if (window.lenisInstance) {
        window.lenisInstance.stop();
      }
    } else {
      releaseLock();
      if (window.lenisInstance) {
        window.lenisInstance.start();
      }
    }
    return () => {
      releaseLock();
      if (window.lenisInstance) {
        window.lenisInstance.start();
      }
    };
  }, [isPanelOpen]);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    const whySection = document.getElementById('why-section');
    if (!whySection) return;
    if (isPanelOpen) {
      whySection.classList.add('modal-blur');
    } else {
      whySection.classList.remove('modal-blur');
    }
    return () => {
      whySection.classList.remove('modal-blur');
    };
  }, [isPanelOpen]);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const activeReview = selectedReviewId ? reviews.find((r) => r.id === selectedReviewId) : null;

  const paginatedReviews = reviews.slice(displayPage * reviewsPerPage, (displayPage + 1) * reviewsPerPage);

  const modalContent = (
    <div className={`fixed inset-0 z-50 flex items-center justify-center px-4 transition-opacity duration-300 ${
      isPanelOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
    }`}>
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={closeReviewPanel}
        onWheel={(event) => event.stopPropagation()}
        onTouchMove={(event) => event.stopPropagation()}
      />

      <div className={`relative bg-linear-to-br from-gray-900 to-gray-800 w-full max-w-[min(90vw,360px)] sm:max-w-4xl max-h-[80vh] sm:max-h-[90vh] shadow-2xl border border-gray-700 rounded-4xl sm:rounded-[36px] overflow-hidden ${
        isPanelOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      } transition-all duration-300 delay-150`}>
        <button
          onClick={closeReviewPanel}
          className="absolute top-4 right-4 z-10 bg-black/70 hover:bg-black/80 text-white p-2 rounded-full shadow-lg border border-white/20"
          aria-label="Close review"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {activeReview && (
          <>
            <div className="md:hidden flex flex-col gap-4 p-5 overflow-y-auto h-full" data-panel-content="true">
              <div className="flex items-center gap-4">
                <img
                  src={activeReview.avatar}
                  alt={activeReview.name}
                  className="w-14 h-14 rounded-full border-2 border-[#EFB71A] shadow-lg"
                />
                <div>
                  <h3 className="font-elms font-bold text-lg text-white">{activeReview.name}</h3>
                  <p className="text-[#EFB71A] font-semibold text-xs uppercase tracking-[0.3em]">
                    {activeReview.title}
                  </p>
                  <p className="text-gray-300 text-xs mt-1">{activeReview.location}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${i < activeReview.rating ? 'text-[#EFB71A]' : 'text-gray-700'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-xs text-gray-400">{activeReview.rating}.0</span>
              </div>
              <p className="text-gray-200 leading-relaxed text-sm italic">
                "{activeReview.text}"
              </p>
            </div>
            <div className="hidden md:flex flex-col gap-6 p-8 overflow-y-auto h-full" data-panel-content="true">
              <div className="flex items-center gap-4">
                <img
                  src={activeReview.avatar}
                  alt={activeReview.name}
                  className="w-16 h-16 rounded-full border-2 border-[#EFB71A] shadow-lg"
                />
                <div>
                  <p className="text-xs uppercase tracking-[0.5em] text-gray-400">Trail verdict</p>
                  <h3 className="font-elms font-bold text-2xl text-white">{activeReview.name}</h3>
                  <p className="text-[#EFB71A] font-semibold text-sm uppercase tracking-[0.2em]">
                    {activeReview.title}
                  </p>
                  <p className="text-gray-300 text-sm">{activeReview.location}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < activeReview.rating ? 'text-[#EFB71A]' : 'text-gray-700'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-xs text-gray-400">{activeReview.rating}.0</span>
              </div>
              <p className="text-gray-200 leading-relaxed text-lg italic">
                "{activeReview.text}"
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );

  return (
    <>
      <style>{`
        [data-panel-content="true"]::-webkit-scrollbar {
          width: 10px;
        }
        [data-panel-content="true"]::-webkit-scrollbar-track {
          background: rgba(30, 30, 30, 0.5);
          border-radius: 10px;
        }
        [data-panel-content="true"]::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #EFB71A, #0CE88C);
          border-radius: 10px;
          border: 2px solid rgba(30, 30, 30, 0.5);
        }
        [data-panel-content="true"]::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #F5C842, #1DD4A4);
          box-shadow: 0 0 6px rgba(239, 183, 26, 0.6);
        }
      `}</style>
      <div className="py-16 px-4 bg-[#0b1520] text-white relative overflow-hidden">
      {/* Premium background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0CE88C]/5 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#EFB71A]/5 rounded-full blur-3xl opacity-50" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-linear-to-r from-[#EFB71A]/3 via-transparent to-[#0CE88C]/3 rounded-full blur-3xl opacity-30" />
      
      {/* Floating travel icons */}
      <FloatingIcon icon={Mountain} className="top-20 left-10" animationDelay={0} animationDuration={25} />
      <FloatingIcon icon={Map} className="top-32 right-20" animationDelay={2} animationDuration={22} />
      <FloatingIcon icon={Compass} className="bottom-40 left-16" animationDelay={4} animationDuration={28} />
      <FloatingIcon icon={Camera} className="bottom-20 right-32" animationDelay={1} animationDuration={24} />
      <FloatingIcon icon={Backpack} className="top-1/2 left-1/4" animationDelay={3} animationDuration={26} />
      <FloatingIcon icon={Tent} className="top-16 left-1/3" animationDelay={5} animationDuration={30} />
      <FloatingIcon icon={Footprints} className="bottom-32 right-1/3" animationDelay={1.5} animationDuration={27} />
      <FloatingIcon icon={Route} className="top-2/3 right-16" animationDelay={3.5} animationDuration={23} />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-elms text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-[#EFB71A] to-[#0CE88C] bg-clip-text text-transparent">
            Let's hear from those who trusted us!
          </h2>
          <p className="font-elms text-lg text-gray-300 max-w-2xl mx-auto">
            Hear from our satisfied trekkers who have experienced the magic of India's trails with us
          </p>
        </div>

        {/* Desktop Grid View with Pagination */}
        <div className="hidden md:block relative px-20">
          <div ref={desktopGridRef} className="grid md:grid-cols-3 gap-8 mb-8">
            {paginatedReviews.map((review) => (
              <div key={review.id} onClick={() => openReviewPanel(review.id)} className="bg-linear-to-br from-gray-800 to-gray-900 p-6 rounded-2xl shadow-xl border border-gray-700 hover:border-[#EFB71A] transition-all duration-300 hover:scale-105 h-80 flex flex-col relative overflow-hidden group cursor-pointer">
                {/* Subtle inner glow effect */}
                <div className="absolute inset-0 bg-linear-to-br from-[#EFB71A]/5 via-transparent to-[#0CE88C]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="flex items-center mb-4 relative z-10">
                  <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full mr-4 border-2 border-[#EFB71A]" />
                  <div>
                    <h3 className="font-elms font-semibold text-lg">{review.name}</h3>
                    <p className="text-gray-400 text-xs">{review.title}</p>
                    <p className="text-gray-500 text-xs">{review.location}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-5 h-5 ${i < review.rating ? 'text-[#EFB71A]' : 'text-gray-600'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 italic flex-1 line-clamp-4">"{review.text}"</p>
                <div className="text-[#EFB71A] text-sm font-semibold mt-2 group-hover:text-[#0CE88C] transition-colors">
                  ... Click to read full review
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center items-center gap-3 mt-8">
            <button
              onClick={prevPage}
              className="p-2 rounded-lg hover:bg-gray-700 transition-colors duration-200 text-gray-400 hover:text-[#EFB71A]"
              aria-label="Previous page"
            >
              <svg className="w-5 h-5" fill="none" stroke="white" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex gap-2">
              {Array.from({ length: Math.ceil(reviews.length / reviewsPerPage) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`h-2 transition-all duration-300 rounded-full ${
                    index === currentPage
                      ? 'w-8 bg-[#EFB71A]'
                      : 'w-2 bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextPage}
              className="p-2 rounded-lg hover:bg-gray-700 transition-colors duration-200 text-gray-400 hover:text-[#EFB71A]"
              aria-label="Next page"
            >
              <svg className="w-5 h-5" fill="none" stroke="white" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Carousel View */}
        <div className="md:hidden relative px-12">
          <div ref={mobileCardRef} onClick={() => openReviewPanel(reviews[currentReview].id)} className="bg-linear-to-br from-gray-800 to-gray-900 p-6 rounded-2xl shadow-xl border border-gray-700 h-72 flex flex-col cursor-pointer group hover:border-[#EFB71A] transition-all duration-300">
            <div className="flex items-center mb-4">
              <img src={reviews[currentReview].avatar} alt={reviews[currentReview].name} className="w-12 h-12 rounded-full mr-4 border-2 border-[#EFB71A]" />
              <div>
                <h3 className="font-elms font-semibold text-lg">{reviews[currentReview].name}</h3>
                <p className="text-gray-400 text-xs">{reviews[currentReview].title}</p>
                <p className="text-gray-500 text-xs">{reviews[currentReview].location}</p>
              </div>
            </div>
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className={`w-5 h-5 ${i < reviews[currentReview].rating ? 'text-[#EFB71A]' : 'text-gray-600'}`} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-300 italic flex-1 line-clamp-3">"{reviews[currentReview].text}"</p>
            <div className="text-[#EFB71A] text-sm font-semibold mt-2 group-hover:text-[#0CE88C] transition-colors">
              ... Click to read full review
            </div>
          </div>

          {/* Navigation Buttons - positioned outside the card */}
          <button onClick={prevReview} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#EFB71A] text-black p-3 rounded-full hover:bg-[#0CE88C] transition-colors shadow-lg z-10">
            <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button onClick={nextReview} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#EFB71A] text-black p-3 rounded-full hover:bg-[#0CE88C] transition-colors shadow-lg z-10">
            <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-3 h-3 rounded-full transition-colors ${index === currentReview ? 'bg-[#EFB71A]' : 'bg-gray-600'}`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="bg-linear-to-r from-[#EFB71A] to-[#0CE88C] text-black font-elms font-bold py-3 px-8 rounded-full hover:scale-105 transition-transform shadow-lg">
            Share Your Experience
          </button>
        </div>

      </div>
      {hasMounted && createPortal(modalContent, document.body)}
    </div>
    </>
  );
};

export default Reviews;