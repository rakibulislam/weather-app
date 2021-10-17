import logo from './logo.svg';
import './App.css';
import WeatherDataContainer from "./components/WeatherDataContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Weather App
        </a>
      </header>
      <WeatherDataContainer />
    </div>
  );
}

export default App;
