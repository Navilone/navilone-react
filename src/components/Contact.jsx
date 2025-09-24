import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <div className="container" id="contact">
      <span className="big-circle"></span>
      <div className="form">
        {/* Infos contact */}
        <div className="contact-info">
          <h3 className="title-contact">{t("contitle")}</h3>
          <p className="text">{t("conp1")}</p>
          <p className="text2">{t("conp2")}</p>

          <div className="info">
            <div className="information">
              <p>Fontainebleau, France</p>
              <i className="fas fa-location-crosshairs"></i>
            </div>
            <div className="information">
              <p>contact@navilone.com</p>
            </div>
            <div className="information">
              <p>0184754535</p>
              <i className="fas fa-phone"></i>
            </div>
          </div>

          <div className="social-media">
            <p>{t("conp3")}</p>
            <div className="social-icons">
              <a href="https://fr.linkedin.com/company/navilone">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Formulaire */}
        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form
            action="https://formspree.io/f/manynqvp"
            autoComplete="off"
            method="POST"
          >
            <h3 className="title-contact">Contact</h3>

            <div className="input-container">
              <input
                type="text"
                name="name"
                className="input"
                placeholder={t("conp4")}
              />
            </div>

            <div className="input-container">
              <input
                type="email"
                name="email"
                className="input"
                placeholder={t("emailPlaceholder")}
              />
            </div>

            <div className="input-container">
              <input
                type="tel"
                name="phone"
                className="input"
                placeholder={t("phonePlaceholder")}
              />
            </div>

            <div className="input-container textarea">
              <textarea
                name="message"
                className="input"
                placeholder={t("messagePlaceholder")}
              ></textarea>
            </div>

            <button type="submit" className="btn">
              {t("conp5")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
