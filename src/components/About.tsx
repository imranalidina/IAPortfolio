import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Briefcase, GraduationCap, Activity } from 'lucide-react';

const About: React.FC = () => {
  // ... (rest of the component remains the same)

  const timelineItems = [
    { icon: GraduationCap, year: 'Current', title: 'Computer Science Degree', description: 'Final year student' },
    { icon: Activity, year: 'Current', title: 'PM Academy', description: 'Founder and Soccer Coach' },
    { icon: Code, year: 'Current', title: 'Web Developer', description: 'Freelance and personal projects' },
  ];

  // ... (rest of the component remains the same)
};

export default About;