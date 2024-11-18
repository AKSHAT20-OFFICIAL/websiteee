// import React from 'react';

// const Hero = () => {
//   return (
//     <section id="hero" className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-dark-navy to-accent text-white text-center">
//       <h1 className="text-5xl font-bold mb-4">Welcome to Our Products</h1>
//       <p className="text-xl mb-8">Explore the best products designed just for you.</p>
//       <a href="#products" className="bg-accent px-6 py-3 rounded text-dark-navy font-semibold hover:bg-highlight-blue transition">Explore Our Products</a>
//     </section>
//   );
//  };
// // opacity-80

// export default Hero;
// import React from 'react';
// import { motion } from 'framer-motion';

// const Hero = () => {
//   return (
//     <section
//       id="hero"
//       className="h-screen bg-gradient-to-r from-dark-navy to-accent text-white flex flex-col justify-center items-center bg-fixed"
//     >
//       <motion.h1
//         className="text-5xl font-bold mb-4"
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1 }}
//       >
//         Welcome to Our Products
//       </motion.h1>
//       <motion.p
//         className="text-xl mb-8"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.5, duration: 1 }}
//       >
//         Explore the best products designed just for you.
//       </motion.p>
//       <motion.a
//         href="#products"
//         className="bg-accent px-6 py-3 rounded text-dark-navy font-semibold hover:bg-highlight-blue transition"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.8, duration: 1 }}
//       >
//         Explore Our Products
//       </motion.a>
//     </section>
//   );
// };

// export default Hero;
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen bg-gradient-to-r from-dark-navy  to-light-navy text-white flex flex-col justify-center items-center bg-fixed relative overflow-hidden"
    >
      {/* Background Element for Decorative Motion */}
      <motion.div
        className="absolute top-0 left-1/2 w-96 h-96 bg-gold rounded-full filter blur-3xl opacity-20"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1.5, opacity: 0.3 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      ></motion.div>

      {/* Heading */}
      <motion.h1
        className="text-5xl md:text-6xl font-bold mb-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        Welcome to Our Products
      </motion.h1>

      {/* Subheading */}
      <motion.p
        className="text-xl md:text-2xl mb-8 max-w-2xl text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Discover premium products crafted to meet your unique needs and elevate your experience.
      </motion.p>

      {/* Call to Action Button */}
      <motion.a
        href="#products"
        className="relative bg-accent px-8 py-4 rounded-md text-dark-navy font-semibold text-lg hover:bg-highlight-blue transition-all duration-300"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 0px 15px 5px #FFD700",
        }}
      >
        Explore Our Products
      </motion.a>
    </section>
  );
};

export default Hero;
