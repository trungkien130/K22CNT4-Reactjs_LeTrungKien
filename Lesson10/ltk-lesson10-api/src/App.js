import { useEffect, useState } from 'react';
import './App.css';
import LtkCategoryList from './Component/LtkCategoryList';
import { instance } from './Api/LtkAPI';
import LtkCategoryForm from './Component/LtkCategoryForm';

function App() {
  const [ltkCategoryList, setLtkCategoryList] = useState([])
  const [ltkCategoryIsForm, setLtkCategoryIsForm] = useState(false)
  const getCategories = async () => {
    try {
      const ltkCateRespornse = await instance.get('/LtkCategory')
      setLtkCategoryList(ltkCateRespornse.data)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    getCategories();
  }, []);
  console.log(ltkCategoryList)
  return (
    <div className="container border my-3">
      <h1>Lê Trung Kiên - Call Api</h1>
      <LtkCategoryList renderLtkCategories={ltkCategoryList} openForm={setLtkCategoryIsForm} />
      {ltkCategoryIsForm && <LtkCategoryForm closeForm={setLtkCategoryIsForm} getCategories={getCategories} />}
    </div>
  );
}

export default App;
