import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Layout, Server, Settings, Smartphone, Palette, Globe, Activity } from 'lucide-react';

const skills = [
  { name: 'Front-end Development', icon: Layout, level: 90 },
  { name: 'Back-end Development', icon: Server, level: 85 },
  { name: 'JavaScript', icon: Code, level: 95 },
  { name: 'React', icon: Code, level: 90 },
  { name: 'Node.js', icon: Settings, level: 85 },
  { name: 'Python', icon: Code, level: 85 },
  { name: 'Database Management', icon: Database, level: 80 },
  { name: 'Soccer Coaching', icon: Activity, level: 99 },
];

const services = [
  { name: 'Web Development', icon: Globe, description: 'Creating responsive and dynamic websites' },
  { name: 'UI/UX Design', icon: Palette, description: 'Designing intuitive and beautiful user interfaces' },
  { name: 'Full-Stack Development', icon: Code, description: 'End-to-end application development' },
  { name: 'Soccer Coaching', icon: Activity, description: 'Nurturing young soccer talent at PM Academy' },
];

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="section-container bg-gray-900">
      <h2 className="section-title">Skills & Services</h2>
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="fade-in"
        >
          <h3 className="text-2xl font-semibold mb-6 text-blue-400">Technical Skills</h3>
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center">
                <skill.icon className="w-6 h-6 text-blue-400 mr-4" />
                <div className="flex-grow">
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.5 }}
          className="fade-in"
        >
          <h3 className="text-2xl font-semibold mb-6 text-blue-400">Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md">
                <service.icon className="w-12 h-12 text-blue-400 mb-4" />
                <h4 className="text-xl font-semibold mb-2 text-gray-200">{service.name}</h4>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;