// components/BackgroundVideoSection.tsx
"use client";

import { motion } from "framer-motion";

const BackgroundVideoSection = () => {
  return (
    <section className="relative py-40">
      <video
        autoPlay
        loop
        muted
        controls // <-- Added for debugging, you can remove later
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://cdn.pixabay.com/video/2024/05/08/211185_tiny.mp4"
          type="video/mp4"
        />
        {/* <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" /> */}{" "}
        {/* Uncomment to test with a known working video */}
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Experience the Difference
        </motion.h2>
        <motion.p
          className="text-xl mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Doks Chafing Fuel burns all day!!
        </motion.p>
        <motion.button
          className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full text-lg transition-colors hover:bg-white hover:text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Catalog
        </motion.button>
      </div>
    </section>
  );
};

export default BackgroundVideoSection;
