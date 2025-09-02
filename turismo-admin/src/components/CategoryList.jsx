import { useEffect, useState } from "react";
import { api } from "../api/axios";
import TripCard from "./TripCard.jsx";

export default function CategoryList({ categoria }) {
  const [items, setItems]   = useState([]);
  const [loading, setLoad]  = useState(true);

  useEffect(() => {
    let cancel = false;
    (async () => {
      setLoad(true);
      try {
        const r = await api.get("/viajes", { params: { categoria } });
        if (!cancel) setItems(r.data || []);
      } finally {
        if (!cancel) setLoad(false);
      }
    })();
    return () => { cancel = true; };
  }, [categoria]);

  if (loading) return <div>Cargando...</div>;
  if (items.length === 0) return <div>No hay viajes en esta sección.</div>;

  return (
    <div className="vstack gap-3">
      {items.map(v => <TripCard key={v._id} v={v} />)}
    </div>
  );
}