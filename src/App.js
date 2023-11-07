import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
    </Routes>
  </BrowserRouter>
  // path contient l’URL dans notre navigateur qui dirigera vers le composant ;
  // element va permettre de sélectionner le composant à afficher. 
  // Les composants BrowserRouter, Routes et Route permettent de gérer l'affichage des différentes pages.
  );
}
export default App;
