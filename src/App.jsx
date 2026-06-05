// App.jsx
import './App.css';
import Navbar from './components/Navbar/Navbar';
import MarqueeBar from './components/Marquee/Marquee';
import HeroSection from './components/HeroSection/HeroSection';
import Circulars from './components/Circulars/Circulars';
import Footer from './components/Footer/Footer';
import InfoPages from './components/InfoPages/InfoPages';
import ProjectPartners from './components/ProjectPartners/ProjectPartners';
import VisionMission from './components/VisionMission/VisionMission';
import PoliciesSection from './components/PoliciesSection/PoliciesSection';
import Ourcampsite from './components/Ourcampsite/Ourcampsite';

export default function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <MarqueeBar />
      <main>

        <HeroSection />

        <div id="circulars">
          <Circulars />
        </div>

        <div id="info-pages">
          <InfoPages />
        </div>

        <div id="campsite">
          <Ourcampsite />
        </div>

        <div id="policies">
          <PoliciesSection />
        </div>

        <div id="vision">
          <VisionMission />
        </div>

        <div id="partners">
          <ProjectPartners />
        </div>

      </main>
      <Footer />
    </div>
  );
}