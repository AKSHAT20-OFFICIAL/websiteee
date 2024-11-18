// import React, { useState } from 'react';
// import ProductNavigation from './ProductNavigation';
// import ProductDetails from './ProductDetails';

// const ProductShowcase = () => {
//   const [selectedProduct, setSelectedProduct] = useState(0);

//   const products = [
//     {
//       name: "Product 1",
//       serial: "001",
//       description: "This is the description of Product 1.",
//       features: [
//         { name: "Feature 1", description: "Detailed description of Feature 1." },
//         { name: "Feature 2", description: "Detailed description of Feature 2." },
//         { name: "Feature 3", description: "Detailed description of Feature 3." }
//       ],
//       images: ["/images/product1a.jpg", "/images/product1b.jpg"]
//     },
//     {
//       name: "Product 1",
//       serial: "001",
//       description: "This is the description of Product 1.",
//       features: [
//         { name: "Feature 1", description: "Detailed description of Feature 1." },
//         { name: "Feature 2", description: "Detailed description of Feature 2." },
//         { name: "Feature 3", description: "Detailed description of Feature 3." }
//       ],
//       images: ["/images/product1a.jpg", "/images/product1b.jpg"]
//     },
//     {
//       name: "Product 1",
//       serial: "001",
//       description: "This is the description of Product 1.",
//       features: [
//         { name: "Feature 1", description: "Detailed description of Feature 1." },
//         { name: "Feature 2", description: "Detailed description of Feature 2." },
//         { name: "Feature 3", description: "Detailed description of Feature 3." }
//       ],
//       images: ["/images/product1a.jpg", "/images/product1b.jpg"]

//     },
//     {
//       name: "Product 1",
//       serial: "001",
//       description: "This is the description of Product 1.",
//       features: [
//         { name: "Feature 1", description: "Detailed description of Feature 1." },
//         { name: "Feature 2", description: "Detailed description of Feature 2." },
//         { name: "Feature 3", description: "Detailed description of Feature 3." }
//       ],
//       images: ["/images/product1a.jpg", "/images/product1b.jpg"]
//     },
//     {
//       name: "Product 1",
//       serial: "001",
//       description: "This is the description of Product 1.",
//       features: [
//         { name: "Feature 1", description: "Detailed description of Feature 1." },
//         { name: "Feature 2", description: "Detailed description of Feature 2." },
//         { name: "Feature 3", description: "Detailed description of Feature 3." }
//       ],
//       images: ["/images/product1a.jpg", "/images/product1b.jpg"]
//     },
//     {
//       name: "Switchable Glass",
//       serial: "002",
//       description: "This is the description of Product 1.",
//       features: [
//         { name: "Feature 1", description: "Detailed description of Feature 1." },
//         { name: "Feature 2", description: "Detailed description of Feature 2." },
//         { name: "Feature 3", description: "Detailed description of Feature 3." }
//       ],
//       images: ["/images/product1a.jpg", "/images/product1b.jpg"]
//     }
//     // Add other products here...
//   ];

//   return (
//     <section id="products" className="py-20 bg-light-grey text-light text-center">
//       <h2 className="text-3xl font-bold mb-5 text-dark-navy">Our Products</h2>
//       <ProductNavigation
//         products={products}
//         selectedProduct={selectedProduct}
//         onSelectProduct={setSelectedProduct}
//       />
//       <ProductDetails product={products[selectedProduct]} />
//     </section>
//   );
// };

// export default ProductShowcase;
import React, { useState } from "react";
import { motion } from "framer-motion";
import ProductNavigation from "./ProductNavigation";
import ProductDetails from "./ProductDetails";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const ProductShowcase = () => {
  const [selectedProduct, setSelectedProduct] = useState(0);

  // const products = [
  //   // {
  //   //   name: "LED FILM",
  //   //   serial: "002",
  //   //   description: "LED transparent film is also called photoelectric film. This technology is a light and transparent display film made of RGB-LED, which are surface-attached to the film substrate and then packaged by film pressure. The LED film produced by this technology has a film thickness < 2mm. LED film has several advantages such as cuttable and splicable, multiple customized models, flat front and back, high transparency, good durability, and easy maintenance.",
  //   //   features: [
  //   //     { name: "Adjustable high brightness", description: "With different pixel densities, conventional 3000cd/㎡, highlight 5000cd/㎡, and customizable brightness >7000cd/㎡" },
  //   //     { name: "Ultra-thin", description: "The LEDs are hidden, with a conventional thickness <2.5mm, and ultra-thin customized thickness <1.5mm." },
  //   //     { name: "High transparency", description: "Provides 50-90% physical transparency with reasonable viewing distances ensuring 99% visual transparency." },
  //   //     { name: "Easy installation", description: "Self-adhesive design allows easy installation on existing glass surfaces without altering the original structure." },
  //   //     { name: "Durability", description: "Replaceable protective film ensures the screen remains brand new over time." }
  //   //   ],
  //   //   images: ["https://example.com/led-film1.jpg", "https://example.com/led-film2.jpg"]
  //   // },
  //   // {
  //   //   name: "LED GLASS",
  //   //   serial: "003",
  //   //   description: "LED Glass is an innovative display solution embedding LED modules into glass. It allows for displaying text, images, and videos while maintaining high transparency and blending seamlessly into architectural designs.",
  //   //   features: [
  //   //     { name: "High transparency", description: "Does not obstruct light or visibility while maintaining the original appearance of the glass." },
  //   //     { name: "Wide viewing angle", description: "Provides a 160° wide-angle display for an enhanced viewing experience." },
  //   //     { name: "Customizable", description: "Available in different shapes, sizes, and curvatures to meet diverse application needs." },
  //   //     { name: "Lightweight", description: "Modular design simplifies installation and scalability." },
  //   //     { name: "Brilliant 3D effects", description: "Supports advanced 3D effects for a more immersive visual experience." }
  //   //   ],
  //   //   images: ["https://example.com/led-glass1.jpg", "https://example.com/led-glass2.jpg"]
  //   // },
  //   // {
  //   //   name: "POLARIZED FILM",
  //   //   serial: "004",
  //   //   description: "Polarized Film is a smart material that adjusts transparency automatically based on UV exposure. It is widely used in automotive, architectural, and other applications where dynamic shading and glare reduction are essential.",
  //   //   features: [
  //   //     { name: "Dynamic shading", description: "Automatically darkens under bright light conditions, even on cloudy days due to UV exposure." },
  //   //     { name: "UV & IR blocking", description: "Blocks over 99% of UV and significant infrared radiation for enhanced comfort and protection." },
  //   //     { name: "Energy efficiency", description: "Reduces light and heat ingress during sunny periods, lowering cooling costs." },
  //   //     { name: "Large custom sizes", description: "Available in widths up to 1.5m and lengths up to 50m for versatile applications." },
  //   //     { name: "Easy installation", description: "Self-adhesive options make it simple to apply to glass surfaces without requiring wires." }
  //   //   ],
  //   //   images: ["https://example.com/polarized-film1.jpg", "https://example.com/polarized-film2.jpg"]
  //   // },

  //   // {
  //   //   name: "LED FILM",
  //   //   serial: "002",
  //   //   description: "LED transparent film is also called photoelectric film.This technology is a light and transparent display film made of RGB-LED , which are surface-attached to the film substrate and then packaged by film pressure.The LED film produced by this technology has Film thickness < 2mm. LED film has a number of advantages such as cuttable and splicable, multiple customized models, flat front and back, high transparency, good durability and easy maintenance.",
  //   //   features: [
  //   //     { name: "Adjustable high brightness", description: "With different pixel density, conventional 3000cd/㎡,Highlight 5000cd/㎡;customized>7000cd/㎡" },
  //   //     { name: "Ultra thin", description: "The LED are hidden, and the conventional front and rear flat films are <2.5mm.Ultra-thin customized front and rear flat film <1.5mm" },
  //   //     { name: "High transparency", description: "About 50-90% physical transparency with different point spacing,and a reasonable viewing distance of 99% visual transparency" },
  //   //   ],
  //   //   images: ["https://media.licdn.com/dms/image/v2/D5612AQEEt9sH33ihIQ/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1712039043393?e=1736380800&v=beta&t=0vTymV43NMrVMOYhT5AS5XjB5Ch1HBtRSvgFxxp3nog", "/images/product1b.jpg"],
  //   // },

  //     {
  //       name: "Smart Film",
  //       serial: "001",
  //       description: "Smart Film is an innovative light control product made from liquid crystal/polymer material, allowing users to switch between transparent and opaque states for privacy and energy efficiency.",
  //       features: [
  //         { name: "Privacy protection", description: "Switch between transparent and opaque states to safeguard privacy." },
  //         { name: "Cooling and UV protection", description: "Blocks more than 98% of infrared rays and over 99% of UV rays." },
  //         { name: "Touch screen and projection", description: "Supports multi-touch and high-definition projection." },
  //         { name: "Safety", description: "Prevents injury by holding glass fragments in place if broken." },
  //         { name: "Eco-friendly", description: "Reduces heat loss and light pollution, promoting sustainability." }
  //       ],
  //       images: ["https://example.com/smart-film1.jpg", "https://example.com/smart-film2.jpg"]
  //     },
  //     {
  //       name: "Smart Glass",
  //       serial: "002",
  //       description: "Smart Glass integrates PDLC film within a glass sandwich structure, offering the ability to switch between opaque and transparent states via electronic control.",
  //       features: [
  //         { name: "Customizable transparency", description: "Multiple options for transparency levels, including ultra-clear versions." },
  //         { name: "Durability", description: "High resistance to wear and tear with a lifespan of up to 15 years." },
  //         { name: "Energy-efficient", description: "Blocks UV and infrared rays while maintaining heat insulation." }
  //       ],
  //       images: ["https://example.com/smart-glass1.jpg", "https://example.com/smart-glass2.jpg"]
  //     },
  //     {
  //       name: "LED Glass",
  //       serial: "003",
  //       description: "LED Glass is a transparent display solution that integrates LED modules into glass, enabling text, images, and video displays without obstructing visibility.",
  //       features: [
  //         { name: "High transparency", description: "Maintains light permeability and original appearance of the building." },
  //         { name: "3D effects", description: "Supports advanced 3D display for immersive visuals." },
  //         { name: "Customizable shapes", description: "Adapts to various sizes, shapes, and curvatures." }
  //       ],
  //       images: ["https://example.com/led-glass1.jpg", "https://example.com/led-glass2.jpg"]
  //     },
  //     {
  //       name: "LED Film",
  //       serial: "004",
  //       description: "LED Film is an ultra-thin, transparent display film made from RGB-LED technology, ideal for creative and functional applications in modern spaces.",
  //       features: [
  //         { name: "Ultra-thin", description: "Thickness less than 2mm; customizable down to 1.5mm." },
  //         { name: "Cuttable and splicable", description: "Enables custom installations and configurations." },
  //         { name: "Brightness adjustment", description: "Default brightness of 3000cd/m², customizable up to 7000cd/m²." }
  //       ],
  //       images: ["https://media.licdn.com/dms/image/v2/D5612AQEEt9sH33ihIQ/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1712039043393?e=1736380800&v=beta&t=0vTymV43NMrVMOYhT5AS5XjB5Ch1HBtRSvgFxxp3nog", "/images/product1b.jpg"],
  //     },
  //     {
  //       name: "UTD (Ultra-Thin Transparency Display)",
  //       serial: "005",
  //       description: "UTD is a transparent projection medium with a high-definition, holographic imaging capability for stunning visual displays.",
  //       features: [
  //         { name: "High transparency", description: "Maintains a clear and minimalistic appearance when not in use." },
  //         { name: "3D projection", description: "Supports immersive 3D visuals with a futuristic feel." },
  //         { name: "Customizable size", description: "Adaptable to various applications, from exhibitions to architectural design." }
  //       ],
  //       images: ["https://example.com/utd1.jpg", "https://example.com/utd2.jpg"]
  //     },
  //     {
  //       name: "DLCF (Dye Liquid Crystal Film)",
  //       serial: "006",
  //       description: "DLCF is a dynamic shading film that transitions between opaque and transparent states for user-controlled light and privacy management.",
  //       features: [
  //         { name: "Fast switching", description: "Switches between states in 0.1 seconds." },
  //         { name: "Energy saving", description: "Blocks up to 99% of visible light, UV, and infrared rays." },
  //         { name: "Versatility", description: "Compatible with various glass types and installations." }
  //       ],
  //       images: ["https://example.com/dlcf1.jpg", "https://example.com/dlcf2.jpg"]
  //     },
  //     {
  //       name: "Polarized Film",
  //       serial: "007",
  //       description: "Polarized Film adjusts transparency dynamically based on light intensity, offering shading and glare reduction with energy-saving benefits.",
  //       features: [
  //         { name: "Dynamic shading", description: "Adapts to UV intensity, darkening in bright conditions." },
  //         { name: "UV & IR blocking", description: "Blocks harmful rays while reducing heat and light ingress." },
  //         { name: "Ease of installation", description: "Self-adhesive options make application simple and straightforward." }
  //       ],
  //       images: ["https://example.com/polarized-film1.jpg", "https://example.com/polarized-film2.jpg"]
  //     },
  //     {
  //       name: "Smart Curtain",
  //       serial: "008",
  //       description: "Smart Curtain combines high-tech fabric with light-sensing and thermal insulation properties, providing a premium alternative to traditional curtains.",
  //       features: [
  //         { name: "Heat insulation", description: "Blocks over 95% of infrared rays for superior thermal performance." },
  //         { name: "Eco-friendly", description: "Constructed with environmentally friendly materials for long-term use." },
  //         { name: "Intelligent adjustment", description: "Automatically regulates light transmittance based on sunlight intensity." }
  //       ],
  //       images: ["https://example.com/smart-curtain1.jpg", "https://example.com/smart-curtain2.jpg"]
  //     },
  //     {
  //       name: "Silent Pod",
  //       serial: "009",
  //       description: "Silent Pod is a modular, sound-insulated cabin offering privacy and versatile applications in office and educational environments.",
  //       features: [
  //         { name: "Sound insulation", description: "Built with advanced materials for superior acoustic control." },
  //         { name: "Customizable", description: "Available in multiple sizes and configurations for various use cases." },
  //         { name: "Durable construction", description: "Made from aviation-grade materials for long-lasting performance." }
  //       ],
  //       images: ["https://example.com/silent-pod1.jpg", "https://example.com/silent-pod2.jpg"]
  //     }
  //   ];

  const products = [
    {
      name: "Smart Film",
      serial: "001",
      description: "Smart Film is an innovative light control product made from liquid crystal/polymer material, allowing users to switch between transparent and opaque states for privacy and energy efficiency.",

      features: [
        {
          name: "Privacy protection",
          description:
            "Switch between transparent and opaque states to safeguard privacy.",
        },
        {
          name: "Cooling and UV protection",
          description:
            "Blocks more than 98% of infrared rays and over 99% of UV rays.",
        },
        {
          name: "Touch screen and projection",
          description: "Supports multi-touch and high-definition projection.",
        },
        {
          name: "Safety",
          description:
            "Prevents injury by holding glass fragments in place if broken.",
        },
        {
          name: "Eco-friendly",
          description:
            "Reduces heat loss and light pollution, promoting sustainability.",
        },
      ],
      images: ["https://media.licdn.com/dms/image/v2/D5612AQEEt9sH33ihIQ/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1712039043393?e=1736380800&v=beta&t=0vTymV43NMrVMOYhT5AS5XjB5Ch1HBtRSvgFxxp3nog", "/images/product1b.jpg"],

    },
    {
      name: "Smart Glass",
      serial: "002",
      description: "Smart Glass integrates PDLC film within a glass sandwich structure, offering the ability to switch between opaque and transparent states via electronic control.",
      features: [
        {
          name: "Customizable transparency",
          description:
            "Multiple options for transparency levels, including ultra-clear versions.",
        },
        {
          name: "Durability",
          description:
            "High resistance to wear and tear with a lifespan of up to 15 years.",
        },
        {
          name: "Energy-efficient",
          description:
            "Blocks UV and infrared rays while maintaining heat insulation.",
        },
      ],
      images: ["https://media.licdn.com/dms/image/v2/D5612AQEEt9sH33ihIQ/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1712039043393?e=1736380800&v=beta&t=0vTymV43NMrVMOYhT5AS5XjB5Ch1HBtRSvgFxxp3nog", "/images/product1b.jpg"],

    },
    {
      name: "LED Glass",
      serial: "003",
      description: "LED Glass is a transparent display solution that integrates LED modules into glass, enabling text, images, and video displays without obstructing visibility.",
      features: [
        {
          name: "High transparency",
          description:
            "Maintains light permeability and original appearance of the building.",
        },
        {
          name: "3D effects",
          description: "Supports advanced 3D display for immersive visuals.",
        },
        {
          name: "Customizable shapes",
          description: "Adapts to various sizes, shapes, and curvatures.",
        },
        {
          name: "Wide viewing angle",
          description:
            "Provides a 160° wide-angle display for an enhanced viewing experience.",
        },
        {
          name: "Lightweight",
          description:
            "Modular design simplifies installation and scalability.",
        },
      ],
      images: ["https://media.licdn.com/dms/image/v2/D5612AQEEt9sH33ihIQ/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1712039043393?e=1736380800&v=beta&t=0vTymV43NMrVMOYhT5AS5XjB5Ch1HBtRSvgFxxp3nog", "/images/product1b.jpg"],

    },
    {
      name: "LED Film",
      serial: "004",
      description: "LED Film is an ultra-thin, transparent display film made from RGB-LED technology, ideal for creative and functional applications in modern spaces.",
      features: [
        {
          name: "Ultra-thin",
          description: "Thickness less than 2mm; customizable down to 1.5mm.",
        },
        {
          name: "Cuttable and splicable",
          description: "Enables custom installations and configurations.",
        },
        {
          name: "Brightness adjustment",
          description:
            "Default brightness of 3000cd/m², customizable up to 7000cd/m².",
        },
        {
          name: "Durability",
          description:
            "Replaceable protective film ensures the screen remains brand new over time.",
        },
        {
          name: "High transparency",
          description:
            "Provides 50-90% physical transparency with reasonable viewing distances ensuring 99% visual transparency.",
        },
      ],
      images: ["https://media.licdn.com/dms/image/v2/D5612AQEEt9sH33ihIQ/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1712039043393?e=1736380800&v=beta&t=0vTymV43NMrVMOYhT5AS5XjB5Ch1HBtRSvgFxxp3nog", "/images/product1b.jpg"],

    },
    {
      name: "UTD",
      serial: "005",
      description: "UTD is a transparent projection medium with a high-definition, holographic imaging capability for stunning visual displays.",
      features: [
        {
          name: "High transparency",
          description:
            "Maintains a clear and minimalistic appearance when not in use.",
        },
        {
          name: "3D projection",
          description: "Supports immersive 3D visuals with a futuristic feel.",
        },
        {
          name: "Customizable size",
          description:
            "Adaptable to various applications, from exhibitions to architectural design.",
        },
      ],
      images: ["https://media.licdn.com/dms/image/v2/D5612AQEEt9sH33ihIQ/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1712039043393?e=1736380800&v=beta&t=0vTymV43NMrVMOYhT5AS5XjB5Ch1HBtRSvgFxxp3nog", "/images/product1b.jpg"],

    },
    {
      name: "DLCF",
      serial: "006",
      description: "DLCF is a dynamic shading film that transitions between opaque and transparent states for user-controlled light and privacy management.",
      features: [
        {
          name: "Fast switching",
          description: "Switches between states in 0.1 seconds.",
        },
        {
          name: "Energy saving",
          description:
            "Blocks up to 99% of visible light, UV, and infrared rays.",
        },
        {
          name: "Versatility",
          description: "Compatible with various glass types and installations.",
        },
      ],
      images: ["https://media.licdn.com/dms/image/v2/D5612AQEEt9sH33ihIQ/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1712039043393?e=1736380800&v=beta&t=0vTymV43NMrVMOYhT5AS5XjB5Ch1HBtRSvgFxxp3nog", "/images/product1b.jpg"],

    },
    {
      name: "Polarized Film",
      serial: "007",
      description: "Polarized Film adjusts transparency dynamically based on light intensity, offering shading and glare reduction with energy-saving benefits.",
      features: [
        {
          name: "Dynamic shading",
          description:
            "Adapts to UV intensity, darkening in bright conditions.",
        },
        {
          name: "UV & IR blocking",
          description:
            "Blocks harmful rays while reducing heat and light ingress.",
        },
        {
          name: "Ease of installation",
          description:
            "Self-adhesive options make application simple and straightforward.",
        },
        {
          name: "Energy efficiency",
          description:
            "Reduces light and heat ingress during sunny periods, lowering cooling costs.",
        },
        {
          name: "Large custom sizes",
          description:
            "Available in widths up to 1.5m and lengths up to 50m for versatile applications.",
        },
      ],
      images: ["https://media.licdn.com/dms/image/v2/D5612AQEEt9sH33ihIQ/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1712039043393?e=1736380800&v=beta&t=0vTymV43NMrVMOYhT5AS5XjB5Ch1HBtRSvgFxxp3nog", "/images/product1b.jpg"],

    },
    {
      name: "Smart Curtain",
      serial: "008",
      description: "Smart Curtain combines high-tech fabric with light-sensing and thermal insulation properties, providing a premium alternative to traditional curtains.",
      features: [
        {
          name: "Heat insulation",
          description:
            "Blocks over 95% of infrared rays for superior thermal performance.",
        },
        {
          name: "Eco-friendly",
          description:
            "Constructed with environmentally friendly materials for long-term use.",
        },
        {
          name: "Intelligent adjustment",
          description:
            "Automatically regulates light transmittance based on sunlight intensity.",
        },
        {
          name: "Durability",
          description: "Designed for a lifespan of up to 20 years.",
        },
        {
          name: "Dust resistance",
          description: "Resistant to dust accumulation and easy to clean.",
        },
      ],
      images: ["https://media.licdn.com/dms/image/v2/D5612AQEEt9sH33ihIQ/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1712039043393?e=1736380800&v=beta&t=0vTymV43NMrVMOYhT5AS5XjB5Ch1HBtRSvgFxxp3nog", "/images/product1b.jpg"],

    },
    {
      name: "Silent Pod",
      serial: "009",
      description: "Silent Pod is a modular, sound-insulated cabin offering privacy and versatile applications in office and educational environments.",
      features: [
        {
          name: "Sound insulation",
          description:
            "Built with advanced materials for superior acoustic control.",
        },
        {
          name: "Customizable",
          description:
            "Available in multiple sizes and configurations for various use cases.",
        },
        {
          name: "Durable construction",
          description:
            "Made from aviation-grade materials for long-lasting performance.",
        },
        {
          name: "Modular design",
          description: "Easily assembled and disassembled for flexible use.",
        },
        {
          name: "Integrated systems",
          description:
            "Features built-in lighting, air filtration, and touch-sensitive controls.",
        },
      ],
      images: ["https://media.licdn.com/dms/image/v2/D5612AQEEt9sH33ihIQ/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1712039043393?e=1736380800&v=beta&t=0vTymV43NMrVMOYhT5AS5XjB5Ch1HBtRSvgFxxp3nog", "/images/product1b.jpg"],

    },
  ];

  return (
    <motion.section
      id="products"
      className="py-20 bg-charcoal text-light text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={fadeIn}
      transition={{ duration: 0.8 }}>
      <h2 className="text-3xl font-bold mb-5 text-gold">Our Products</h2>
      <ProductNavigation
        products={products}
        selectedProduct={selectedProduct}
        onSelectProduct={setSelectedProduct}
      />
      <ProductDetails product={products[selectedProduct]} />
    </motion.section>
  );
};

export default ProductShowcase;
