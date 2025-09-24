import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={`navbar ${isSticky ? "sticky" : ""}`}>
      <div className="max-width">
        <div className="logo">
          <Link to="/">
            <img src="images/Navilone_logo_écriture.png" alt="logo écriture" />
            <img src="images/Navilone_logo.png" alt="logo" />
          </Link>
        </div>

        <ul className={`menu ${menuOpen ? "active" : ""}`}>
          <li>
            <HashLink smooth to="/#home" className="menu-btn">
              {t("homee")}
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#apropos" className="menu-btn">
              {t("about")}
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#articles" className="menu-btn">
              {t("news")}
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#services" className="menu-btn">
              Services
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#contact" className="menu-btn">
              Contact
            </HashLink>
          </li>
        </ul>

        <div
          className={`menu-btn ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <i className="fas fa-bars"></i>
        </div>

        <div className="trad-button">
          <button
            onClick={() => setLang("en")}
            className={`flag-button ${lang === "en" ? "active" : ""}`}
          >
            🇬🇧 EN
          </button>
          <button
            onClick={() => setLang("fr")}
            className={`flag-button ${lang === "fr" ? "active" : ""}`}
          >
            🇫🇷 FR
          </button>
        </div>
      </div>
    </nav>
  );
}
