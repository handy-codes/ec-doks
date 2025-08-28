// components/Footer.tsx
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">EC DOKS</h3>
            <p className="mb-4">Your trusted partner for premium hotel supplies across Nigeria.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Products</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Our Products</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Chafing Gas</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Steak Sugar</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Liquid Soap</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Wine & Beverages</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Beddings</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-blue-500 mr-3" />
                <span className="text-gray-400">123 Doks Way Lagos Island, Nigeria</span>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-blue-500 mr-3" />
                <span className="text-gray-400">+234 806 879 0473</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-blue-500 mr-3" />
                <span className="text-gray-400">info@ecdoks.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} EC DOKS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;