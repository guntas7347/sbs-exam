import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t-4 border-green-500 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold mb-4">About SBSSU</h3>
            <p className="text-sm leading-relaxed">
              Premier educational institution dedicated to academic excellence and student development.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-orange-400">Admissions</a></li>
              <li><a href="#" className="hover:text-orange-400">Academics</a></li>
              <li><a href="#" className="hover:text-orange-400">Career Services</a></li>
              <li><a href="#" className="hover:text-orange-400">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-orange-500" />
                <span>+91-123-456-7890</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-orange-500" />
                <span>info@SBSSU.edu</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="text-orange-500 mt-1" />
                <span>123 SBSSU Avenue, City, State 12345</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2025 SBSSU Portal. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-orange-400">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-orange-400">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-orange-400">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
