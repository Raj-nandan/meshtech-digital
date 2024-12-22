import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PageHeader from '../components/PageHeader';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';





const Contact = () => {

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({ type: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: 'error',
        message: 'Email service configuration is missing.'
      });
      return;
    }

    try {
      await emailjs.sendForm(
        serviceId,
        templateId,
        e.target,
        { publicKey }
      );
      
      setStatus({
        type: 'success',
        message: 'Message sent successfully!'

      });
      alert('Message sent successfully!');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again.'
      });
      console.error('Email error:', error);
    }
  };








  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const form = e.target;

  //   const YOUR_SERVICE_ID = process.env.REACT_APP_YOUR_SERVICE_ID;
  //   const YOUR_TEMPLATE_ID = process.env.REACT_APP_YOUR_TEMPLATE_ID;
  //   const YOUR_USER_ID = process.env.REACT_APP_YOUR_PUBLIC_KEY;

  //   if (!YOUR_SERVICE_ID || !YOUR_TEMPLATE_ID || !YOUR_USER_ID) {
  //     console.error('One or more environment variables are not set.');
  //   }

  //   console.log(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, YOUR_USER_ID);

  //   emailjs
  //     .sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form, {
  //       publicKey: YOUR_USER_ID,
  //     })
  //     .then(
  //       () => {
  //         console.log('SUCCESS!');
  //       },
  //       (error) => {
  //         console.log('FAILED...', error.text);
  //       },
  //     );
  // };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: "Phone",
      details: "+91 7654680176",
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      details: "rahul@meshtechdigital.com",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Address",
      details: "Garia Kolkata 700152",
    },
  ];

  return (
    <div>
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with our team"
      />

      <div className="py-20 bg-gradient-to-b from-light dark:from-dark to-white dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 1, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center p-6 bg-white dark:bg-dark rounded-lg shadow-md"
              >
                <div className="text-primary dark:text-white text-3xl mb-4">{info.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
                <p className="text-gray-600 dark:text-white">{info.details}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            ref={ref}
            initial={{ opacity: 1, y: 0 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto bg-white dark:bg-gradient-to-b from-light dark:from-dark to-white dark:to-gray-900 rounded-lg shadow-md p-8"
          >
            <h2 className="text-2xl font-bold mb-6 text-center">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-white mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border dark:bg-dark border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-white mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border dark:bg-dark border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-white mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border dark:bg-dark border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-white mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border dark:bg-dark border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-secondary text-white font-semibold py-3 px-6 rounded-md transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;