// App.js
import './App.css';
import img from './images/sier_b.png'; // Ruta correcta de tu imagen

function App() {
  return (
    <div className="container">
      <header className="header">
        <img src={img} alt="Logo SIER" className="logo" />
        <h1>Hola Compañeros</h1>
        <p>Actividad integradora. Sprint, el corazón de SCRUM</p>
      </header>

      <main className="main-content">
        <a
          href="https://trello.com/invite/b/66c7abcb56e04fdad23ab712/ATTI2961928c18da95c6bf091b12b97e332aCB4271F2/sier"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-link"
        >
          Conoce los Sprints
        </a>
      </main>

      <footer className="footer">
        <p>© 2024 INEGI - Todos los derechos reservados</p>
      </footer>
    </div>
  );
}

export default App;
