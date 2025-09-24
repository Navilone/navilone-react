import { useEffect } from "react";

export default function Logos() {
  useEffect(() => {
    const logos = document.querySelector(".logos");
    const copy = document.querySelector(".logos-slide")?.cloneNode(true);
    if (logos && copy) logos.appendChild(copy);
  }, []);

  return (
    <div className="logos">
      <div className="logos-slide">
        <img src="/images/logo/logo1.png" alt="" />
        <img src="/images/logo/logo2.png" alt="" />
        <img src="/images/logo/logo3.png" alt="" />
        <img src="/images/logo/logo4.png" alt="" />
        <img src="/images/logo/logo5.png" alt="" />
        <img src="/images/logo/logo6.png" alt="" />
        <img src="/images/logo/logo7.png" alt="" />
        <img src="/images/logo/logo8.png" alt="" />
        <img src="/images/logo/logo9.png" alt="" />
        <img src="/images/logo/logo10.png" alt="" />
        {/* ... */}
      </div>
    </div>
  );
}
