import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand bg-light border-bottom px-3">
        <span className="navbar-brand fw-bold">Corditur</span>
        <div className="navbar-nav gap-2">
            <NavLink className={({isActive}) => "nav-link" + (isActive ? " active" : "")} to="/internacionales">Internacionales</NavLink>
            <NavLink className={({isActive}) => "nav-link" + (isActive ? " active" : "")} to="/nacionales">Nacionales</NavLink>
            <NavLink className={({isActive}) => "nav-link" + (isActive ? " active" : "")} to="/egresados">Egresados</NavLink>
            <NavLink className={({isActive}) => "nav-link" + (isActive ? " active" : "")} to="/educativos">Educativos</NavLink>
            <NavLink className="nav-link ms-3" to="/login">Admin</NavLink>
        </div>
        </nav>
    );
}