// components/Careers.tsx
'use client';

import { motion } from 'framer-motion';
import { forwardRef } from 'react';

interface CareersProps {}

const Careers = forwardRef<HTMLDivElement, CareersProps>((_, ref) => {
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Join Our Team</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why Work With Us?</h3>
            <p className="text-gray-600 mb-6">
              At EC DOKS, we believe in fostering a culture of excellence, innovation, and teamwork. We are always looking for talented individuals to join our growing family.
            </p>
          </motion.div>

          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Current Openings</h3>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-800">Sales Representative</h4>
                <p className="text-gray-600">Lagos, Nigeria</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-800">Logistics Coordinator</h4>
                <p className="text-gray-600">Abuja, Nigeria</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-800">Procurement Specialist</h4>
                <p className="text-gray-600">Port Harcourt, Nigeria</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">How to Apply</h3>
            <p className="text-gray-600 mb-4">
              Send your resume and cover letter to <a href="mailto:careers@ecdoks.com" className="text-blue-600">careers@ecdoks.com</a>. Please specify the position you are applying for in the subject line.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

Careers.displayName = 'Careers';

export default Careers;