import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Home/Home";
import Domains from "./pages/Domains/Domains";
import Projects from "./pages/Projects/Projects";
import Apply from "./pages/Apply/Apply";
import Sponsor from "./pages/Sponsor/Sponsor";
import Synchron from "./pages/Synchron/Synchron";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/domains" element={<Domains />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/sponsor" element={<Sponsor />} />
        <Route path="/synchron" element={<Synchron />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;