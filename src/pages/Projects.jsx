import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PageHeader from '../components/PageHeader';
import chair from '../assets/images/chair.jpeg';
import laptop from '../assets/images/laptop.jpeg';
import mobile from '../assets/images/mobile.jpeg';
import doctor from '../assets/images/doctor.jpeg';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.01,
  });

  const projects = [
    {
      title: "E-commerce Platform",
      category: "Web Development",
      description: "A modern e-commerce solution with seamless user experience and secure payment integration.",
      image: chair,
      technologies: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Portfolio Website",
      category: "UI/UX Design",
      description: "Clean and professional portfolio for a creative agency with stunning animations.",
      image: laptop,
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
    },
    {
      title: "Mobile Banking App",
      category: "Mobile Development",
      description: "Secure and user-friendly mobile banking application with real-time transactions.",
      image: mobile,
      technologies: ["React Native", "Redux", "Firebase"],
    },
    {
      title: "Healthcare Platform",
      category: "Web Development",
      description: "Comprehensive healthcare management system for patients and doctors.",
      image: doctor,
      technologies: ["React", "Express", "PostgreSQL"],
    },
  ];

  return (
    <div>
      <PageHeader 
        title="Our Projects" 
        subtitle="Showcasing our best work and achievements"
      />
      
      <div className="py-20 bg-gradient-to-b from-light dark:from-dark to-white dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 1, y: 0 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="relative h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-white mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-100 dark:bg-gray-800 text-dark dark:text-white px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;