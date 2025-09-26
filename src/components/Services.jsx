import { useLanguage } from "../context/LanguageContext";

export default function Services() {
  const { t } = useLanguage();

  return (
    <section className="wrapper" id="services">
      <h2 className="title">{t("servtitle")}</h2>
      <div className="slide">
        <input type="radio" name="slide" id="c1" defaultChecked />
        <label htmlFor="c1" className="slider">
          <div className="line">
            <div className="icon">1</div>
            <div className="description">
              <h4>{t("servtitle1")}</h4>
              <p>{t("servp1")}</p>
            </div>
          </div>
        </label>

        <input type="radio" name="slide" id="c2" />
        <label htmlFor="c2" className="slider">
          <div className="line">
            <div className="icon">2</div>
            <div className="description">
              <h4>{t("servtitle2")}</h4>
              <p>{t("servp2")}</p>
            </div>
          </div>
        </label>

        <input type="radio" name="slide" id="c3" />
        <label htmlFor="c3" className="slider">
          <div className="line">
            <div className="icon">3</div>
            <div className="description">
              <h4>{t("servtitle3")}</h4>
              <p>{t("servp3")}</p>
            </div>
          </div>
        </label>

        <input type="radio" name="slide" id="c4" />
        <label htmlFor="c4" className="slider">
          <div className="line">
            <div className="icon">4</div>
            <div className="description" id="contact">
              <h4>{t("servtitle4")}</h4>
              <p>{t("servp4")}</p>
            </div>
          </div>
        </label>
      </div>
    </section>
  );
}
