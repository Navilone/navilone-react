import { useState } from "react";

export default function CookieBanner() {
  const [accepted, setAccepted] = useState(
    localStorage.getItem("cookiesAccepted") === "true"
  );

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setAccepted(true);
  };

  if (accepted) return null;

  return (
    <section className="cook" id="cookie-banner">
      <div className="bandeau">
        <div className="band-t">
          Nous utilisons des cookies pour une expérience utilisateur de meilleure
          qualité. Il faut accepter ci-dessous pour continuer sur notre site.
        </div>
        <div className="band-button">
          <button onClick={acceptCookies}>Accepter</button>
          <a href="/politique">
            <button>Plus d'informations ici</button>
          </a>
        </div>
      </div>
    </section>
  );
}
