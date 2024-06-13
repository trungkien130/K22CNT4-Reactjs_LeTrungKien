import React, { useEffect, useState } from 'react';
import './App.css';
import LtkStudentList from './component/LtkStudentList';
import { instance } from './Api/LtkAPI';
import LtkStudentCreate from './component/LtkStudentCreate';
import LtkStudentEdit from './component/LtkStudentEdit';

function App() {
  const [editStudent, setEditStudent] = useState(null);
  const [ltkStudentList, setLtkStudentList] = useState([]);

  const ltkGetStudent = async () => {
    try {
      const response = await instance.get("/LtkSTUDENTS");
      setLtkStudentList(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    ltkGetStudent();
  }, []);

  const handleEditClick = (student) => {
    setEditStudent(student);
  };

  const handleEditSuccess = () => {
    setEditStudent(null);
    ltkGetStudent();
  };

  return (
    <div className="App">
      <LtkStudentList
        renderLtkStudentList={ltkStudentList}
        setLtkStudentList={setLtkStudentList}
        onEditClick={handleEditClick}
      />
      <hr />
      <LtkStudentCreate />
      <hr />
      {editStudent && (
        <LtkStudentEdit
          ltkStudent={editStudent}
          onEditSuccess={handleEditSuccess}
        />
      )}
    </div>
  );
}

export default App;
