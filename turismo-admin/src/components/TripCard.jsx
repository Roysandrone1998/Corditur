const API_ORIGIN = ((import.meta.env.VITE_API_URL || "http://localhost:4000/api")
  .replace(/\/api\/?$/, "")); // → http://localhost:4000

function fmt(d) {
  try { return new Date(d).toLocaleDateString(); } catch { return ""; }
}

export default function TripCard({ v }) {
  return (
    <div className="card p-3">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center">
        <div className="me-3">
          <div className="small text-muted">DESTINO</div>
          <div className="h5 text-uppercase mb-2">{v.destino}</div>

          <div className="small text-muted">FECHA</div>
          <div className="mb-2">
            {v.fecha_inicio ? fmt(v.fecha_inicio) : "-"}
            {v.fecha_fin ? `  →  ${fmt(v.fecha_fin)}` : ""}
          </div>

          {v.descripcion && (
            <>
              <div className="small text-muted">DESCRIPCIÓN</div>
              <div>{v.descripcion}</div>
            </>
          )}
        </div>

        <div className="d-flex align-items-center gap-2 mt-3 mt-md-0">
          {v.pdf_itinerario && (
            <a
              className="btn btn-sm btn-outline-secondary"
              href={`${API_ORIGIN}${v.pdf_itinerario}`}
              target="_blank" rel="noreferrer"
            >
              PDF
            </a>
          )}
          {/* lugar para "RESERVA AHORA!" después */}
        </div>
      </div>
    </div>
  );
}