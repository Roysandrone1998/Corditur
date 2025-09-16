import { useState, useMemo } from "react";
import "../css/egresados.css";
import CategoryList from "../components/CategoryList.jsx";

export default function EgresadosHome() {
  // Slides del carrusel inferior (cargá tus rutas reales)
  const gallery = [
    { src: "/images/egresados/1.jpg", alt: "Egresados 1" },
    { src: "/images/egresados/2.jpg", alt: "Egresados 2" },
    { src: "/images/egresados/3.jpg", alt: "Egresados 3" },
  ];
  const [gIdx, setGIdx] = useState(0);
  const gNext = useMemo(() => (gIdx + 1) % gallery.length, [gIdx, gallery.length]);
  const prevG = () => setGIdx(i => (i - 1 + gallery.length) % gallery.length);
  const nextG = () => setGIdx(i => (i + 1) % gallery.length);

  return (
    <main className="eg-page">
      {/* FOTO GRANDE + TEXTOS */}
      <section className="eg-hero">
        <div className="container">
          <div className="eg-hero-card">
            <img className="eg-hero-img" src="/img/egresadosportada.png" alt="Egresados disfrutando" />
            {/* PNG superpuesto (reemplaza “It’s fun”) */}
            <img className="eg-sticker" src="/img/fun.png" alt="" aria-hidden="true" />
            <h2 className="eg-hero-mid">
              ¡LLEGÓ EL MOMENTO DE CELEBRAR
              <br />
              EL FIN DE LA PRIMARIA!
            </h2>
            <div className="eg-hero-bottom">
              Juegos, aventuras, naturaleza y nuevos recuerdos para toda la vida.
              En Corditur organizamos todo para que los chicos disfruten al máximo,
              con la seguridad y el acompañamiento que las familias necesitan.
            </div>
          </div>
        </div>
      </section>

      {/* TÍTULO + BLOQUES */}
      <section className="eg-content">
        <div className="container">
          <h3 className="eg-title">¿QUÉ INCLUYE EL VIAJE?</h3>

          {/* TRANSPORTE */}
          <article className="eg-block">
            <span className="eg-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M4 15V9a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v6M4 15h16M7 18a1.5 1.5 0 1 0 0-3m10 3a1.5 1.5 0 1 0 0-3"
                  fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <div className="eg-texts">
              <h4>TRANSPORTE</h4>
              <p>
                Ómnibus modernos y seguros con control satelital, toilette, butacas semicama,
                aire acondicionado, calefacción, pantalla LCD y servicio a bordo. Conductores
                capacitados en primeros auxilios y situaciones de emergencia.
              </p>
            </div>
          </article>

          {/* COMIDAS */}
          <article className="eg-block">
            <span className="eg-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M4 3v8a3 3 0 0 0 3 3V3m4 0v11a3 3 0 0 0 3 3V3m6 0v11a3 3 0 0 1-3 3"
                  fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <div className="eg-texts">
              <h4>COMIDAS</h4>
              <p>Uno de los aspectos más valorados por quienes viajan con Corditur es la calidad de las comidas.</p>
              <p>El viaje incluye pensión completa: desayuno, almuerzo, merienda, cena y trasnoche.</p>
              <p>Ofrecemos un servicio buffet variado con gaseosas libres de primeras marcas, postres, y agua mineral en hotel y excursiones.</p>
              <p><strong>Contamos con opciones especiales para celíacos, diabéticos, vegetarianos y otras necesidades.</strong></p>
            </div>
          </article>

          {/* ALOJAMIENTO */}
          <article className="eg-block">
            <span className="eg-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M3 12h18M4 12V7h6a4 4 0 0 1 4 4v1M3 18v-6M21 18v-6"
                  fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <div className="eg-texts">
              <h4>ALOJAMIENTO</h4>
              <p>
                Hoteles de categoría con habitaciones privadas, baño privado, TV, aire acondicionado, piscina,
                WiFi y atención del personal las 24 horas.
              </p>
            </div>
          </article>

          {/* SEGURIDAD */}
          <article className="eg-block">
            <span className="eg-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z"
                  fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
              </svg>
            </span>
            <div className="eg-texts">
              <h4>SEGURIDAD</h4>
              <p>Hoteles con sistema de vigilancia por monitoreo.</p>
              <p>Incluye todos los seguros reglamentarios exigidos por la Secretaría de Turismo:</p>
              <ul className="eg-sublist">
                <li>Seguro de vida</li>
                <li>Seguro por accidentes personales</li>
                <li>Responsabilidad civil</li>
                <li>Seguro de caución</li>
              </ul>
            </div>
          </article>

          {/* ASISTENCIA MÉDICA */}
          <article className="eg-block">
            <span className="eg-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M12 4v16M4 12h16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </span>
            <div className="eg-texts">
              <h4>ASISTENCIA MÉDICA</h4>
              <p>Cobertura completa con servicio de asistencia médica y traslado de urgencia.</p>
            </div>
          </article>

          {/* COORDINACIÓN */}
          <article className="eg-block">
            <span className="eg-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M16 11a4 4 0 1 0-8 0M3 20a7 7 0 0 1 18 0"
                  fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <div className="eg-texts">
              <h4>COORDINACIÓN</h4>
              <p>Equipo Corditur y coordinadores acompañando durante toda la experiencia.</p>
            </div>
          </article>

          {/* ===== KIT DEL EGRESADO ===== */}
          <h3 className="eg-subtitle mt-4">KIT DEL EGRESADO</h3>
          <p className="eg-subdesc">
            Todo lo que necesitan para disfrutar al máximo: remera, mochila, botellita, cartuchera y más.
          </p>

          <div className="eg-kit-card">
            <img className="eg-kit-img" src="/img/kit-egresado.png" alt="Kit del egresado Corditur" />
          </div>

          <div className="eg-kit-actions">
            <a className="eg-pill" href="#" role="button">FICHA MEDICA</a>
            <a className="eg-pill" href="#" role="button">FICHA ADHESIÓN</a>
          </div>

          {/* ===== Carrusel inferior (estilo Figma) ===== */}
          <div className="egc-wrap">
            <div className="egc-card">
              <img className="egc-img" src={gallery[gIdx].src} alt={gallery[gIdx].alt} />
              <div className="egc-grad" />
              <button className="egc-btn egc-prev" onClick={prevG} aria-label="Anterior">
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="egc-btn egc-next" onClick={nextG} aria-label="Siguiente">
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Paquetes / productos */}
      <CategoryList categoria="egresados" />
    </main>
  );
}