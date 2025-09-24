import { useLanguage } from "../context/LanguageContext";

export default function MentionsLegales() {
  const { t } = useLanguage();

  return (
    <section className="mention">
      <div className="max-width">
        <h1>{t("mentitle1")}</h1>
        <p>{t("menp1")}</p>

        <h1>{t("mentitle2")}</h1>
        <p>{t("menp2")}</p>

        <h1>{t("mentitle3")}</h1>
        <p>{t("menp3")}</p>

        <h1>{t("mentitle4")}</h1>
        <p>{t("menp4")}</p>

        <h1>{t("mentitle5")}</h1>
        <p>{t("menp5")}</p>

        <h1>{t("mentitle6")}</h1>
        <p>{t("menp6")}</p>

        <h1>{t("mentitle7")}</h1>
        <p>{t("menp7")}</p>
      </div>
    </section>
  );
}
