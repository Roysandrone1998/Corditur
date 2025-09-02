import { useEffect, useState } from 'react';
import { api } from '../api/axios';

export default function Home() {
    const [viajes, setViajes] = useState([]);

    useEffect(() => {
        (async () => {
        try {
            const { data } = await api.get('/viajes');
            setViajes(data);
        } catch {
            setViajes([]);
        }
        })();
    }, []);

    return (
        <>
        <h2 className="mb-3">Próximos viajes</h2>
        <div className="row g-3">
            {viajes.map(v => (
            <div className="col-12 col-md-6 col-lg-4" key={v._id}>
                <div className="card h-100 shadow-sm">
                {v.urls_imagenes?.[0] && <img src={v.urls_imagenes[0]} className="card-img-top" alt={v.titulo} />}
                <div className="card-body">
                    <h5 className="card-title">{v.titulo}</h5>
                    {v.destino && <p className="mb-1"><strong>Destino:</strong> {v.destino}</p>}
                    {v.precio != null && <p className="mb-1"><strong>Precio:</strong> {v.precio} {v.moneda}</p>}
                    {v.pdf_itinerario && (
                    <a className="btn btn-sm btn-outline-secondary mt-2" href={v.pdf_itinerario} download>
                        Descargar itinerario (PDF)
                    </a>
                    )}
                </div>
                </div>
            </div>
            ))}
            {!viajes.length && (
            <div className="col-12">
                <div className="alert alert-info">Sin viajes publicados aún.</div>
            </div>
            )}
        </div>
        </>
    );
}