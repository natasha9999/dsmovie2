import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListaDeFilmes from "Pages/ListaDeFilmes";
import Formulario from "Pages/Formulario";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ListaDeFilmes />} />
        <Route path="/formulario">
          <Route path=":movieId" element={<Formulario />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
