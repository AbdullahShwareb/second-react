import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Footer from './components/footer/Footer';
import Portfolio from './components/portfolio/Portfolio';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    
    <>
    
      <Navbar />

      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Portfolio />
            <About />
            <Contact />
          </>
        } />

        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/hero" element={<Hero />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
