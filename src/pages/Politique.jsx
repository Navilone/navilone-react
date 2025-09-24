// src/pages/PolitiqueConfidentialite.jsx
import { useLanguage } from "../context/LanguageContext";

function Politique() {
  const { t } = useLanguage();

  return (
    <section className="politique">
      <div className="max-width">
        <h1>{t("poltitle1")}</h1>

        <h2>{t("poltitle2")}</h2>
        <p>{t("polp1")}</p>

        <h2>{t("poltitle3")}</h2>
        <p>{t("polp2")}</p>

        <h2>{t("poltitle4")}</h2>
        <p>{t("polp3")}</p>

        <h2>{t("poltitle5")}</h2>
        <p>{t("polp4")}</p>

        <h2>{t("poltitle6")}</h2>
        <p>{t("polp5")}</p>

        <h2>{t("poltitle7")}</h2>
        <p>{t("polp6")}</p>

        <h2>{t("poltitle8")}</h2>
        <p>{t("polp7")}</p>

        <h2>{t("poltitle9")}</h2>
        <p>{t("polp8")}</p>

        <h2>{t("poltitle10")}</h2>
        <p>{t("polp9")}</p>

        <h2>{t("poltitle11")}</h2>
        <p>{t("polp10")}</p>
      </div>
    </section>
  );
}

export default Politique;
