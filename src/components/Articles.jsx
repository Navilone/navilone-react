import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Articles() {
  const { t } = useLanguage();
  const [active, setActive] = useState(1);

  const articles = [
    { id: 1, title: t("arttit1"), text: t("arttex1"), img: "/images/vv.png" },
    { id: 2, title: t("arttit2"), text: t("arttex2"), img: "/images/fd.png" },
    { id: 3, title: t("arttit3"), text: t("arttex3"), img: "/images/vf.png" },
    { id: 4, title: t("arttit4"), text: t("arttex4"), img: "/images/bh.png" },
    { id: 5, title: t("arttit5"), text: t("arttex5"), img: "/images/vg.png" },
    { id: 6, title: t("arttit6"), text: t("arttex6"), img: "/images/hv.png" },
  ];

  return (
    <section className="articles" id="articles">
      <div className="max-width">
        <h2 className="title">{t("arttitle")}</h2>

        <div className="articles-wrapper">
          <div className="articles-list">
            {articles.map((art) => (
              <button
                key={art.id}
                className={`article-tab ${active === art.id ? "active" : ""}`}
                onClick={() => setActive(art.id)}
              >
                {art.title}
              </button>
            ))}
          </div>

          <div className="articles-content">
            {articles
              .filter((art) => art.id === active)
              .map((art) => (
                <div key={art.id} className="article-detail">
                  <img src={art.img} alt={art.title} />
                  <p>{art.text}</p>
                </div>
              ))}
          </div>
        </div>

        {/* Mobile accordéon */}
        <div className="articles-accordion">
          {articles.map((art) => (
            <div key={art.id} className="accordion-item">
              <button
                className="accordion-title"
                onClick={() => setActive(active === art.id ? null : art.id)}
              >
                {art.title}
                <span>{active === art.id ? "−" : "+"}</span>
              </button>
              {active === art.id && (
                <div className="accordion-content">
                  <img src={art.img} alt={art.title} />
                  <p className="zing">{art.text}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
