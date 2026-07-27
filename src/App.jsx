import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar/Navbar";
import Navbar2 from "./components/Navbar2/Navbar2";
import MarqueeBar from "./components/Marquee/Marquee";
import HeroSection from "./components/HeroSection/HeroSection";
import Circulars from "./components/Circulars/Circulars";
import Footer from "./components/Footer/Footer";
import FundamentalsPreview from "./components/FundamentalsPreview/FundamentalsPreview";
// import ProjectPartners from "./components/ProjectPartners/ProjectPartners";
import VisionMission from "./components/VisionMission/VisionMission";
import PoliciesSection from "./components/PoliciesSection/PoliciesSection";
import Ourcampsite from "./components/Ourcampsite/Ourcampsite";


import About from "./pages/About/About";
import Gallery from "./pages/Gallery/Gallery";
import District from "./pages/District/District";
import News from "./pages/News/News";
import Awards from "./pages/Awards/Awards";
import Shop from "./pages/Shop/Shop";
import Contact from "./pages/Contact/Contact";

// Inner Pages
import InnerPageLayout from "./components/Layout/InnerPageLayout";

// Campsites
import GanganagarCampsite from "./pages/Campsites/GanganagarCampsite";
import KurseongCampsite from "./pages/Campsites/KurseongCampsite";
import JhargramCampsite from "./pages/Campsites/JhargramCampsite";

import Fundamentals from "./pages/Fundamentals/Fundamentals";
import Beginning from "./pages/Beginning/Beginning";

import PresentLeadership from "./pages/Organization/PresentLeadership/PresentLeadership";
import OurTeam from "./pages/Organization/OurTeam/OurTeam";
import Patron from "./pages/Organization/Patron/Patron";
import DistrictAssociation from "./pages/Organization/DistrictAssociation/DistrictAssociation";
import ByeLaws from "./pages/Organization/ByeLaws/ByeLaws";
import FinancialPolicy from "./pages/Organization/FinancialPolicy/FinancialPolicy";
import TypeOfMembership from "./pages/Organization/Membership/TypeOfMembership";

import Bunny from "./pages/Programme/YouthProgramme/Bunny/Bunny";
import Cub from "./pages/Programme/YouthProgramme/Cub/Cub";
import Bulbul from "./pages/Programme/YouthProgramme/Bulbul/Bulbul";
import Scout from "./pages/Programme/YouthProgramme/Scout/Scout";
import Guide from "./pages/Programme/YouthProgramme/Guide/Guide";
import Rover from "./pages/Programme/YouthProgramme/Rover/Rover";
import Ranger from "./pages/Programme/YouthProgramme/Ranger/Ranger";

import UnitLeaders from "./pages/Programme/AdultProgramme/UnitLeaders/UnitLeaders";
import AdultLeaders from "./pages/Programme/AdultProgramme/AdultLeaders/AdultLeaders";
import LeadersOfAdult from "./pages/Programme/AdultProgramme/LeadersAdult/LeadersAdult";

import YouthAnnualPlan from "./pages/Programme/AnnualPlan/YouthAnnualPlan/YouthAnnualPlan";
import AdultAnnualPlan from "./pages/Programme/AnnualPlan/AdultAnnualPlan/AdultAnnualPlan";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />

      <Navbar />
      <Navbar2 />
      <MarqueeBar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <div id="circulars"><Circulars /></div>
              <FundamentalsPreview />
              <div id="campsite"><Ourcampsite /></div>
              <div id="vision"><VisionMission /></div>
              {/* <div id="partners"><ProjectPartners /></div> */}
              <div id="policies"><PoliciesSection /></div>
            </>
          }
        />

        <Route path="/campsites/ganganagar" element={<GanganagarCampsite />} />
<Route path="/campsites/kurseong" element={<KurseongCampsite />} />
<Route path="/campsites/jhargram" element={<JhargramCampsite />} />
        <Route path="/fundamentals" element={<Fundamentals />} />
        <Route path="/beginning" element={<Beginning />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/district" element={<District />} />
        <Route path="/news" element={<News />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/programme/youth-programme/bunny" element={<Bunny />} />
        <Route path="/programme/youth-programme/cub" element={<Cub />} />
        <Route path="/programme/youth-programme/bulbul" element={<Bulbul />} />
        <Route path="/programme/youth-programme/scout" element={<Scout />} />
        <Route path="/programme/youth-programme/guide" element={<Guide />} />
        <Route path="/programme/youth-programme/rover" element={<Rover />} />
        <Route path="/programme/youth-programme/ranger" element={<Ranger />} />

        <Route path="/programme/adult-programme/unitleaders" element={<UnitLeaders />} />
        <Route path="/programme/adult-programme/adultleaders" element={<AdultLeaders />} />
        <Route path="/programme/adult-programme/leadersofadult" element={<LeadersOfAdult />} />

        <Route path="/programme/annual-plan/youth" element={<YouthAnnualPlan />} />
        <Route path="/programme/annual-plan/adult" element={<AdultAnnualPlan />} />

        <Route path="/organization/presentleadership" element={<PresentLeadership />} />
        <Route path="/organization/ourteam" element={<OurTeam />} />
        <Route path="/organization/patron" element={<Patron />} />
        <Route path="/organization/districtassociation" element={<DistrictAssociation />} />
        <Route path="/organization/byelaws" element={<ByeLaws />} />
        <Route path="/organization/financialpolicy" element={<FinancialPolicy />} />
        <Route path="/organization/membership/typeofmembership" element={<TypeOfMembership />} />

        <Route path="*" element={<About />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;