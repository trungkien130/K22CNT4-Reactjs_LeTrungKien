
import { useEffect, useState } from 'react';
import './App.css';
import LtkStudentList from './component/LtkStudentList';
import axios from 'axios';
import LtkStudentCreate from './component/LtkStudentCreate';
import LtkStudentEdit from './component/LtkStudentEdit';

function App() {
  const [editStudent, setEditStudent] = useState(false);
  const [ltkStudentList, setLtkStudentList] = useState([]);
  const ltkGetStudent = async () => {
    try {
      const response = await axios.get("https://666a97027013419182cfef1c.mockapi.io/api/ltkv1/LtkSTUDENTS");
      setLtkStudentList(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    ltkGetStudent()
  }, [])
  return (
    <div className="App">
      <LtkStudentList renderLtkStudentList={ltkStudentList} setLtkStudentList={setLtkStudentList} setEditStudent={setEditStudent} />
      <hr />
      <LtkStudentCreate />
      <hr />
      {editStudent && <LtkStudentEdit ltkStudentList={ltkStudentList} />}
    </div>
  );
}

export default App;
