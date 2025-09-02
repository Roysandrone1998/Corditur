import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";

export default function Main() {
    return (
        <>
        <Navbar />
        <main className="container py-4">
            <Outlet />
        </main>
        </>
    );
}