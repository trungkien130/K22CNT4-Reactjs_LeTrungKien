import logo from './logo.svg';
import './App.css';
import LTK from './component/profile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>  
      </header>
    <LTK/>
    <LTK email="kienlee155@gmail.com" phone="0913088169"/>
    <LTK  email="kienlee155@gmail.com" phone="0913088169" class="CNT4"/>
    </div>
    
  );
}

export default App;
