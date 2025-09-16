import { Link } from "react-router-dom";
import "../css/home.css";
export default function Home() {
    return (
         <main className="home-page">   {/* 👈 wrapper con fondo azul */}
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

        {/* QUIÉNES SOMOS */}
        <section className="home-about py-5">
            <div className="container">
            <h3 className="fw-bold mb-3">QUIÉNES SOMOS</h3>
            <p className="mb-0 text-body-secondary">
                Somos Corditur, una agencia con 30 años de experiencia en el sector turístico.
                Organizamos viajes educativos, de egresados e itinerarios personalizados para grupos e individuales.
                Nos mueve el compromiso, la organización y la pasión por viajar. Acompañamos cada viaje desde la
                planificación hasta el regreso, cuidando los detalles para que sea una experiencia única.
            </p>
            </div>
        </section>
       </main>
    );
}     