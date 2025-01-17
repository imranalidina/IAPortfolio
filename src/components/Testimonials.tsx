import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Mother of a 13-Year-old Player',
    position: 'PM Academy',
    content: 'We like the way the coaches are putting in full dedication and attention to the kids. Our kids are getting a lot of encouragement from the coaches. They feel enthusiastic to go to the practice. We also like the way the coaches are teaching the kids.',
  },
  {
    name: 'Mother of a 5 & 9-Year-old Player',
    position: 'PM Academy',
    content: 'Salam Imran, well done on conducting another season! My feedback is short and to the point. I have been bringing my boys since you started 2 summers ago and I found this season the most challenging one to come consistently. 2 reasons: the location was too far and the timing was too late, specially 9-12 age. I think many parents would rather pay 50-60 dollars more but have it in more convenient location, and not too late. Other than that you have it all I shall say. Thanks!',
  },
  {
    name: 'Father of a 7-Year-old Player',
    position: 'PM Academy',
    content: 'My son loves coming each week to practice with his friends and coaches. The coaches really know how to engage the players. I would suggest to have half an hour for skills and half an hour for a friendly match between the kids. I would also suggest the weekend sessions to be a bit earlier maybe 11am. Keep up the great work!'
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
      <h2 className="section-title">Testimonials @ PM Academy</h2>
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