import './App.css';
import Navbar from './Component/Navbar';
import Banner from './Component/Banner';
import CompTwo from './Component/CompTwo';
import Features from './Component/Features';
import Pricing from './Component/Pricing';
import Testimonials from './Component/Testimonials';
import Latest from './Component/Latest';
import Footer from './Component/Footer';

function App() {
  return (
    <>
      <div>
             <Navbar />
             <Banner/>
             <CompTwo/>
             <Features/>
             <Pricing/>
             <Testimonials/>
             <Latest/>
             <Footer/>
      </div>
    </>
  );
}

export default App;
