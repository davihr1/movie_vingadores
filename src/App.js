import logo from './assets/logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo avangers" />

        <p>☪  10.0</p>
      </header>

      <div className="App-titles">
        <h2>
          Vingadores
        </h2>
        <span>ultimato</span>

      </div>
        <small></small>

        <div className="App-button">
          <a href="https://www.disneyplus.com" target="_blank">Trailer</a>
        </div>
    </div>
  );
}

export default App;
