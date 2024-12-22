import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PageHeader from '../components/PageHeader';
import { FaCode, FaPaintBrush, FaChartLine, FaMobile, FaServer, FaSearch } from 'react-icons/fa';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.01,
  });

  const services = [
    {
      icon: <FaCode />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies and best practices.",
      features: ["Responsive Design", "Performance Optimization", "SEO-friendly Structure"],
    },
    {
      icon: <FaPaintBrush />,
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces that enhance user experience and engagement.",
      features: ["User Research", "Wireframing", "Prototype Development"],
    },
    {
      icon: <FaChartLine />,
      title: "Digital Marketing",
      description: "Strategic marketing solutions to grow your online presence and reach your target audience.",
      features: ["Social Media Marketing", "Content Strategy", "Email Campaigns"],
    },
    {
      icon: <FaMobile />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android devices.",
      features: ["Cross-platform Development", "Native Apps", "App Store Optimization"],
    },
    {
      icon: <FaServer />,
      title: "Backend Development",
      description: "Robust and scalable server-side solutions to power your applications.",
      features: ["API Development", "Database Design", "Cloud Integration"],
    },
    {
      icon: <FaSearch />,
      title: "SEO Services",
      description: "Improve your search engine rankings and increase organic traffic.",
      features: ["Keyword Research", "On-page SEO", "Technical SEO"],
    },
  ];

  return (
    <div>
      <PageHeader 
        title="Our Services" 
        subtitle="Comprehensive digital solutions for your business"
      />
      
      <div className="py-20 bg-gradient-to-b from-light dark:from-dark to-white dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {services.map((service, index) => (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 1, y: 0 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow "
              >
                <div className="text-primary dark:text-white text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-white mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600 dark:text-white">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;