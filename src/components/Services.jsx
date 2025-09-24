import { useLanguage } from "../context/LanguageContext";

export default function Services() {
  const { t } = useLanguage();

  return (
    <section className="services" id="apropos">
      <div className="max-width">
        <h2 className="title">{t("valtitle")}</h2>
        <h3>{t("valtitle2")}</h3>

        <div className="serv-content">
          <div className="card">
            <div className="box">
              <i className="fas fa-paint-brush"></i>
              <div className="text">{t("val1tit")}</div>
              <p>{t("val1tex")}</p>
            </div>
          </div>

          <div className="card">
            <div className="box">
              <i className="fas fa-chart-line"></i>
              <div className="text">{t("val2tit")}</div>
              <p>{t("val2tex")}</p>
            </div>
          </div>

          <div className="card">
            <div className="box">
              <i className="fas fa-code"></i>
              <div className="text">{t("val3tit")}</div>
              <p>{t("val3tex")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
