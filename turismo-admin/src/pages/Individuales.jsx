import { useEffect, useMemo, useState } from "react";
import CategoryList from "../components/CategoryList.jsx";
import "../css/inter.css"; // tu fondo/hero + las clases hc- del CSS de referencia

function ArrowLeft() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function ArrowRight() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
    </svg>
  );
}
function HeroCarousel({
  images,
  index,
  setIndex,
  onOpenLightbox,
  height = 488,
  smallHeight = 320,

  // NUEVO: controles visuales del preview
  withPreview = true,
  previewShiftX = 14,   // % hacia la derecha
  previewTop = 26,      // px hacia abajo
  fadeStop = 70,        // % donde empieza el fade
  showRightOnMain = false, // si querés flecha derecha en la card grande
}) {
  const n = images.length;
  const nextIdx = useMemo(() => (index + 1) % n, [index, n]);

  const prev = () => setIndex(v => (v - 1 + n) % n);
  const next = () => setIndex(v => (v + 1) % n);

  return (
    <div
      className="hc-stage"
      style={{ "--hc-height": `${height}px`, "--hc-small-height": `${smallHeight}px` }}
    >
      <div className="row g-4 align-items-stretch">
        {/* principal */}
        <div className={withPreview ? "col-12 col-lg-8" : "col-12"}>
          <div className="hc-main">
            {n > 1 && (
              <button className="hc-prev-out" onClick={prev} aria-label="Anterior">
                <ArrowLeft />
              </button>
            )}

            <div className="hc-card">
              <img
                className="hc-img"
                src={images[index].src}
                alt={images[index].alt}
                onClick={() => onOpenLightbox(index)}
              />
              <div className="hc-gradient" />
              {showRightOnMain && n > 1 && (
                <button className="hc-btn hc-next" onClick={next} aria-label="Siguiente">
                  <ArrowRight />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* preview derecha */}
        {withPreview && (
          <div className="col-12 col-lg-4 hc-small-col">
            <div
              className="hc-peek-clip"
              style={{ marginRight: "calc(-1 * (var(--bs-gutter-x, 1.5rem) / 2))" }}
            >
              <div
                className="hc-card hc-small fade-right"
                style={{
                  transform: `translateX(${previewShiftX}%)`,
                  top: `${previewTop}px`,
                  WebkitMaskImage: `linear-gradient(to right, #000 ${fadeStop}%, transparent 100%)`,
                  maskImage: `linear-gradient(to right, #000 ${fadeStop}%, transparent 100%)`,
                }}
              >
                <img
                  className="hc-img"
                  src={images[nextIdx].src}
                  alt={images[nextIdx].alt}
                  onClick={() => onOpenLightbox(nextIdx)}
                />
                <div className="hc-gradient" />
                {n > 1 && (
                  <button
                    className="hc-btn hc-next-only"
                    onClick={next}                 // ← ahora sí avanza
                    aria-label="Siguiente"
                  >
                    <ArrowRight />
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

}

export default function Individuales() {
  // NACIONALES (3 imágenes de prueba)
  const imagesNac = [
    { src: "/img/individuales1.png", alt: "Nacional 1" },
    { src: "/img/individuales2.png", alt: "Nacional 2" },
    { src: "/img/individuales3.png", alt: "Nacional 3" },
  ];
  const [i1, setI1] = useState(0);

  // INTERNACIONALES
  const imagesInt = [
    { src: "/img/individuales1.png", alt: "Internacional 1" },
    { src: "/img/individuales2.png", alt: "Internacional 2" },
    { src: "/img/individuales3.png", alt: "Internacional 3" },
  ];
  const [i2, setI2] = useState(0);

  // ===== Lightbox (compartido) =====
  const [lbOpen, setLbOpen] = useState(false);
  const [lbList, setLbList] = useState([]);   // nac o int
  const [lbIndex, setLbIndex] = useState(0);

  const openLbNac = (idx) => { setLbList(imagesNac); setLbIndex(idx); setLbOpen(true); };
  const openLbInt = (idx) => { setLbList(imagesInt); setLbIndex(idx); setLbOpen(true); };
  const closeLb = () => setLbOpen(false);

  const lbPrev = () => setLbIndex(v => (v - 1 + lbList.length) % lbList.length);
  const lbNext = () => setLbIndex(v => (v + 1) % lbList.length);

  // ESC / flechas + bloquear scroll
  useEffect(() => {
    if (!lbOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeLb();
      if (e.key === "ArrowLeft") lbPrev();
      if (e.key === "ArrowRight") lbNext();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [lbOpen, lbList.length]);

  return (
    <main className="inter-page">
      {/* HERO */}
      <section className="inter-hero text-white text-center py-4">
        <div className="container">
          <h1 className="display-5 fw-bold inter-title">¿ESTÁS LISTO PARA TU PRÓXIMO VIAJE?</h1>
          <p className="lead mb-0 inter-sub">
            En Corditur te ayudamos a viajar a donde soñás, con propuestas diseñadas para que disfrutes sin preocuparte por nada.
            Viajás solo, en pareja o con amigos… y nosotros nos ocupamos de todo lo demás.
          </p>
        </div>
      </section>

   {/* CARRUSEL 1 */}
<section className="container my-4 peeking-right">
  <HeroCarousel
    images={imagesNac}
    index={i1}
    setIndex={setI1}
    onOpenLightbox={(idx) => { setLbList(imagesNac); setLbIndex(idx); setLbOpen(true); }}

    withPreview
    showRightOnMain={false}
    previewShiftX={14}   // % hacia la derecha
    previewTop={26}      // px hacia abajo
    fadeStop={70}        // % para el fade
    height={488}
    smallHeight={320}
  />
</section>
      {/* Lista NACIONALES */}
      <section className="container my-4">
        <CategoryList categoria="nacional" />
      </section>

      {/* Título INTERNACIONALES */}
      <h2 className="text-center fw-bold mb-4 text-white">VIAJES INTERNACIONALES</h2>

{/* CARRUSEL 2 (mismo look, propio estado) */}
<section className="container my-4">
  <HeroCarousel
    images={imagesInt}
    index={i2}
    setIndex={setI2}
    onOpenLightbox={(idx) => { setLbList(imagesInt); setLbIndex(idx); setLbOpen(true); }}

    withPreview
    showRightOnMain={false}
    previewShiftX={14}
    previewTop={26}
    fadeStop={70}
    height={488}
    smallHeight={320}
  />
</section>

      {/* Lista INTERNACIONALES */}
      <section className="container my-4">
        <CategoryList categoria="internacional" />
      </section>

      {/* LIGHTBOX */}
      {lbOpen && (
        <div className="lb-overlay" onClick={closeLb}>
          <div className="lb-box" onClick={(e) => e.stopPropagation()}>
            <img className="lb-img" src={lbList[lbIndex].src} alt={lbList[lbIndex].alt} />
            <button className="lb-close" onClick={closeLb} aria-label="Cerrar"><CloseIcon/></button>
            {lbList.length > 1 && (
              <>
                <button className="lb-prev" onClick={lbPrev} aria-label="Anterior"><ArrowLeft/></button>
                <button className="lb-next" onClick={lbNext} aria-label="Siguiente"><ArrowRight/></button>
              </>
            )}
          </div>
        </div>
      )}
    </main>
  );
}