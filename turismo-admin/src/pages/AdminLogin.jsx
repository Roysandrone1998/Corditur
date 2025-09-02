import { useState } from 'react';
import { api } from '../api/axios';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [msg, setMsg] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post('/auth/login', { email, contrasena });
      localStorage.setItem('token', data.token);
      window.location.href = '/admin'; // redirige al panel
    } catch (e) {
      setMsg(e.response?.data?.error || 'Credenciales inválidas');
    }
  };

  return (
    <div className="container py-4">
      <h3>Login administrador</h3>
      <form onSubmit={onSubmit} className="card p-3">
        <input className="form-control mb-2" placeholder="Email"
               value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" className="form-control mb-2" placeholder="Contraseña"
               value={contrasena} onChange={(e)=>setContrasena(e.target.value)} />
        {msg && <div className="alert alert-danger py-2">{msg}</div>}
        <button className="btn btn-primary">Ingresar</button>
      </form>
    </div>
  );
}