import { useState } from "react";
import CategoryList from "../components/CategoryList.jsx";
import "../css/educativos.css";

const IMAGENES = [
  // Poné 1 o más imágenes en /public/images/educativos/
    "/images/educativos/1.jpg",
    // "/images/educativos/2.jpg",
    // "/images/educativos/3.jpg",
    ];

    export default function EducativosHome() {
    const [idx, setIdx] = useState(0);
    const many = IMAGENES.length > 1;
    const prev = () => setIdx((v) => (v - 1 + IMAGENES.length) % IMAGENES.length);
    const next = () => setIdx((v) => (v + 1) % IMAGENES.length);

    return (
        <main className="edu2-page">
        {/* Título + texto */}
        <section className="edu2-hero">
            <div className="container text-center">
            <h1 className="edu2-title">EDUCATIVOS</h1>
            <p className="edu2-text">
                Los viajes educativos son una oportunidad para aprender, descubrir y
                crecer fuera del aula. En <strong>Corditur</strong> organizamos salidas
                escolares con propuestas seguras, bien planificadas y con
                acompañamiento constante, para que cada experiencia sea tan
                enriquecedora como inolvidable.
            </p>
            </div>
        </section>
        <CategoryList categoria="educativos" />
        {/* Carrusel + descargas */}
        <section className="edu2-gallery">
            <div className="container">
            <div className="edu2-carousel">
                <img
                src={IMAGENES[idx]}
                alt={`Educativos ${idx + 1}`}
                className="edu2-slide"
                />
                {many && (
                <>
                    <button
                    className="edu2-nav edu2-nav--left"
                    onClick={prev}
                    aria-label="Anterior"
                    >
                    ‹
                    </button>
                    <button
                    className="edu2-nav edu2-nav--right"
                    onClick={next}
                    aria-label="Siguiente"
                    >
                    ›
                    </button>
                </>
                )}
            </div>

            <div className="edu2-downloads text-center">
                <h3 className="edu2-dl-title">DESCARGA TODO LO NECESARIO</h3>
                <div className="edu2-dl-row">
                <a className="edu2-pill" href="/pdfs/ficha-medica.pdf" download>
                    FICHA MÉDICA
                </a>
                <a className="edu2-pill" href="/pdfs/permiso-educativo.pdf" download>
                    PERMISO EDUCATIVO
                </a>
                <a className="edu2-pill" href="/pdfs/ficha-adhesion.pdf" download>
                    FICHA DE ADHESIÓN
                </a>
                </div>
            </div>
            </div>
        </section>
        </main>
    );
}