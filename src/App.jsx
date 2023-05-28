import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Navbar from "./components/_partials/NavBar";
import Footer from "./components/_partials/Footer";
import Acerca from "./pages/Acerca";
import Caracteristicas from "./pages/Caracteristicas";
import Personal from "./pages/Personal";
import Menu from "./pages/Menu";
import Reservas from "./pages/Reservas";
import Paginas from "./pages/Paginas";
import Contactenos from "./pages/Contactenos";
import Index from "./pages/Index";

function App() {
  return (
      <BrowserRouter>
      <Navbar/>

      <Routes>
      <Route path="/" element={<Index />} />
        <Route path="/Acerca" element={<Acerca />} />
        <Route path="/Caracteristicas" element={<Caracteristicas />} />
        <Route path="/Personal" element={<Personal />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Reservas" element={<Reservas />} />
        <Route path="/Paginas" element={<Paginas />} />
        <Route path="/Contactenos" element={<Contactenos />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route path="/acerca/:id" element={<Acerca />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/:id" element={<Menu />} />
        <Route path="/caracteristicas" element={<Caracteristicas />} />
        <Route path="/caracteristicas/:id" element={<Caracteristicas />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/personal/:id" element={<Personal />} />
        <Route path="/reservas" element={<Reservas />} />
        <Route path="/reservas/:id" element={<Reservas />} />
        <Route path="/paginas" element={<Paginas />} />
        <Route path="/paginas/:id" element={<Paginas />} />
        <Route path="/contactenos" element={<Contactenos />} />
        <Route path="/contactenos/:id" element={<Contactenos />} />

        <Route
          path="/counter"
          element={<Navigate replace to="/acerca"></Navigate>}
          path2="/counter"
          element2={<Navigate replace to="/caracteristicas"></Navigate>}
          path3="/counter"
          element3={<Navigate replace to="/personal"></Navigate>}
          path4="/counter"
          element4={<Navigate replace to="/menu"></Navigate>}
          path5="/counter"
          element5={<Navigate replace to="/reservas"></Navigate>}
          path6="/counter"
          element6={<Navigate replace to="/paginas"></Navigate>}
          path7="/counter"
          element7={<Navigate replace to="/contactenos"></Navigate>}
        ></Route>

        <Route path="*" element={<p>Acerca</p>}
               path2="*" element2={<p>Caracteristicas</p>}
               path3="*" element3={<p>Personal</p>}
               path4="*" element4={<p>Menu</p>}
               path5="*" element5={<p>Reservas</p>}
               path6="*" element6={<p>Paginas</p>}
               path7="*" element7={<p>Contactenos</p>} />
      </Routes>

      
      <Menu />
      <Menu />
      <Menu />

      <Footer />
      </BrowserRouter>
  );
}

export default App;
