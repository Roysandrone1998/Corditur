import { memo } from "react";
import "../css/tripcard.css";

// Origen del server para abrir PDFs (quita el "/api" del VITE_API_URL)
const API_ORIGIN = (import.meta.env.VITE_API_URL || "http://localhost:4000/api")
  .replace(/\/api\/?$/, "");

// Link de WhatsApp (configuralo en tu .env del front)
const WSP_LINK = import.meta.env.VITE_WSP_LINK || ""; // ej: https://wa.me/5493430000000?text=Hola%20Corditur

function fmtDM(dateStr) {
  if (!dateStr) return "—";
  const d = new Date(dateStr);
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  return `${dd}/${mm}`;
}

function pickFechaSalida(v) {
  // Mostramos fecha_inicio si existe; si no, fecha_salida
  return v.fecha_inicio || v.fecha_salida || null;
}

function WhatsAppIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.53 0 .24 5.3.24 11.83c0 2.08.55 4.12 1.6 5.9L0 24l6.43-1.74a11.7 11.7 0 0 0 5.63 1.45h.01c6.52 0 11.82-5.3 11.82-11.82a11.76 11.76 0 0 0-3.37-8.41Zm-8.46 19.02h-.01a9.9 9.9 0 0 1-5.03-1.38l-.36-.21-3.82 1.03 1.02-3.72-.24-.38a9.9 9.9 0 0 1-1.54-5.28C2.08 6.36 6.37 2.08 11.99 2.08c2.64 0 5.13 1.03 7 2.9a9.86 9.86 0 0 1 2.9 7c0 5.62-4.29 9.92-9.83 9.92Zm5.47-7.39c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.95-.95 1.14-.17.2-.35.22-.65.07-.3-.14-1.26-.46-2.4-1.47-.89-.8-1.5-1.8-1.68-2.1-.17-.3-.02-.47.13-.62.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.91-2.22-.24-.58-.49-.5-.67-.5l-.57-.01c-.2 0-.52.08-.8.37-.27.3-1.05 1.02-1.05 2.48 0 1.46 1.08 2.87 1.23 3.06.15.2 2.12 3.22 5.14 4.48.72.31 1.29.49 1.73.63.73.23 1.4.2 1.93.13.59-.09 1.75-.71 2-1.39.25-.68.25-1.26.18-1.38-.07-.12-.26-.19-.56-.33Z"/>
    </svg>
  );
}

function TripCard({ v }) {
  const fechaSalida = pickFechaSalida(v);
  const pdfHref = v.pdf_itinerario ? `${API_ORIGIN}${v.pdf_itinerario}` : "";

  return (
    <div className="trip-card position-relative p-3 p-md-4">
      {/* Acciones arriba derecha */}
      <div className="trip-actions">
        <a
          className={`btn btn-sm rounded-pill fw-bold trip-cta ${WSP_LINK ? "" : "disabled"}`}
          href={WSP_LINK || undefined}
          target={WSP_LINK ? "_blank" : undefined}
          rel={WSP_LINK ? "noreferrer" : undefined}
          aria-disabled={!WSP_LINK}
        >
          RESERVA AHORA!
        </a>
        <a
          className={`trip-wsp ${WSP_LINK ? "" : "disabled"}`}
          href={WSP_LINK || undefined}
          target={WSP_LINK ? "_blank" : undefined}
          rel={WSP_LINK ? "noreferrer" : undefined}
          aria-label="WhatsApp"
          aria-disabled={!WSP_LINK}
        >
          <WhatsAppIcon />
        </a>
      </div>

      {/* 3 columnas */}
      <div className="row g-0 align-items-center">
        {/* DESTINO */}
        <div className="col-12 col-md-4 trip-col">
          <div className="trip-label">DESTINO</div>
          <div className="trip-destino text-uppercase">{v.destino || "—"}</div>
        </div>

        {/* FECHA DE SALIDA */}
        <div className="col-12 col-md-3 trip-col mt-3 mt-md-0">
          <div className="trip-label">FECHA DE SALIDA</div>
          <div className="trip-fecha">{fmtDM(fechaSalida)}</div>
        </div>

        {/* DESCRIPCIÓN */}
        <div className="col-12 col-md-5 trip-col mt-3 mt-md-0">
          <div className="trip-label">DESCRIPCIÓN</div>
          <div className="trip-desc">{v.descripcion || "—"}</div>
        </div>
      </div>

      {/* PDF abajo derecha */}
      {pdfHref && (
        <a
          className="btn btn-sm btn-outline-light rounded-pill trip-pdf"
          href={pdfHref}
          target="_blank"
          rel="noreferrer"
        >
          PDF
        </a>
      )}
    </div>
  );
}

export default memo(TripCard);