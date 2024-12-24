import { motion } from 'framer-motion';
import { HiArrowRight, HiCode, HiLightningBolt, HiSparkles } from 'react-icons/hi';
import ClientReviews from '../components/ClientReviews';
import CompanyClients from '../components/CompanyClients';

const Home = () => {
  const features = [
    {
      icon: <HiCode />,
      title: "End-to-End Development",
      description: "Comprehensive website and app development with backend integration for seamless functionality.",
    },
    {
      icon: <HiSparkles />,
      title: "Creative & Strategic Design",
      description: "Graphic designing, content creation, and modern designs tailored to elevate your brand identity.",
    },
    {
      icon: <HiLightningBolt />,
      title: "Targeted Marketing Solutions",
      description: "Expertise in SEO, SEM, social media, and pay-per-click campaigns for impactful outreach.",
    },
  ];

  return (
    <div className="relative overflow-hidden">

      <section className="min-h-screen flex items-center relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-primary dark:text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Crafting Digital 
                <span className="text-accent block">Excellence</span>
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Transform your ideas into powerful digital solutions with our expert web development and design services.
              </motion.p>
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <a href="/contact" className="btn-primary inline-flex items-center group">
                  Start Your Project
                  <HiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="/projects" className="btn-secondary">
                  View Our Work
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10">
                <motion.div
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-soft p-6 md:p-8"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3"
                    alt="Digital Solutions"
                    className="rounded-lg w-full"
                  />
                  <motion.div 
                    className="absolute -bottom-4 -right-4 bg-accent text-white px-6 py-3 rounded-lg"
                    whileHover={{ scale: 1.05 }}
                  >
                    <p className="font-display font-bold">Expertise Meets Fresh Perspectives</p>
                  </motion.div>
                </motion.div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl transform rotate-3 -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-light dark:from-dark to-white dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-primary dark:text-white mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">We deliver excellence in every project</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="card group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-accent text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Reviews Section */}
      <ClientReviews />

      {/* Company Clients Section */}
      <CompanyClients />
    </div>
  );
};

export default Home;