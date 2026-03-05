import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Appointments from './components/Appointments';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import CTA from './components/CTA';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Appointments />
        <Testimonials />
        <Process />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
