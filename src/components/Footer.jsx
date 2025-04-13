import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../assets/images/darkImg.png';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-dark pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description Column */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex flex-col items-start">
               <h1 className="text-2xl font-bold">MeshTech Digital</h1>
              <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-md">
                Empowering businesses through innovative digital solutions and cutting-edge technology.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Services', 'Projects', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`/${item.toLowerCase()}`} 
                    className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact Us</h3>
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-400">
              info@meshtechdigital.com
              </p>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/share/1BtrUWsCFQ/" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                  <FaFacebook size={20} />
                </a>
                {/* <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                  <FaTwitter size={20} />
                </a> */}
                <a href="https://www.instagram.com/meshtechdigital?igsh=aG1la2J1NW9naWx2" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                  <FaInstagram size={20} />
                </a>
                <a href="https://www.linkedin.com/company/mesh-tech-digital" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Logo Section */}
        <div className="pt-8 mt-8">
          <div className="flex flex-col items-center justify-center">
            <img 
              src={logo}
              alt="MeshTech Digital" 
              className="h-40 w-auto mb-4 opacity-80 hover:opacity-100 transition-all duration-300 transform hover:scale-105"
            />
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
              © {new Date().getFullYear()} MeshTech Digital. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;