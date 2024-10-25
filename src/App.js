// App.js
import './App.css';
import img from './images/sier_b.png'; // Logo SIER
import pdf from './images/procesoAER.pdf'; 
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Preguntas from './components/Preguntas.js';
import Contactos from './components/Contactos.js';

function App() {
  return (
    <Router>
      <div className="container">
        <header className="header">
          <a href="/" className="logo-link">
            <img src={img} alt="Logo SIER" className="logo" />
          </a>
          <nav className="titles-nav">
            <a className="titulos" href={pdf} target="_blank" rel="noopener noreferrer">
              <h2>Proceso de Acta E-R</h2>
            </a>
            <Link to="/preguntas" className="titulos">
              <h2>Preguntas frecuentes</h2>
            </Link>
            <Link to="/contactos" className="titulos">
              <h2>Contactos</h2>
            </Link>
          </nav>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/preguntas" element={<Preguntas />} />
            <Route path="/contactos" element={<Contactos />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>© 2024 INEGI - Todos los derechos reservados</p>
        </footer>
      </div>
    </Router>
  );
}

const Home = () => (
  <>
    <h1>Sistema Institucional de Entrega-Recepción</h1>
    <p>¿Concluyes tu empleo, cargo o comisión?</p>
    <p>Consulta aquí todo lo relacionado con las Actas Entrega - Recepción</p>
    <p>
      Preferentemente, los participantes deben contar con FIRMA ELECTRÓNICA
      AVANZADA (e.firma) y la aplicación institucional para firmar.
    </p>
    <p>Si no tienes la aplicación, descárgala aquí.</p>

    <a
      href="https://trello.com/invite/b//ATTI2961928c18da95c6bf091b12b97e332aCB4271F2/sier"
      target="_blank"
      rel="noopener noreferrer"
      className="btn-link"
    >
      Acceder
    </a>
  </>
);

export default App;
