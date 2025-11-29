import React from 'react';
import { Home, ShoppingBag, Briefcase, Sparkles, User } from 'lucide-react';
import { ASSET } from '../utils/assetBase';

const Header = () => {
  return (
    <>
      {/* Desktop Header */}
      <header className="hidden md:block sticky top-0 z-50 bg-[#0b1520]/95 backdrop-blur-md border-b border-gray-700/30">
        <div className="h-14 sm:h-16 lg:h-20 mx-2 sm:mx-3 my-2 sm:my-3 rounded-xl sm:rounded-2xl bg-gradient-to-r from-gray-900/60 to-gray-800/40 text-white flex items-center justify-between px-3 sm:px-4 lg:px-6 border border-gray-700/50 shadow-lg">
          <div className='flex items-center gap-2 sm:gap-3'>
            <img src={`${ASSET}assets/logo-white-bg.svg`} alt="IndiaHikes" className='h-8 sm:h-10 lg:h-14 rounded-md sm:rounded-lg hover:scale-105 transition-transform duration-300' />
          </div>

          {/* Desktop Navigation */}
          <nav className='hidden md:block'>
            <ul className='flex gap-6 lg:gap-8 font-elms'>
              <li className='hover:text-[#EFB71A] transition-colors duration-300 cursor-pointer'>Shop</li>
              <li className='hover:text-[#0CE88C] transition-colors duration-300 cursor-pointer'>Rent</li>
              <li className='hover:text-[#EFB71A] transition-colors duration-300 cursor-pointer'>Careers</li>
              <li className='hover:text-[#0CE88C] transition-colors duration-300 cursor-pointer'>Surprise Me</li>
            </ul>
          </nav>

          {/* Desktop Login Button */}
          <div className='hidden md:block login-btn'>
            <span className='font-elms font-semibold'>Sign up</span>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-t from-gray-900/95 to-gray-800/90 backdrop-blur-lg border-t border-gray-700/30">
        <div className="flex items-center justify-around px-2 py-3">
          <button className="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-gray-700/50 transition-colors duration-300 min-w-0 flex-1">
            <Home className="w-5 h-5 text-gray-300" />
            <span className="text-xs font-elms text-gray-300">Home</span>
          </button>
          <button className="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-gray-700/50 transition-colors duration-300 min-w-0 flex-1">
            <ShoppingBag className="w-5 h-5 text-gray-300" />
            <span className="text-xs font-elms text-gray-300">Shop</span>
          </button>
          <button className="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-gray-700/50 transition-colors duration-300 min-w-0 flex-1">
            <Briefcase className="w-5 h-5 text-gray-300" />
            <span className="text-xs font-elms text-gray-300">Rent</span>
          </button>
          <button className="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-gray-700/50 transition-colors duration-300 min-w-0 flex-1">
            <Sparkles className="w-5 h-5 text-gray-300" />
            <span className="text-xs font-elms text-gray-300">Surprise</span>
          </button>
          <button className="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-gray-700/50 transition-colors duration-300 min-w-0 flex-1">
            <User className="w-5 h-5 text-gray-300" />
            <span className="text-xs font-elms text-gray-300">Profile</span>
          </button>
        </div>
      </nav>
    </>
  )
}

export default Header