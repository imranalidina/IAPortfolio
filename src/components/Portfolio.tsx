import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'PM Academy Website',
    description: 'A professional website for PM Academy, showcasing our soccer coaching programs and philosophy.',
    image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=700,fit=crop,q=95/YKbPk74G7OuRzBXv/screenshot-2024-03-25-at-6.38.03a-pm-Y4LpzPDqrVSj8XXJ.png',
    technologies: ['React', 'Tailwind CSS', 'Node.js'],
    liveLink: 'https://projectmbappeacademy.com/',
    githubLink: 'https://github.com/imranalidina/pm-academy-website',
  },
  {
    title: 'Soccer Training App',
    description: 'A mobile app for PM Academy students to track their progress and access training materials.',
    image: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    technologies: ['React Native', 'Firebase', 'Redux'],
    liveLink: 'https://play.google.com/store/apps/details?id=com.pmacademy.trainingapp',
    githubLink: 'https://github.com/imranalidina/soccer-training-app',
  },
  // Add more projects as needed
];

const Portfolio: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="portfolio" className="section-container bg-gray-800">
      <h2 className="section-title">My Portfolio</h2>
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-700 rounded-lg overflow-hidden shadow-lg fade-in"
          >
            <div className="h-48 bg-gray-800 flex items-center justify-center">
              <img src={project.image} alt={project.title} className="max-h-full max-w-full object-contain" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-blue-400">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-gray-600 text-gray-200 px-2 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                >
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                >
                  <Github className="w-4 h-4 mr-1" />
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;