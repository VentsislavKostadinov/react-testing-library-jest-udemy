import logo from './logo.svg';
import './App.css';
import ColorButton from "./ColorButton/ColorButton";

function App() {
  return (
    <div className="App">
        <ColorButton/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p data-testid="paragraph">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">Learn React</a>
      </header>
    </div>
  );
}

export default App;
