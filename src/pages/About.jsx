import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PageHeader from '../components/PageHeader';
import { FaLightbulb, FaHandshake, FaRocket } from 'react-icons/fa';
import people from '../assets/images/people.jpeg'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const values = [
    {
      icon: <FaLightbulb className="text-4xl" />,
      title: "Innovation",
      description: "We stay ahead of technological trends to deliver cutting-edge solutions.",
    },
    {
      icon: <FaHandshake className="text-4xl " />,
      title: "Partnership",
      description: "We build lasting relationships with our clients through trust and collaboration.",
    },
    {
      icon: <FaRocket className="text-4xl " />,
      title: "Excellence",
      description: "We strive for excellence in every project we undertake.",
    },
  ];

  return (
    <div>
      <PageHeader 
        title="About Us" 
        subtitle="Learn about our mission and values"
      />
      
      <div className="py-20 bg-gradient-to-b from-light dark:from-dark to-white dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 dark:text-white mb-4">
                MESH TECH DIGITAL was founded with a vision to bridge the gap between technology and business success. We understand that in today's digital age, having a strong online presence is crucial for any business to thrive.
              </p>
              <p className="text-gray-600 dark:text-white mb-4 ">
                Our team of experienced professionals combines creativity with technical expertise to deliver solutions that not only look great but also drive results. We take pride in our ability to understand our clients' unique needs and transform their vision into reality.
              </p>

              <p className="text-dark font-bold text-end mr-5 dark:text-white">
                - Founder & CEO
              </p>
              {/* <p className="text-dark font-bold text-end mr-3 dark:text-white">
                - RAHUL TIWARY
              </p> */}
            </div>
            <div className="relative">
              <img
                src={people}
                alt="Team collaboration"
                className="rounded-lg shadow-lg"
              />
            </div>
          </motion.div>

          <div className="mt-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-3xl font-bold text-center mb-12"
            >
              Our Values
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="text-center p-6 rounded-lg bg-white dark:bg-gray-900 shadow-md"
                >
                  <div className="text-primary dark:text-white flex justify-center  mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600 dark:text-white">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;