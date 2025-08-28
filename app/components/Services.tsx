// components/Services.tsx
'use client';

import { motion } from 'framer-motion';
import { forwardRef } from 'react';

interface ServicesProps {}

const Services = forwardRef<HTMLDivElement, ServicesProps>((props, ref) => {
  const services = [
    {
      title: 'Chafing Gas Supply',
      description: 'High-quality chafing gas for buffet sets and food warming.',
      icon: '🔥',
    },
    {
      title: 'Steak Sugar',
      description: 'Premium white and brown steak sugar for professional cooking.',
      icon: '🍚',
    },
    {
      title: 'Liquid Soap & Fragrance',
      description: 'Elegant liquid soap and fragrance solutions for hotel bathrooms.',
      icon: '🧴',
    },
    {
      title: 'Wine & Beverages',
      description: 'Curated selection of wines and beverages for your hotel bar.',
      icon: '🍷',
    },
    {
      title: 'Beddings',
      description: 'Luxurious beddings and linens for a comfortable guest experience.',
      icon: '🛏️',
    },
    {
      title: 'Custom Solutions',
      description: 'Tailored supply solutions to meet your specific hotel needs.',
      icon: '🔧',
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

Services.displayName = 'Services';

export default Services;