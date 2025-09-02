import { useEffect, useState, useRef } from 'react';
import { api } from '../api/axios';
import '../css/adm.css';

export default function AdminPanel() {
  const [authorized, setAuthorized] = useState(false);
  const [viajes, setViajes] = useState([]);

  const [form, setForm] = useState({
    destino: '',
    descripcion: '',
    fecha_salida: '',
    fecha_inicio: '',
    fecha_fin: '',
    publicado: true,
    categoria: 'internacional', // 👈 4 opciones
  });

  const [itinerario, setItinerario] = useState(null);
  const dzPdfRef = useRef(null);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get('/viajes/admin');
        setViajes(data);
        setAuthorized(true);
      } catch {
        setAuthorized(false);
      }
    })();
  }, []);

  const handle = (e) =>
    setForm((f) => ({
      ...f,
      [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    }));

  // Dropzone PDF
  const prevent = (e) => { e.preventDefault(); e.stopPropagation(); };
  const onPdfDragOver = (e) => { prevent(e); dzPdfRef.current?.classList.add('dragover'); };
  const onPdfDragLeave = (e) => { prevent(e); dzPdfRef.current?.classList.remove('dragover'); };
  const onPdfDrop = (e) => {
    prevent(e);
    dzPdfRef.current?.classList.remove('dragover');
    const file = Array.from(e.dataTransfer.files || [])[0];
    if (file && file.type === 'application/pdf') setItinerario(file);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    Object.entries(form).forEach(([k, v]) => fd.append(k, v));
    if (itinerario) fd.append('itinerario', itinerario);

    try {
      await api.post('/viajes', fd);
      alert('Viaje creado');
      const { data } = await api.get('/viajes/admin');
      setViajes(data);
      // reset
      setForm({
        destino: '',
        descripcion: '',
        fecha_salida: '',
        fecha_inicio: '',
        fecha_fin: '',
        publicado: true,
        categoria: 'internacional',
      });
      setItinerario(null);
    } catch (e) {
      alert(e.response?.data?.error || 'Error creando viaje');
    }
  };

  if (!authorized) return <p>No autorizado. Iniciá sesión en /admin/login</p>;

  return (
    <div className="admin-bg py-4">
      <div className="container">
        <h3 className="panel-title">Panel Administrador</h3>

        {/* NUEVO VIAJE */}
        <h5 className="panel-title">Nuevo viaje</h5>
        <div className="panel-card mb-4">
          <form onSubmit={onSubmit}>
            <div className="mb-2">
              <div className="input-label">Destino</div>
              <input
                name="destino"
                className="form-control"
                placeholder="Destino"
                value={form.destino}
                onChange={handle}
                required
              />
            </div>

            <div className="row g-2">
              <div className="col-12 col-md-4">
                <div className="input-label">Fecha de salida</div>
                <input
                  type="date"
                  name="fecha_salida"
                  className="form-control"
                  value={form.fecha_salida}
                  onChange={handle}
                />
              </div>
              <div className="col-12 col-md-4">
                <div className="input-label">Desde</div>
                <input
                  type="date"
                  name="fecha_inicio"
                  className="form-control"
                  value={form.fecha_inicio}
                  onChange={handle}
                />
              </div>
              <div className="col-12 col-md-4">
                <div className="input-label">Hasta</div>
                <input
                  type="date"
                  name="fecha_fin"
                  className="form-control"
                  value={form.fecha_fin}
                  onChange={handle}
                />
              </div>
            </div>

            <div className="mt-2">
              <div className="input-label">Descripción</div>
              <textarea
                name="descripcion"
                className="form-control"
                rows={3}
                placeholder="Descripción del viaje"
                value={form.descripcion}
                onChange={handle}
              />
            </div>

            {/* PDF (arrastre aquí) */}
            <div
              ref={dzPdfRef}
              className="dropzone mt-3"
              onDragOver={onPdfDragOver}
              onDragLeave={onPdfDragLeave}
              onDrop={onPdfDrop}
            >
              <div className="fw-semibold">PDF (arrastre aquí)</div>
              <div className="small text-muted">o haga clic para seleccionar</div>
              <input
                type="file"
                accept="application/pdf"
                className="form-control mt-2"
                onChange={(e) => setItinerario(e.target.files[0])}
              />
              {itinerario && (
                <div className="mt-2">
                  <span className="badge text-bg-secondary">{itinerario.name}</span>
                </div>
              )}
            </div>

            <div className="row g-2 mt-3">
              <div className="col-12 col-md-6">
                <div className="input-label">Sección</div>
                <select
                  name="categoria"
                  className="form-select"
                  value={form.categoria}
                  onChange={handle}
                  required
                >
                  <option value="internacional">Viajes internacionales</option>
                  <option value="nacional">Viajes nacionales</option>
                  <option value="egresados">Egresados</option>
                  <option value="educativos">Educativos</option>
                </select>
              </div>
              <div className="col-12 col-md-6">
                <div className="input-label">Estado</div>
                <div className="form-check form-switch mt-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="publicado"
                    name="publicado"
                    checked={form.publicado}
                    onChange={handle}
                  />
                  <label className="form-check-label" htmlFor="publicado">
                    Publicado
                  </label>
                </div>
              </div>
            </div>

            <button className="btn btn-primary btn-pill mt-3">SUBIR</button>
          </form>
        </div>

        {/* LISTADO */}
        <h5 className="panel-title mt-4">Viajes cargados</h5>
        <div className="row g-3">
          {viajes.map((v) => (
            <div className="col-12 col-md-6 col-lg-4" key={v._id}>
              <div className="panel-card h-100">
                <h5 className="mb-1">{v.titulo || v.destino}</h5>
                <div className="text-muted small">
                  {v.destino} • {v.categoria}
                </div>
                {v.pdf_itinerario && (
                  <a className="btn btn-sm btn-outline-secondary mt-2" href={v.pdf_itinerario} target="_blank" rel="noreferrer">
                    Ver itinerario (PDF)
                  </a>
                )}
              </div>
            </div>
          ))}
          {!viajes.length && <p className="text-muted">Todavía no hay viajes cargados.</p>}
        </div>
      </div>
    </div>
  );
}
