import { useState } from 'react';
import { api } from '../api/axios';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    setMsg('');
    try {
      await api.post('/auth/login', { email, password }); // cookie HTTPOnly
      navigate('/admin', { replace: true });
    } catch (e) {
      setMsg(e.response?.data?.error || 'Credenciales inválidas');
    }
  };

  return (
    <div className="container py-4" style={{maxWidth: 420}}>
      <h3>Login administrador</h3>
      <form onSubmit={onSubmit} className="card p-3">
        <input className="form-control mb-2" placeholder="Email"
                value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" className="form-control mb-2" placeholder="Contraseña"
                value={password} onChange={(e)=>setPassword(e.target.value)} />
        {msg && <div className="alert alert-danger py-2">{msg}</div>}
        <button className="btn btn-primary">Ingresar</button>
      </form>
    </div>
  );
}