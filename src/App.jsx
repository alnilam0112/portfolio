import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
    return (
        <>
            {/* Header en dehors de <main> : pleine largeur, affiché une seule fois sur toutes les pages */}
            <Header />

            {/* Contenu des pages : reçoit les marges définies dans Global.css */}
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </main>
        </>
    );
}

export default App;
