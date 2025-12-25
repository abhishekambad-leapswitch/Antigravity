import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { MouseFollowBlob } from "../components/WavyBlob";

export function MainLayout() {
    return (
        <div className="min-h-screen bg-black">
            <MouseFollowBlob />
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
