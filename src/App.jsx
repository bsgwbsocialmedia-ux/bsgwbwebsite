// App.jsx
import './App.css';
import Navbar from './components/Navbar/Navbar';
import MarqueeBar from './components/Marquee/Marquee';
import HeroSection from './components/HeroSection/HeroSection';
import Circulars from './components/Circulars/Circulars';
import Footer from './components/Footer/Footer';
import InfoPages from './components/InfoPages/InfoPages'
import ProjectPartners from './components/ProjectPartners/ProjectPartners'
import VisionMission from './components/VisionMission/VisionMission'
import PoliciesSection from './components/PoliciesSection/PoliciesSection'

export default function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <MarqueeBar />
      <main>
        <HeroSection />
        <Circulars />
        <InfoPages/>
        <ProjectPartners/>
        <PoliciesSection/>
        <VisionMission/>
      </main>
      <Footer />
    </div>
  );
}