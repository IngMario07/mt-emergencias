import { Routes, Route } from 'react-router-dom'

import ScrollToTop from './components/layout/ScrollToTop'

import Home from './pages/Home'
import Nosotros from './pages/Nosotros'
import Servicios from './pages/Servicios'
import Certificaciones from './pages/Certificaciones'
import Galeria from './pages/Galeria'
import Contacto from './pages/Contacto'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/nosotros" element={<Nosotros />} />

        <Route path="/servicios" element={<Servicios />} />

        <Route
          path="/certificaciones"
          element={<Certificaciones />}
        />

        <Route
          path="/galeria"
          element={<Galeria />}
        />

        <Route
          path="/contacto"
          element={<Contacto />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>
    </>
  )
}

export default App