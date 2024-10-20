import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="section-container bg-gray-800">
      <h2 className="section-title">Get in Touch</h2>
      <div ref={ref} className="flex flex-col md:flex-row gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 fade-in"
        >
          <h3 className="text-2xl font-semibold mb-4 text-blue-400">Contact Information</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-blue-400 mr-4" />
              <span className="text-gray-300">imran@pmacademy.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-blue-400 mr-4" />
              <span className="text-gray-300">+1 (123) 456-7890</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-6 h-6 text-blue-400 mr-4" />
              <span className="text-gray-300">Vancouver, BC, Canada</span>
            </div>
          </div>
          <div className="mt-8">
            <h4 className="text-xl font-semibold mb-4 text-blue-400">Follow Me</h4>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/in/imranalidina" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://github.com/imranalidina" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://twitter.com/imranalidina" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 fade-in"
        >
          <h3 className="text-2xl font-semibold mb-4 text-blue-400">Send Me a Message</h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
              <input type="text" id="name" name="name" className="w-full bg-gray-700 text-gray-300 border border-gray-600 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full bg-gray-700 text-gray-300 border border-gray-600 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
              <textarea id="message" name="message" rows={4} className="w-full bg-gray-700 text-gray-300 border border-gray-600 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500" required></textarea>
            </div>
            <button type="submit" className="btn-primary">Send Message</button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;