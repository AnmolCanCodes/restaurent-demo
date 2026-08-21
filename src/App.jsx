import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Menu from './sections/Menu';
import HoursLocation from './sections/HoursLocation';
import Reviews from './sections/Reviews';

/**
 * Main App component
 */
function App() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '80px' }}>
        <Hero />
        <About />
        <Menu />
        <HoursLocation />
        <Reviews />
      </main>
      <Footer />
    </>
  );
}

export default App;
