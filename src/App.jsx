import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CorePrinciples from './components/CorePrinciples';
import AboutFounder from './components/AboutFounder';
import TreatmentApproach from './components/TreatmentApproach';
import ClinicalHeritage from './components/ClinicalHeritage';
import ProductSection from './components/ProductSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ width: '100%', minHeight: '100vh' }}>
      <Navbar />
      <main>
        <Hero />
        <CorePrinciples />
        <AboutFounder />
        <TreatmentApproach />
        <ClinicalHeritage />
        <ProductSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
