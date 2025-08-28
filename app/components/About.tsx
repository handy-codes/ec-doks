// components/About.tsx
"use client";

import { motion } from "framer-motion";
import { forwardRef } from "react";
import Image from "next/image";

interface AboutProps {}

const About = forwardRef<HTMLDivElement, AboutProps>((_, ref) => {
  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About EC DOKS
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-10">
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Image
              src="https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="About EC DOKS"
              width={600}
              height={400}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </motion.div>
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Your Trusted Hotel Supply Partner
            </h3>
            <p className="text-gray-600 mb-4">
              EC DOKS is a leading supplier of premium hotel supplies in
              Nigeria. With years of experience, we provide high-quality
              products that meet the needs of the hospitality industry.
            </p>
            <p className="text-gray-600 mb-4">
              Our product range includes chafing gas, steak sugar (white and
              brown), liquid soap and fragrance, wine, beddings, and many other
              essential items for hotels and resorts.
            </p>
            <p className="text-gray-600">
              We are committed to excellence, reliability, and customer
              satisfaction. Our team ensures timely delivery and exceptional
              service to all our clients.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

About.displayName = "About";

export default About;
