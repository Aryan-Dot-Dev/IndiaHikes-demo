import React from 'react';
import FloatingIcon from './FloatingIcon';
import { Mountain, Map, Compass, Navigation, Route, Award, Phone, Users, Camera, Play, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import { ASSET } from '../utils/assetBase';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Upcoming Treks', href: '#' },
    { label: 'FAQs', href: '#' },
    { label: 'Cancellation Policy', href: '#' },
    { label: 'About Us', href: '#' },
    { label: 'Work with Us', href: '#' },
    { label: 'Our Sustainability Practices', href: '#' }
  ];

  const offices = [
    {
      name: 'Bengaluru Office',
      address: '139, Defence Colony Road, Defence Layout, Sahakar Nagar, Bengaluru, Karnataka - 560092'
    },
    {
      name: 'Dehradun Office',
      address: 'Mohabbewala, Titan Road, Near Titan Factory, Chandramani Khalsa Dehradun - 248002'
    }
  ];

  return (
    <footer className="bg-linear-to-b from-black/50 to-black text-gray-300 border-t border-gray-700/30 relative overflow-hidden">
      {/* Premium background decorative elements - responsive sizing */}
      <div className="absolute top-0 left-0 w-48 h-48 sm:w-96 sm:h-96 bg-[#EFB71A]/5 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-96 sm:h-96 bg-[#0CE88C]/5 rounded-full blur-3xl opacity-50" />
      <div className="absolute top-1/3 right-1/3 w-36 h-36 sm:w-72 sm:h-72 bg-[#0CE88C]/4 rounded-full blur-2xl opacity-40" />
      <div className="absolute bottom-1/3 left-1/3 w-28 h-28 sm:w-56 sm:h-56 bg-[#EFB71A]/3 rounded-full blur-2xl opacity-35" />
      <div className="absolute inset-0 bg-linear-to-t from-transparent via-[#EFB71A]/1 to-transparent opacity-10" />

      {/* Floating travel icons - hide on mobile */}
      <FloatingIcon icon={Mountain} className="hidden sm:block top-20 left-1/4" animationDelay={1} animationDuration={35} />
      <FloatingIcon icon={Map} className="hidden sm:block bottom-32 right-1/4" animationDelay={4} animationDuration={31} />
      <FloatingIcon icon={Compass} className="hidden sm:block top-1/2 right-8" animationDelay={2} animationDuration={33} />
      <FloatingIcon icon={Navigation} className="hidden sm:block bottom-20 left-12" animationDelay={3} animationDuration={29} />
      <FloatingIcon icon={Route} className="hidden sm:block top-32 right-1/3" animationDelay={5} animationDuration={34} />
      <FloatingIcon icon={Award} className="hidden sm:block bottom-40 right-16" animationDelay={1.5} animationDuration={30} />

      {/* Partnership Banner - responsive text and spacing */}
      <div className="relative bg-linear-to-r from-[#EFB71A]/10 via-gray-900/50 to-[#0CE88C]/10 border-b border-gray-700/30 px-4 py-6 sm:py-8 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
            <img
              src={`${ASSET}assets/imf.png`}
              alt="IMF Logo"
              className="h-8 sm:h-12 w-auto filter brightness-110 hover:brightness-125 transition-all duration-300"
            />
            <div className="hidden sm:block h-8 w-px bg-gray-700/50" />
            <div>
              <p className="font-elms text-base sm:text-lg">
                <span className="text-[#EFB71A] font-bold">Officially Partnered with IMF</span>
              </p>
              <p className="text-xs text-gray-400 mt-1">Indian Mountaineering Federation</p>
            </div>
          </div>
          <p className="text-sm sm:text-base text-gray-300 px-4">
            Central Govt. Employees can avail <span className="text-[#0CE88C] font-semibold">Special Casual Leave</span> on all treks.{' '}
            <a href="#" className="text-[#EFB71A] hover:text-[#0CE88C] transition-colors duration-300 font-semibold block sm:inline">
              Learn more →
            </a>
          </p>
          <div className="h-1 w-24 sm:w-32 bg-linear-to-r from-[#EFB71A]/0 via-[#EFB71A] to-[#EFB71A]/0 rounded-full mx-auto mt-3 sm:mt-4 opacity-60" />
        </div>
      </div>

      {/* Main Footer Content - responsive grid and spacing */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12">
          {/* Quick Links */}
          <div>
            <h4 className="font-elms font-bold text-base sm:text-lg text-white mb-4 sm:mb-6 flex items-center">
              <span className="h-1 w-6 sm:w-8 bg-linear-to-r from-[#EFB71A] to-[#0CE88C] mr-2 sm:mr-3" />
              Quick Links
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#EFB71A] transition-colors duration-300 text-sm font-elms group block"
                  >
                    <span className="group-hover:translate-x-1 inline-block transition-transform duration-300">→</span> {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-elms font-bold text-base sm:text-lg text-white mb-4 sm:mb-6 flex items-center">
              <span className="h-1 w-6 sm:w-8 bg-linear-to-r from-[#EFB71A] to-[#0CE88C] mr-2 sm:mr-3" />
              Contact Us
            </h4>
            <div className="space-y-3 sm:space-y-4 text-sm font-elms">
              <div>
                <a
                  href="tel:08046801269"
                  className="text-gray-400 hover:text-[#EFB71A] transition-colors duration-300 flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  080 468 01269
                </a>
              </div>
              <div>
                <p className="text-gray-400 text-xs sm:text-sm">Mon - Fri: 10 AM - 6 PM</p>
                <p className="text-gray-400 text-xs sm:text-sm">Sat: 10 AM - 5 PM</p>
                <p className="text-gray-500 text-xs">(Closed on Sundays & Public Holidays)</p>
              </div>
            </div>
          </div>

          {/* Offices - responsive address formatting */}
          <div>
            <h4 className="font-elms font-bold text-base sm:text-lg text-white mb-4 sm:mb-6 flex items-center">
              <span className="h-1 w-6 sm:w-8 bg-linear-to-r from-[#EFB71A] to-[#0CE88C] mr-2 sm:mr-3" />
              Our Offices
            </h4>
            <ul className="space-y-4">
              {offices.map((office, index) => (
                <li key={index} className="text-sm font-elms">
                  <p className="text-[#EFB71A] font-semibold mb-1">{office.name}</p>
                  <p className="text-gray-400 text-xs leading-relaxed break-words">{office.address}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Legal */}
          <div>
            <h4 className="font-elms font-bold text-base sm:text-lg text-white mb-4 sm:mb-6 flex items-center">
              <span className="h-1 w-6 sm:w-8 bg-linear-to-r from-[#EFB71A] to-[#0CE88C] mr-2 sm:mr-3" />
              Follow Us
            </h4>
            <div className="flex gap-2 sm:gap-3 mb-6 sm:mb-8">
              <button className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gray-900 hover:bg-[#EFB71A] hover:text-black transition-all duration-300 flex items-center justify-center">
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gray-900 hover:bg-[#0CE88C] hover:text-black transition-all duration-300 flex items-center justify-center">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gray-900 hover:bg-[#EFB71A] hover:text-black transition-all duration-300 flex items-center justify-center">
                <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gray-900 hover:bg-[#0CE88C] hover:text-black transition-all duration-300 flex items-center justify-center">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            {/* Legal Links */}
            <div className="space-y-2 text-xs">
              <a href="#" className="block text-gray-400 hover:text-[#EFB71A] transition-colors duration-300 font-elms">
                Privacy Policy
              </a>
              <a href="#" className="block text-gray-400 hover:text-[#EFB71A] transition-colors duration-300 font-elms">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-linear-to-r from-transparent via-gray-700/50 to-transparent my-6 sm:my-8" />

        {/* Footer Bottom - responsive text */}
        <div className="text-center">
          <p className="text-gray-500 text-xs sm:text-sm font-elms px-4">
            © {currentYear} IndiaHikes. All rights reserved. |
            <span className="text-[#EFB71A] ml-2">Premium Trekking Experiences</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
