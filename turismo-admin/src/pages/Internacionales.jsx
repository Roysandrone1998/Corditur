import { useState, useMemo } from "react";
import CategoryList from "../components/CategoryList.jsx";
import "../css/inter.css";

export default function Internacionales() {
  // Imágenes del primer carrusel (NACIONALES)
  const imagesNac = [
    { src: "/images/nacionales/1.jpg", alt: "Nacionales 1" },
    { src: "/images/nacionales/2.jpg", alt: "Nacionales 2" },
    { src: "/images/nacionales/3.jpg", alt: "Nacionales 3" },
  ];

  // Imágenes del segundo carrusel (INTERNACIONALES)
  const imagesInt = [
    { src: "/images/internacionales/1.jpg", alt: "Internacionales 1" },
    { src: "/images/internacionales/2.jpg", alt: "Internacionales 2" },
    { src: "/images/internacionales/3.jpg", alt: "Internacionales 3" },
  ];

  // Estado carrusel 1
  const [i1, setI1] = useState(0);
  const n1 = imagesNac.length;
  const nextI1 = useMemo(() => (i1 + 1) % n1, [i1, n1]);
  const prev1 = () => setI1(v => (v - 1 + n1) % n1);
  const next1 = () => setI1(v => (v + 1) % n1);

  // Estado carrusel 2
  const [i2, setI2] = useState(0);
  const n2 = imagesInt.length;
  const nextI2 = useMemo(() => (i2 + 1) % n2, [i2, n2]);
  const prev2 = () => setI2(v => (v - 1 + n2) % n2);
  const next2 = () => setI2(v => (v + 1) % n2);

  return (
    <main className="inter-page">
      {/* HERO */}
      <section className="inter-hero text-white text-center py-4">
        <div className="container">
          <h1 className="display-5 fw-bold inter-title">
            ¿ESTÁS LISTO PARA TU PRÓXIMO VIAJE?
          </h1>
          <p className="lead mb-0 inter-sub">
            En Corditur te ayudamos a viajar a donde soñás, con propuestas diseñadas para que disfrutes sin preocuparte por nada.
            Viajás solo, en pareja o con amigos… y nosotros nos ocupamos de todo lo demás.
          </p>
        </div>
      </section>

      {/* CARRUSEL 1 (Nacionales) */}
      <section className="container my-4">
        <div className="row g-4 align-items-stretch">
          {/* Principal */}
          <div className="col-12 col-lg-8">
            <div className="hc-card">
              <img className="hc-img" src={imagesNac[i1].src} alt={imagesNac[i1].alt} />
              <div className="hc-gradient" />
              <button className="hc-btn hc-prev" onClick={prev1} aria-label="Anterior">
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="hc-btn hc-next" onClick={next1} aria-label="Siguiente">
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Preview (desktop) */}
          <div className="col-12 col-lg-4 d-none d-lg-block">
            <div className="hc-card hc-card--small">
              <img className="hc-img" src={imagesNac[nextI1].src} alt={imagesNac[nextI1].alt} />
              <div className="hc-gradient" />
              <button className="hc-btn hc-next-only" onClick={next1} aria-label="Siguiente">
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Lista NACIONALES */}
      <section className="container my-4">
        <CategoryList categoria="nacional" />
      </section>

      {/* Título INTERNACIONALES */}
      <h2 className="text-center fw-bold mb-4 text-white">VIAJES INTERNACIONALES</h2>

      {/* CARRUSEL 2 (Internacionales) */}
      <section className="container my-4">
        <div className="row g-4 align-items-stretch">
          {/* Principal */}
          <div className="col-12 col-lg-8">
            <div className="hc-card">
              <img className="hc-img" src={imagesInt[i2].src} alt={imagesInt[i2].alt} />
              <div className="hc-gradient" />
              <button className="hc-btn hc-prev" onClick={prev2} aria-label="Anterior">
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="hc-btn hc-next" onClick={next2} aria-label="Siguiente">
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Preview (desktop) */}
          <div className="col-12 col-lg-4 d-none d-lg-block">
            <div className="hc-card hc-card--small">
              <img className="hc-img" src={imagesInt[nextI2].src} alt={imagesInt[nextI2].alt} />
              <div className="hc-gradient" />
              <button className="hc-btn hc-next-only" onClick={next2} aria-label="Siguiente">
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Lista INTERNACIONALES */}
      <section className="container my-4">
        <CategoryList categoria="internacional" />
      </section>
    </main>
  );
}