import { useEffect, useState } from "react";

export default function ScrollUpButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="scroll-up-btn show"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <i className="fas fa-angle-up"></i>
    </div>
  );
}
