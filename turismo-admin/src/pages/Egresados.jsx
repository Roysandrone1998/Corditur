import CategoryList from "../components/CategoryList.jsx";

export default function EgresadosHome() {
    return (
        <>
        <h2 className="text-center fw-bold mb-4">EGRESADOS</h2>
        <CategoryList categoria="egresados" />
        </>
    );
}