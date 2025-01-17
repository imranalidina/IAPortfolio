import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Instagram, Github, Facebook } from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="section-container bg-gray-800">
      <h2 className="section-title">Get in Touch</h2>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        {/* Contact Information Card */}
        <div className="bg-gray-700 rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-blue-400 text-center">Contact Information</h3>
          <div className="space-y-6">
            <div className="flex items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-600 transition-colors duration-300">
              <Mail className="w-8 h-8 text-blue-400 mr-4" />
              <a 
                href="mailto:imran.alidina01@gmail.com"
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-lg"
                title="Click to send an email"
              >
                imran.alidina01@gmail.com
              </a>
            </div>
            <div className="flex items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-600 transition-colors duration-300">
              <Phone className="w-8 h-8 text-blue-400 mr-4" />
              <a 
                href="tel:+16477860270"
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-lg"
                title="Click to call"
              >
                +1 (647) 786-0270
              </a>
            </div>
            <div className="flex items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-600 transition-colors duration-300">
              <MapPin className="w-8 h-8 text-blue-400 mr-4" />
              <span className="text-gray-300 text-lg">Richmond Hill, ON, Canada</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-8">
            <h4 className="text-xl font-semibold mb-6 text-blue-400 text-center">Follow Me</h4>
            <div className="flex justify-center space-x-8">
              <a 
                href="https://instagram.com/imran.alidina" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative"
              >
                <div className="p-4 bg-gray-800 rounded-lg hover:bg-gray-600 transition-colors duration-300">
                  <Instagram className="w-8 h-8 text-blue-400 group-hover:text-blue-300" />
                </div>
                <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-gray-300 px-3 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                  Instagram: @imran.alidina
                </span>
              </a>
              <a 
                href="https://github.com/imranalidina" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative"
              >
                <div className="p-4 bg-gray-800 rounded-lg hover:bg-gray-600 transition-colors duration-300">
                  <Github className="w-8 h-8 text-blue-400 group-hover:text-blue-300" />
                </div>
                <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-gray-300 px-3 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                  GitHub Projects
                </span>
              </a>
              <a 
                href="https://www.facebook.com/share/1C3T8TNpzK/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative"
              >
                <div className="p-4 bg-gray-800 rounded-lg hover:bg-gray-600 transition-colors duration-300">
                  <Facebook className="w-8 h-8 text-blue-400 group-hover:text-blue-300" />
                </div>
                <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-gray-300 px-3 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                  Facebook Profile
                </span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;