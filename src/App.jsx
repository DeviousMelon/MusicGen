import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import CurrentPrograms from "./pages/CurrentPrograms";
import Studio from "./pages/Studio";
import Tutors from "./pages/Tutors";
import SignUp from "./pages/SignUp";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/current-programs" element={<CurrentPrograms />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/tutors" element={<Tutors />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />

    </>
  );
}
