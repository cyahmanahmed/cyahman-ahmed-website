import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-[hsl(var(--primary))] selection:text-navy">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

