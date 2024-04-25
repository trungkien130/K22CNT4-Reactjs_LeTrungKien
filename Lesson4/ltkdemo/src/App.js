import './App.css';
import React, { useState } from 'react';
import Ltk_Eventform1 from './component/Ltk_EventForm1';
import Ltk_EventForm2 from './component/Ltk_EventForm2';
import Ltk_Eventform3 from './component/Ltk_Eventform3';
import Ltk_EventForm4 from './component/Ltk_EventForm4';
function App() {

  return (
    < div>
      <Ltk_Eventform1/>
      <Ltk_EventForm2/>
      <Ltk_Eventform3/>
      <Ltk_EventForm4 name={"Lê Trung Kiên"}/>
    </div>

  );
}

export default App;
