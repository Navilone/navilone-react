// src/App.jsx
import { Routes, Route } from "react-router-dom";

// Composants globaux
import Navbar from "./components/Navbar";
import CookieBanner from "./components/CookieBanner";
import ScrollUpButton from "./components/ScrollUpButton";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

// Sections de la page d’accueil
import Home from "./components/Home";
import Values from "./components/Values";
import Services from "./components/Services";
import Articles from "./components/Articles";
import Contact from "./components/Contact";
import Logos from "./components/Logos";

// Pages légales
import MentionsLegales from "./pages/MentionsLegales";
import Politique from "./pages/Politique";

function App() {
  return (
    <>
      <Navbar />
      <CookieBanner />
      <ScrollUpButton />
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Values />
              <Articles />
              <Services />
              <Contact />
              <Logos />
            </>
          }
        />
        <Route path="/mention" element={<MentionsLegales />} />
        <Route path="/politique" element={<Politique />} />
        <Route path="*" element={<Home />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
