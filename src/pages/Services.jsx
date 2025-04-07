import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PageHeader from '../components/PageHeader';
import { FaCode, FaPaintBrush, FaChartLine, FaServer, FaVideo, FaBullhorn, FaSearch, FaShareAlt, FaMoneyBillWave, FaShoppingCart } from 'react-icons/fa';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.01,
  });

  const services = [
    {
      icon: <FaCode />,
      title: "Website & App Development",
      description: "Custom websites and web applications built with modern technologies and best practices.",
      features: ["Responsive Design", "Performance Optimization", "SEO-friendly Structure"],
    },
    {
      icon: <FaPaintBrush />,
      title: "Graphic Designing", 
      description: "Creative graphic design solutions that effectively communicate your brand's message and engage your audience.", // {{ edit_2 }}
      features: ["Logo Design", "Brand Identity", "Marketing Materials", "Social Media Graphics"], // {{ edit_3 }}
    },
    {
      icon: <FaChartLine />,
      title: "Marketing Consultancy",
      description: "Expert guidance and strategies to enhance your marketing efforts and drive business growth.", // {{ edit_2 }}
      features: ["Market Analysis", "Brand Strategy", "Campaign Management", "Performance Tracking"], // {{ edit_3 }}
    },
    {
      icon: <FaVideo />,
      title: "Content Creation",
      description: "Engaging and high-quality content tailored to your audience, including articles, blogs, and multimedia.", // {{ edit_2 }}
      features: ["Blog Writing", "Video Production", "Social Media Content", "Graphic Design"], // {{ edit_3 }}
    },
    {
      icon: <FaBullhorn />, 
      title: "Traditional Marketing", 
      description: "Effective marketing strategies that leverage traditional media channels to reach your target audience.", // {{ edit_2 }}
      features: ["Print Advertising", "Television Campaigns", "Radio Promotions", "Direct Mail"], // {{ edit_3 }}
    },
    {
      icon: <FaSearch />, 
      title: "SEO & SEM",
      description: "Comprehensive strategies to enhance your online visibility through search engine optimization and search engine marketing.", // {{ edit_2 }}
      features: ["Keyword Research", "On-page SEO", "Pay-Per-Click Advertising", "Performance Tracking"], // {{ edit_3 }}
    },
    {
      icon: <FaShareAlt />, 
      title: "Social Media Marketing", 
      description: "Strategic social media campaigns to enhance brand awareness and engage with your audience.", // {{ edit_2 }}
      features: ["Content Creation", "Audience Engagement", "Analytics and Reporting", "Ad Campaign Management"], // {{ edit_3 }}
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Pay Per Click", 
      description: "Targeted advertising strategies to maximize ROI through effective PPC campaigns.", // {{ edit_2 }}
      features: ["Keyword Targeting", "Ad Creation", "Performance Tracking", "Budget Management"], // {{ edit_3 }}
    },
    {
      icon: <FaServer />, 
      title: "Backend Development", 
      description: "Robust and scalable server-side solutions to power your applications.", // {{ edit_2 }}
      features: ["API Development", "Database Design", "Cloud Integration"], // {{ edit_3 }}
    },
    {
      icon: <FaShoppingCart/>, 
      title: "Ecommerce Website", 
      description: "Comprehensive ecommerce solutions including shopping cart integration, payment gateway setup, and user-friendly interfaces.", // {{ edit_2 }}
      features: ["Shopping Cart Integration", "Payment Gateway Setup", "User-Friendly Interface", "Inventory Management"], // {{ edit_3 }}
    },
    {
      icon: <FaBullhorn />, 
      title: "Flipkart & Amazon Ads", 
      description: "Targeted advertising strategies for Flipkart and Amazon to maximize product visibility and sales.", // {{ edit_2 }}
      features: ["Product Listing Optimization", "Ad Campaign Management", "Performance Analytics", "Budget Management"], // {{ edit_3 }}
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