import logo from './logo.svg';
import img from './images/sier_b.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <img src={img} className="App-logo" alt="logo" />
        <p>
          Hola Compañeros.
        </p>
        <p>
        Actividad integradora. Sprint, el corazón de SCRUM
        </p>
        <a
          className="App-link"
          href="https://trello.com/invite/b/66c7abcb56e04fdad23ab712/ATTI2961928c18da95c6bf091b12b97e332aCB4271F2/sier"
          target="_blank"
          rel="noopener noreferrer"
        >
          Conoce los Sprits
        </a>
      </header>
    </div>
  );
}

export default App;
