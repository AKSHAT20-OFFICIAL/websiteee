
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import HomeBlogSection from './components/BlogHome';

function App() {
  return (
    <div className="bg-light-grey text-dark-grey font-sans">
      <Header />
      <Hero />
      <ProductShowcase />
      <AboutUs />
      <HomeBlogSection/>
      {/* <Contact /> */}
      <Footer />
      
    </div>
  );
}

export default App;
