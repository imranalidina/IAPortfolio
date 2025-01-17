import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'PM Academy Website',
    description: 'PM Academy is a soccer organization dedicated to coaching players aged 4-15 while also hosting a competitive mens league. We focus on developing skills, fostering passion, and building a strong soccer community for all ages.',
    image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=700,fit=crop,q=95/YKbPk74G7OuRzBXv/screenshot-2024-03-25-at-6.38.03a-pm-Y4LpzPDqrVSj8XXJ.png',
    technologies: [],
    liveLink: 'https://projectmbappeacademy.com/',
    githubLink: '',
  },
  {
    title: 'Fantasy Application - PM Men’s League',
    description: 'A fantasy application for PM Men’s League players to earn points based on wins, losses, and ties with their 6-player squads. Players compete every season, and their progress is updated weekly.',
    image: 'src/assets/IMG_0022.png', // Replace this with the actual URL of the image you provided
    technologies: ['React', 'Firebase', 'Framer Motion'],
    liveLink: 'https://pm-mens-league-draft.netlify.app/',
    githubLink: 'https://github.com/imranalidina/PM-DRAFT',
  },
  {
    title: 'Sudoku Puzzle Solver',
    description: 'An interactive web application that solves Sudoku puzzles instantly, showcasing advanced algorithmic problem-solving and clean user interface design.',
    image: 'https://img.freepik.com/free-vector/hand-drawn-flat-design-sudoku-game-design_23-2149288592.jpg?w=900&t=st=1658741558~exp=1658742158~hmac=50fc21a64d0aecadccb5de6150d4375aa5392b63fc0fbee94729bad38c240d57',
    technologies: ['React', 'Tailwind CSS', 'JavaScript'],
    liveLink: 'https://sudoku-puzzle-solver-ia.netlify.app/',
    githubLink: 'https://github.com/imranalidina/soccer-training-app',
  },
  // Add more projects as needed
];

const Portfolio: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleProjectClick = (url: string) => {
    window.open(url, '_blank', 'noopener noreferrer');
  };

  const handleGithubClick = (e: React.MouseEvent, url: string) => {
    e.stopPropagation(); // Prevent the parent click event from firing
    window.open(url, '_blank', 'noopener noreferrer');
  };

  return (
    <section id="portfolio" className="section-container bg-gray-800 py-12">
      <h2 className="section-title text-center text-3xl font-bold text-blue-400 mb-8">My Portfolio</h2>
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-700 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 duration-300 flex flex-col"
            onClick={() => handleProjectClick(project.liveLink)}
          >
            <div className={`bg-gray-800 flex items-center justify-center p-6 
              ${project.title === "Fantasy Application - PM Men's League"
                ? 'h-80 sm:h-96 md:h-[420px]'
                : 'h-74 sm:h-72 md:h-80'
              }`}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className={`w-full h-full object-cover ${project.title === "Fantasy Application - PM Men's League" ? 'object-contain' : 'object-cover'}`} 
              />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">{project.title}</h3>
              <p className="text-gray-300 mb-4 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-gray-600 text-gray-200 px-2 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between mt-auto">
                <span className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300">
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Visit Page
                </span>
                {project.githubLink && (
                  <button
                    onClick={(e) => handleGithubClick(e, project.githubLink)}
                    className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Github
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;