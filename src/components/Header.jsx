// import React from 'react';

// const Header = () => {
//   return (
//     <header className="flex justify-between items-center p-4 bg-dark-navy text-light-grey">
//       <h1 className="text-2xl font-bold text-accent">My Brand</h1>
//       <nav className="space-x-4">
//         <a href="#hero" className="hover:text-highlight-blue">Home</a>
//         <a href="#products" className="hover:text-highlight-blue">Products</a>
//         <a href="#about" className="hover:text-highlight-blue">About Us</a>
//         <a href="#contact" className="hover:text-highlight-blue">Contact</a>
//       </nav>
//     </header>
//   );
// };

// export default Header;
// import React from 'react';
// import { motion } from 'framer-motion';

// const Header = () => {
//   return (
//     <motion.header
//       className="flex justify-between items-center p-4 bg-dark-navy text-light-grey fixed w-full top-0 z-50 shadow-md"
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.8 }}
//     >
//       <h1 className="text-2xl font-bold text-accent">My Brand</h1>
//       <nav className="space-x-4">
//         <a href="#hero" className="hover:text-highlight-blue">
//           Home
//         </a>
//         <a href="#products" className="hover:text-highlight-blue">
//           Products
//         </a>
//         <a href="#about" className="hover:text-highlight-blue">
//           About Us
//         </a>
//       </nav>
//     </motion.header>
//   );
// };

// export default Header;
// import React from 'react';
// import { motion } from 'framer-motion';

// const Header = () => {
//   return (
//     <motion.header
//       className="flex justify-between items-center p-4 bg-dark-navy text-light-grey fixed w-full top-0 z-50 shadow-md"
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.8 }}
//     >
//       {/* Logo Section */}
//       <motion.h1
//         className="text-2xl font-bold text-gold px-6"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.2, duration: 0.8 }}
//       >
//         My Brand
//       </motion.h1>

//       {/* Navigation Links */}
//       <nav className="space-x-6 text-white px-6">
//         {['Home', 'Products', 'About Us'].map((item, index) => (
//           <motion.a
//             key={index}
//             href={`#${item.toLowerCase().replace(' ', '')}`}
//             className="relative text-light-grey hover:text-gold transition-colors duration-300"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3 + index * 0.2, duration: 0.8 }}
//           >
//             {item}
//             <span className="absolute left-0 bottom-0 w-0 h-1 bg-gold transition-all duration-300 hover:w-full"></span>
//           </motion.a>
//         ))}
//       </nav>
//     </motion.header>
//   );
// };

// export default Header;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {Link} from 'react-router-dom';
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      className="fixed top-0 w-full bg-midnight-blue text-soft-gold z-50 shadow-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex justify-between items-center p-4">
        {/* Brand Name */}
        <h1 className="text-2xl font-bold text-gold hover:text-soft-gold transition-all duration-300">
          My Brand
        </h1>

        {/* Hamburger Menu (Mobile Only) */}
        <button
          className="lg:hidden text-soft-gold hover:text-highlight-blue transition-all duration-300"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? '✖' : '☰'}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6 text-white">
          <a
            href="#hero"
            className="text-white hover:text-highlight-blue transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#products"
            className="text-white hover:text-highlight-blue transition-colors duration-300"
          >
            Products
          </a>
          <a
            href="#about"
            className="text-white hover:text-highlight-blue transition-colors duration-300"
          >
            About Us
          </a>
          <Link
            to="/Blogs"
            className="hover:text-highlight-blue transition-colors duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Blogs
          </Link>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <nav className="lg:hidden bg-shadow-grey text-white flex flex-col space-y-4 p-4">
          <a
            href="#hero"
            className="hover:text-highlight-blue transition-colors duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#products"
            className="hover:text-highlight-blue transition-colors duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Products
          </a>
          <a
            href="#about"
            className="hover:text-highlight-blue transition-colors duration-300"
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </a>
          <Link
            to="/Blogs"
            className="hover:text-highlight-blue transition-colors duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Blogs
          </Link>
        </nav>
      )}
    </motion.header>
  );
};

export default Header;
