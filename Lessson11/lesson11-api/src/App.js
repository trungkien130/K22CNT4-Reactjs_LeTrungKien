import { useEffect, useState } from 'react';
import './App.css';
import { instance } from './api/LtkApi';
import LtkCategoryList from './component/LtkCategoryList';
import LtkCategoryForm from './component/LtkCategoryForm';
import LtkCategoryEditForm from './component/LtkCategoryEditForm';

function App() {
  const [ltkCategoryList, setLtkCategoryList] = useState([])
  const [ltkCategoryIsForm, setLtkCategoryIsForm] = useState(false)
  const [ltkCategoryEditForm, setLtkCategoryEditForm] = useState(false)
  const [editCategory, setEditCategory] = useState(null);

  const handleEditClick = (Category) => {
    setEditCategory(Category);
  };

  const handleEditSuccess = () => {
    setEditCategory(null);
  };

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
      <LtkCategoryList renderLtkCategories={ltkCategoryList} openForm={setLtkCategoryIsForm} getCategories={getCategories} onEditClick={handleEditClick} openEditForm={setLtkCategoryEditForm} />
      {ltkCategoryIsForm && <LtkCategoryForm closeForm={setLtkCategoryIsForm} getCategories={getCategories} />}
      {ltkCategoryEditForm && <LtkCategoryEditForm closeForm={setLtkCategoryEditForm} getData={getCategories} ltkCategory={editCategory} onEditSuccess={handleEditSuccess} />}
    </div>
  );
}

export default App;
