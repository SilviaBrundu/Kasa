import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import OfferFile from "./pages/OfferFile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/OfferFile/:id" element={<OfferFile />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  // Les composants BrowserRouter, Routes et Route permettent de gérer l'affichage des différentes pages.
  // path contient l’URL dans notre navigateur qui dirigera vers le composant ;
  // element va permettre de sélectionner le composant à afficher. 
  // path="*" permet de conduire à ma page d’erreur.
  );
}
export default App;
