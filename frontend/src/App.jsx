import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import Domains from "./pages/Domains/Domains";
import Apply from "./pages/Apply/Apply";
import Sponsor from "./pages/Sponsor/Sponsor";
import Synchron from "./pages/Synchron/Synchron";

function App() {
  return (
    <BrowserRouter>

      <div className="site-content">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/domains" element={<Domains />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/sponsor" element={<Sponsor />} />
            <Route path="/synchron" element={<Synchron />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;