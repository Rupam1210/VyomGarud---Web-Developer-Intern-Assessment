import Hero from './components/Hero';
import About from './components/About';
import Capabilities from './components/Capabilities';
import Highlights from './components/Highlights';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Hero />
      <About />
      <Capabilities />
      <Highlights />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
