import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../css/nav.css";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [term, setTerm] = useState("");
    const navigate = useNavigate();

    const items = [
        { label: "INDIVIDUALES", path: "/individuales" },
        { label: "EGRESADOS",       path: "/egresados" },
        { label: "EDUCATIVOS",      path: "/educativos" },
        { label: "ADMIN",           path: "/login" },
    ];

    const submitSearch = (e) => {
        e.preventDefault();
        if (!term.trim()) return;
        const hit = items.find(i => i.label.toLowerCase().includes(term.toLowerCase()));
        if (hit) navigate(hit.path);
        setTerm("");
    };

    return (
        <>
        <nav className="navbar-slim px-3">
            {/* Hamburguesa (izquierda) */}
            <button className="btn-hamb" onClick={() => setOpen(true)} aria-label="Abrir menú">
            <span></span><span></span><span></span>
            </button>

            {/* Logo centrado */}
            <Link to="/" className="logo-centered" aria-label="Ir al inicio">
            <img src="/img/logo.png" alt="Corditur" className="logo-img" />
            </Link>

            {/* 🔍 Buscador (usa tus clases) */}
            <form className="search-container" onSubmit={submitSearch}>
            <input
                type="text"
                className="search-input"
                placeholder="Buscar..."
                value={term}
                onChange={(e) => setTerm(e.target.value)}
            />
            <button className="search-button" type="submit" aria-label="Buscar">
                <i className="bi bi-search lupita"></i>
                {/* Si preferís imagen: <img src="/img/lupa.svg" alt="" className="lupita" /> */}
            </button>
            </form>
        </nav>

        {/* Off-canvas del menú */}
        <aside
  className={`drawer-overlay ${open ? "open" : ""}`}
  role="dialog"
  aria-modal={open}
  aria-label="Menú principal"
>
  {/* clic afuera cierra */}
  <div className="drawer-backdrop" onClick={() => setOpen(false)} />

  <div className="drawer-card" role="document">
    <div className="drawer-head">
      {/* mini badge opcional (podés usar tu favicon) */}
      <img src="/img/logo.png" alt="" className="drawer-badge" />
      <button className="drawer-close" onClick={() => setOpen(false)} aria-label="Cerrar">×</button>
    </div>

    <ul className="drawer-list">
      {items.map(i => (
        <li key={i.path}>
          <NavLink
            to={i.path}
            onClick={() => setOpen(false)}
            className={({isActive}) => "drawer-link" + (isActive ? " active" : "")}
          >
            {i.label}
          </NavLink>
        </li>
      ))}
    </ul>

    <div className="drawer-section">QUIENES SOMOS</div>
    <div className="drawer-social">
      <a href="https://wa.me/5493430000000" target="_blank" rel="noopener noreferrer"><i className="bi bi-whatsapp"></i></a>
      <a href="https://www.instagram.com/costanera241" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></a>
      <a href="https://www.facebook.com/costanera241" target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook"></i></a>
    </div>
  </div>
</aside>
        </>
    );
}