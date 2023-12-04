import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { Blockchain } from "./pages/Blockchain";
import { Vendas } from "./pages/Vendas";
import { Estoque } from "./pages/Estoque";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="Vendas" element={<Vendas />} />
          <Route exact path="Estoque" element={<Estoque />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="Blockchain" element={<Blockchain />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;