import { Link } from "react-router-dom";
import Footer from "./Footer.jsx";
import "../css/home.css";

export default function Home() {
  return (
    <main className="page bg-pattern-lg">   {/* ⬅️ antes: home-page */}
      {/* HERO */}
      <section className="home-hero text-white text-center">
        <div className="container py-5">
          <h1 className="display-5 fw-bold">VIVÍ TU PRÓXIMO VIAJE CON CORDITUR</h1>
          <p className="lead mt-3 mb-0">
                Desde experiencias educativas hasta el viaje de tus sueños.
                Conectamos destinos, personas y recuerdos.
            </p>
            </div>
        </section>
{/* TRES CARDS */}
<section className="container my-5">
  <div className="row g-4">
    {/* Card 1 */}
    <div className="col-12 col-md-4">
      <article className="home-card">
        <div className="home-card-head">
          <h5>INDIVIDUALES</h5>
          <p>Viajes únicos. Vos elegís el destino, nosotros lo hacemos posible.</p>
        </div>
        <img
          className="home-card-img"
          src="/images/internacionales.jpg"
          alt="Viajes individuales"
        />
      </article>
      <div className="text-center mt-2">
        <Link to="/internacionales" className="btn home-pill">CONOCÉ MÁS</Link>
      </div>
    </div>

    {/* Card 2 */}
    <div className="col-12 col-md-4">
      <article className="home-card">
        <div className="home-card-head">
          <h5>EGRESADOS</h5>
          <p>El viaje que nunca se olvida. Diversión, organización y seguridad.</p>
        </div>
        <img
          className="home-card-img"
          src="/images/egresados.jpg"
          alt="Viajes de egresados"
        />
      </article>
      <div className="text-center mt-2">
        <Link to="/egresados" className="btn home-pill">CONOCÉ MÁS</Link>
      </div>
    </div>

    {/* Card 3 */}
    <div className="col-12 col-md-4">
      <article className="home-card">
        <div className="home-card-head">
          <h5>EDUCATIVOS</h5>
          <p>Viajes pensados para aprender, descubrir y crecer. Una experiencia formativa.</p>
        </div>
        <img
          className="home-card-img"
          src="/img/home3.png"
          alt="Viajes educativos"
        />
      </article>
      <div className="text-center mt-2">
        <Link to="/educativos" className="btn home-pill">CONOCÉ MÁS</Link>
      </div>
    </div>
  </div>
</section>

    <section className="home-about py-5">
  <div className="container">
    <div className="d-flex align-items-center gap-3 mb-3 home-about-header">
      <h3 className="fw-bold mb-0">QUIÉNES SOMOS</h3>

      {/* redes (derecha) */}
      <div className="home-social ms-auto">
        <a href="https://wa.me/5493430000000" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hs-btn">
          <i className="bi bi-whatsapp"></i>
        </a>
        <a href="https://www.instagram.com/costanera241" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hs-btn">
          <i className="bi bi-instagram"></i>
        </a>
        <a href="https://www.facebook.com/costanera241" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hs-btn">
          <i className="bi bi-facebook"></i>
        </a>
        <a href="/" aria-label="Sitio web" className="hs-btn">
          <i className="bi bi-globe2"></i>
        </a>
      </div>
    </div>

    {/* tarjeta translúcida */}
    <div className="home-about-card mx-auto">
      <p className="mb-0">
        Somos Corditur, una agencia con 30 años de experiencia en el sector turístico.
        Organizamos viajes educativos, viajes de egresados y experiencias personalizadas para grupos o pasajeros individuales.
        Nos mueve el compromiso, la organización y la pasión por viajar. Acompañamos cada viaje desde la planificación
        hasta el regreso, cuidando cada detalle para que sea una experiencia única.
      </p>
    </div>
  </div>
</section>
  <Footer />
       </main>
    );
}     