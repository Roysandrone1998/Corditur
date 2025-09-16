import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../css/nav.css";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [term, setTerm] = useState("");
    const navigate = useNavigate();

    const items = [
        { label: "INTERNACIONALES", path: "/internacionales" },
        { label: "NACIONALES",      path: "/nacionales" },
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
        <aside className={`offcanvas-menu ${open ? "open" : ""}`} aria-hidden={!open}>
            <div className="offcanvas-inner">
            <button className="close-x" onClick={() => setOpen(false)} aria-label="Cerrar">×</button>
            <ul className="menu-list">
                {items.map(i => (
                <li key={i.path}>
                    <NavLink to={i.path} className={({isActive}) => "menu-link" + (isActive ? " active" : "")} onClick={() => setOpen(false)}>
                    {i.label}
                    </NavLink>
                </li>
                ))}
            </ul>
            </div>
        </aside>
        </>
    );
}