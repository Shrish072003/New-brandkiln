import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ScrollToTop from './ScrollToTop';
import Homepage from "./Pages/Homepage";
import About from "./Pages/About";
import Metaverse from "./Pages/Metaverse";
import LearningDevelopment from "./Pages/eLearningDevelopment";
import Brandstrategy from "./Pages/Brandstrategy";
import Brandpositioning from "./Pages/Brandpositioning";
import Experienceinnovation from "./Pages/Experienceinnovation";
import Contentservices from "./Pages/Contentservices";
import Casestudy from "./Pages/Casestudy";
import CasestudyAll from "./Pages/CasestudyAll.js";
import CasestudyNirDhwani from "./Pages/CasestudyNirDhwani";
import CasestudyPurnartha from "./Pages/CasestudyPurnartha";
import CasestudyMotorOctane from "./Pages/CasestudyMotorOctane";
import CasestudyJadcom from "./Pages/CasestudyJadcom";
import CasestudyTorres from "./Pages/CasestudyTorres";
import CasestudyPinktum from "./Pages/CasestudyPinktum";
import CasestudyPinktumAG from "./Pages/CasestudyPinktumAG";
import CasestudyCovince from "./Pages/CasestudyCovince";
import CasestudyWeddingBells from "./Pages/CasestudyWeddingBells";
import CasestudyMyIdealWedding from "./Pages/CasestudyMyIdealWedding";
import CasestudyAzelis from "./Pages/CasestudyAzelis";
import CasestudySupremePetrochem from "./Pages/CasestudySupremePetrochem";
import CasestudyRealtyMetaverse from "./Pages/CasestudyRealtyMetaverse";
import Casestudyprivatebanks from "./Pages/Casestudyprivatebanks";
import CasestudyMEA from "./Pages/CasestudyMEA";
import CasestudyLaChocolat from "./Pages/CasestudyLaChocolat";
import CasestudyHomeYogaGuru from "./Pages/CasestudyHomeYogaGuru";
import CasestudyMetroAG from "./Pages/CasestudyMetroAG";
import CasestudyAriaaChikankari from "./Pages/CasestudyAriaaChikankari";
import DigitalEcosystems from "./Pages/DigitalEcosystems";
import AppsandPlatformDevelopment from "./Pages/AppsandPlatformDevelopment";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/brand-strategy" element={<Brandstrategy />} />
          <Route path="/brand-positioning" element={<Brandpositioning />} />
          <Route path="/brand-innovation" element={<Experienceinnovation />} />
          <Route path="/content-services" element={<Contentservices />} />
          <Route path="/metaverse" element={<Metaverse />} />
          <Route path="/e-learning-development" element={<LearningDevelopment />} />
          <Route path="/digital-ecosystems" element={<DigitalEcosystems />} />
          <Route path="/apps-and-platform-development" element={<AppsandPlatformDevelopment />} />
          <Route path="/case-study" element={<CasestudyAll />} />
          <Route path="/case-study/Maritime" element={<Casestudy />} />
          <Route path="/case-study/NirDhwani" element={<CasestudyNirDhwani />} />
          <Route path="/case-study/Purnartha" element={<CasestudyPurnartha />} />
          <Route path="/case-study/MotorOctane" element={<CasestudyMotorOctane />} />
          <Route path="/case-study/Jadcom" element={<CasestudyJadcom />} />
          <Route path="/case-study/Torres" element={<CasestudyTorres />} />
          <Route path="/case-study/Pinktum" element={<CasestudyPinktum />} />
          <Route path="/case-study/Pinktum-AG" element={<CasestudyPinktumAG />} />
          <Route path="/case-study/covince-innovation" element={<CasestudyCovince />} />
          <Route path="/case-study/Wedding-bells" element={<CasestudyWeddingBells />} />
          <Route path="/case-study/My-Ideal-Wedding" element={<CasestudyMyIdealWedding />} />
          <Route path="/case-study/Azelis" element={<CasestudyAzelis />} />
          <Route path="/case-study/Supreme-Petrochem" element={<CasestudySupremePetrochem />} />
          <Route path="/case-study/Realty-Metaverse" element={<CasestudyRealtyMetaverse />} />
          <Route path="/case-study/private-banks" element={<Casestudyprivatebanks />} />
          <Route path="/case-study/MEA" element={<CasestudyMEA />} />
          <Route path="/case-study/La-Chocolat" element={<CasestudyLaChocolat />} />
          <Route path="/case-study/HomeYogaGuru" element={<CasestudyHomeYogaGuru />} />
          <Route path="/case-study/Metro-AG" element={<CasestudyMetroAG />} />
          <Route path="/case-study/Ariaa-Chikankari" element={<CasestudyAriaaChikankari />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
