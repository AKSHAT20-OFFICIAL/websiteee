import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-r from-dark-navy  to-light-navy text-gold bg-fixed"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6">
        {/* Text Section */}
        <div>
          <motion.h2
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            About Us
          </motion.h2>
          <motion.p
            className="text-lg text-light-grey"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            We are a passionate team dedicated to providing innovative, high-quality products that meet your unique needs. Our mission is to blend cutting-edge technology with exceptional craftsmanship, ensuring satisfaction and excellence in every product we deliver. Join us on a journey of innovation and reliability, where your trust is our greatest achievement.
          </motion.p>
        </div>

        {/* Image Section */}
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <img
            src="/images/about-us.jpg"
            alt="About Us"
            className="rounded-lg shadow-lg w-full max-w-sm md:max-w-md"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
