import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'John Doe',
    position: 'CEO, Tech Innovators',
    content: 'Working with this developer was an absolute pleasure. Their expertise in web development and attention to detail resulted in a product that exceeded our expectations.',
  },
  {
    name: 'Jane Smith',
    position: 'Marketing Director, Global Solutions',
    content: 'The website created for our company has significantly improved our online presence. The developer\'s ability to understand our needs and translate them into a functional, beautiful site is commendable.',
  },
  {
    name: 'Mike Johnson',
    position: 'Founder, StartUp Hub',
    content: 'I was impressed by the developer\'s professionalism and technical skills. They delivered a complex web application on time and within budget, which has been crucial to our startup\'s success.',
  },
];

const Testimonials: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <section id="testimonials" className="section-container bg-gray-900">
      <h2 className="section-title">Testimonials</h2>
      <div ref={ref} className="max-w-3xl mx-auto fade-in">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="px-4"
            >
              <div className="bg-gray-800 p-8 rounded-lg shadow-md">
                <Quote className="w-12 h-12 text-green-400 mb-4 mx-auto" />
                <p className="text-gray-300 text-lg mb-6 italic">{testimonial.content}</p>
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <h4 className="font-semibold text-lg text-blue-400">{testimonial.name}</h4>
                    <p className="text-gray-400">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;