import { useEffect } from "react";
import Typed from "typed.js";
import { useLanguage } from "../context/LanguageContext";

export default function Home() {
  const { t, lang } = useLanguage();

  useEffect(() => {
    const options = {
      strings: [t("typing1"), t("typing2"), t("typing3")],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    };

    const typed = new Typed(".typing", options);

    return () => {
      typed.destroy();
    };
  }, [lang, t]); // redémarre quand la langue change

  return (
    <section className="home" id="home">
      <div className="max-width">
        <div className="home-content">
          <h1>{t("welcome")} NAVILONE</h1>
          <h2>{t("expert")}</h2>
          <div>
            <span className="typing"></span>
          </div>
          <a href="#contact">{t("contacten")}</a>
        </div>
      </div>
    </section>
  );
}
