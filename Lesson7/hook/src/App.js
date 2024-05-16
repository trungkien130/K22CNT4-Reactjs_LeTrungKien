import './App.css';
import LtkuseState from './components/LtkuseState';
import LtkUseEffect from './components/LtkUseEffect';
import LtkUseContext from './components/LtkUseContext';
function App() {
  return (
    <div className="container border mt-3">
      <h1 className='text-center'>Lê Trung Kiên - Hook</h1>
      <hr />
      <LtkuseState />
      <hr />
      <LtkUseEffect />
      <hr />
      <LtkUseContext />
    </div>
  );
}

export default App;
