// import logo from './logo.svg';
import './App.css';
import Class_LeTrungKien from './component/Class_LeTrungKien';
import Func_JSX_LeTrungKien from './component/Func_JSX_LeTrungKien';

function App() {
  return (
    <div className="App">
      <Func_JSX_LeTrungKien/>
      <Func_JSX_LeTrungKien fullName="Lê Trung Kiên EM" age="20"/>
      <Class_LeTrungKien/>
      <hr/>
      <Class_LeTrungKien infor="Học ReactJS" time="11"/>
    </div>
  );
}

export default App;
