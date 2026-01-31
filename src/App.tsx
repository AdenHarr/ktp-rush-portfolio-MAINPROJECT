import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Rush from "./pages/Rush";
import Contact from "./pages/Contact";

export default function App() {
    return (
        <>
            <Header />
            <main style={{ maxWidth: 1100, margin: "0 auto", padding: "18px" }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/rush" element={<Rush />} />
                    <Route path="/contact" element={<Contact />} />

                    <Route path="/rush/schedule" element={<h1>Rush Schedule</h1>} />
                    <Route path="/rush/events" element={<h1>Rush Events</h1>} />
                    <Route path="/rush/faq" element={<h1>Rush FAQ</h1>} />
                    <Route path="/apply" element={<h1>Apply</h1>} />
                </Routes>
            </main>
        </>
    );
}

