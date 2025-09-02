import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './pages/Home.jsx';
import AdminLogin from './pages/AdminLogin.jsx';
import AdminPanel from './pages/AdminPanel.jsx';

export default function App() {
  return (
    <div className="container py-4">
      <header className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h4 m-0">
          <Link to="/" className="text-decoration-none">Corditur</Link>
        </h1>
        <nav className="d-flex gap-2">
          <Link to="/admin" className="btn btn-outline-primary">Panel</Link>
          <Link to="/admin/login" className="btn btn-primary">Login</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}