import { useEffect } from 'react';
import Lenis from 'lenis';

// Global reference to Lenis instance
window.lenisInstance = null;

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    // Check if device is mobile/tablet
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

    // Initialize Lenis with responsive settings
    const lenis = new Lenis({
      duration: isMobile ? 0.8 : 1.2, // Faster on mobile
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      mouseMultiplier: isMobile ? 0.8 : 1, // Reduced mouse multiplier on mobile
      smoothTouch: true, // Enable smooth touch scrolling
      touchMultiplier: isMobile ? 1.5 : isTablet ? 1.8 : 2, // Adjusted touch multiplier
      infinite: false,
      // Disable smooth scrolling on very small screens for better performance
      smooth: window.innerWidth > 480,
    });

    // Store global reference
    window.lenisInstance = lenis;

    // Animation frame loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Handle anchor link clicks for smooth scrolling
    const handleAnchorClick = (e) => {
      const href = e.currentTarget.getAttribute('href');

      if (href?.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);

        if (target) {
          lenis.scrollTo(target, {
            offset: 0,
            duration: isMobile ? 1.0 : 1.5, // Faster scrolling on mobile
            easing: (t) => 1 - Math.pow(1 - t, 3), // ease-out cubic
          });
        }
      }
    };

    // Attach click handlers to all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
      link.addEventListener('click', handleAnchorClick);
    });

    // Handle window resize to update settings
    const handleResize = () => {
      const newIsMobile = window.innerWidth < 768;
      const newIsTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

      if (newIsMobile !== isMobile || newIsTablet !== isTablet) {
        // Reinitialize Lenis with new settings
        lenis.destroy();
        // The useEffect will re-run due to dependency change, but we'll handle it gracefully
        window.location.reload(); // Simple solution for now
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      lenis.destroy();
      anchorLinks.forEach(link => {
        link.removeEventListener('click', handleAnchorClick);
      });
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;