import { useEffect, useState } from "react"; // ¿mantener o eliminar?

function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  // Mostrar el boton cuando se hace scroll
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 shadow-lg transition-all"
      aria-label="Volver arriba"
    >
      ⬆️
    </button>
  );
}

export default ScrollTopButton;
