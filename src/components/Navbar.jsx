import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import ThemeToggle from './ThemeToggle';
import { useNavbarState } from '../hooks/useNavbarState';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isTransparent, shouldUseLightText, scrolled } = useNavbarState();

  // const links = [
  //   { path: '/', label: 'Home' },
  //   { path: '/services', label: 'Services' },
  //   { path: '/projects', label: 'Projects' },
  //   { path: '/about', label: 'About' },
  //   { path: '/contact', label: 'Contact' },
  // ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 dark:bg-dark/95 backdrop-blur-sm shadow-sm py-4' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <NavLink 
            to="/" 
            className={`text-2xl font-display font-bold transition-colors duration-300 ${
              shouldUseLightText
                ? 'text-white dark:text-white'
                : 'text-primary dark:text-white'
            }`}
          >
            MESH TECH DIGITAL
          </NavLink>

           {/* Desktop Menu */}
           <div className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className={`transition-colors duration-300 ${
                shouldUseLightText
                  ? 'text-white/80 hover:text-white dark:text-gray-300 dark:hover:text-white'
                  : 'text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white'
              }`}
            >
              Home
            </a>
            <a
              href="/services"
              className={`transition-colors duration-300 ${
                shouldUseLightText
                  ? 'text-white/80 hover:text-white dark:text-gray-300 dark:hover:text-white'
                  : 'text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white'
              }`}
            >
              Services
            </a>
            <a
              href="/projects"
              className={`transition-colors duration-300 ${
                shouldUseLightText
                  ? 'text-white/80 hover:text-white dark:text-gray-300 dark:hover:text-white'
                  : 'text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white'
              }`}
            >
              Projects
            </a>
            <a
              href="/about"
              className={`transition-colors duration-300 ${
                shouldUseLightText
                  ? 'text-white/80 hover:text-white dark:text-gray-300 dark:hover:text-white'
                  : 'text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white'
              }`}
            >
              About
            </a>
            <a
              href="/contact"
              className={`transition-colors duration-300 ${
                shouldUseLightText
                  ? 'text-white/80 hover:text-white dark:text-gray-300 dark:hover:text-white'
                  : 'text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white'
              }`}
            >
              Contact
            </a>
            <ThemeToggle />
            <a 
              href="/contact" 
              className={`btn-primary ${
                shouldUseLightText ? 'bg-white text-primary dark:text-white hover:bg-white/90' : ''
              }`}
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-colors ${
                shouldUseLightText
                  ? 'text-white hover:text-white/80'
                  : 'text-dark dark:text-white hover:text-primary dark:hover:text-primary'
              }`}
            >
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-white dark:bg-dark/95 border-t dark:border-gray-800 mt-2"
            >
              <div className="px-4 py-2 space-y-1">
                {/* Directly embedding anchor tags instead of using NavLink */}
                <a
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 px-4 rounded-lg ${
                    shouldUseLightText 
                      ? 'bg-primary/10 text-primary dark:bg-primary/20 dark:text-white' 
                      : 'text-dark dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                >
                  Home
                </a>
                <a
                  href="/services"
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 px-4 rounded-lg ${
                    shouldUseLightText 
                      ? 'bg-primary/10 text-primary dark:bg-primary/20 dark:text-white' 
                      : 'text-dark dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                >
                  Services
                </a>
                <a
                  href="/projects"
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 px-4 rounded-lg ${
                    shouldUseLightText 
                      ? 'bg-primary/10 text-primary dark:bg-primary/20 dark:text-white' 
                      : 'text-dark dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                >
                  Projects
                </a>
                <a
                  href="/about"
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 px-4 rounded-lg ${
                    shouldUseLightText 
                      ? 'bg-primary/10 text-primary dark:bg-primary/20 dark:text-white' 
                      : 'text-dark dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                >
                  About
                </a>
                <a
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 px-4 rounded-lg ${
                    shouldUseLightText 
                      ? 'bg-primary/10 text-primary dark:bg-primary/20 dark:text-white' 
                      : 'text-dark dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                >
                  Contact
                </a>
                <div className="pt-2">
                  <a href="/contact" className="btn-primary w-full text-center block">
                    Get Started
                  </a>
                </div>
              </div>
            </motion.div>
          )}
    </nav>
  );
};

export default Navbar;