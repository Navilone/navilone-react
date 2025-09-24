import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="containeer">
        <div className="row">
          {/* Colonne logo + description */}
          <div className="footer-col">
            <div className="img">
              <img src="images/Navilone_logo.png" alt="logo" />
              <img src="images/Navilone_logo_écriture.png" alt="logo" />
            </div>
            <p>{t("foo1")}</p>
            <br />
            <br />
            <div className="social-links">
              <a
                href="https://fr.linkedin.com/company/navilone"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Colonne menu */}
          <div className="footer-col">
            <h4>{t("footitle1")}</h4>
            <ul className="menu">
              <li>
                <HashLink smooth to="/#home" className="menu-btn">
                  {t("homeee")}
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="/#apropos" className="menu-btn">
                  {t("aboute")}
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="/#articles" className="menu-btn">
                  {t("newss")}
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
          </div>

          {/* Colonne infos légales */}
          <div className="footer-col">
            <h4>{t("footitle2")}</h4>
            <ul>
              <li>
                <Link to="/mention">{t("foo2")}</Link>
              </li>
              <li>
                <Link to="/politique">{t("foo3")}</Link>
              </li>
            </ul>
          </div>

          {/* Colonne signature */}
          <div className="footer-col">
            <h4>{t("footitle3")}</h4>
            <p>NAVILONE</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
