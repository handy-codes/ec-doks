// components/TrustedBy.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const TrustedBy = () => {
  const companies = [
    { name: 'Hotel Luxe', logo: 'https://via.placeholder.com/150x80?text=Hotel+Luxe' },
    { name: 'Grand Resort', logo: 'https://via.placeholder.com/150x80?text=Grand+Resort' },
    { name: 'Premier Inn', logo: 'https://via.placeholder.com/150x80?text=Premier+Inn' },
    { name: 'Eko Hotels', logo: 'https://via.placeholder.com/150x80?text=Eko+Hotels' },
    { name: 'Transcorp Hilton', logo: 'https://via.placeholder.com/150x80?text=Transcorp' },
    { name: 'Sheraton', logo: 'https://via.placeholder.com/150x80?text=Sheraton' },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Trusted By Top Hotels</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {companies.map((company, index) => (
            <motion.div
              key={index}
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative h-12 w-32">
                <Image 
                  src={company.logo} 
                  alt={company.name}
                  fill
                  className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;