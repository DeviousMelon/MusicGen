import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import OpeningCurtain from "./components/OpeningCurtain";

import Home from "./pages/Home";
import Studio from "./pages/Studio";
import Tutors from "./pages/Tutors";
import SignUp from "./pages/SignUp";
import Contact from "./pages/Contact";
import LimerickVoices from "./pages/LimerickVoices";
import AfterSchool from "./pages/AfterSchool";
import CommunityGroups from "./pages/CommunityGroup";

export default function App() {
  const [showCurtain, setShowCurtain] = useState(true);

  useEffect(() => {
    const seen = sessionStorage.getItem("seenCurtain");
    if (seen) setShowCurtain(false);
  }, []);

  const handleCurtainDone = () => {
    sessionStorage.setItem("seenCurtain", "1");
    setShowCurtain(false);
  };

  return (
    <>
      {showCurtain && <OpeningCurtain onDone={handleCurtainDone} />}

      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/limerick-voices" element={<LimerickVoices />} />
        <Route path="/after-school" element={<AfterSchool />} />
        <Route path="/community-groups" element={<CommunityGroups />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/tutors" element={<Tutors />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}
