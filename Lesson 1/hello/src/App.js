import { useState } from 'react';
import './App.css';
import Firstperson from './component/firstperson';
import Secondperson from './component/secondperson';
function App() {
  const [mess1,setMess1]=useState('')
  const [mess2,setMess2]=useState('')
  console.log (mess1)
  return (
    <div>
    <Firstperson setMess1={setMess1} messFrom2={mess2}/>
    <Secondperson messFrom1={mess1} setMess2={setMess2}/>
    
    </div>
    
  );
}

export default App;
