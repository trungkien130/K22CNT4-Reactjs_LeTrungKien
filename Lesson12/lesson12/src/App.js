import './App.css';
import { useEffect, useState } from 'react'
import { instance } from './API/LtkApi';
import LtkListUser from './Component/LtkListUser';
function App() {
  const [dataUser, setDataUser] = useState([])
  const ltkGetUserList = async () => {
    try {
      const ltkResponse = await instance.get('/LtkUser')
      setDataUser(ltkResponse.data)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  console.log(dataUser.data)
  useEffect(() => {
    ltkGetUserList()
  }, [])
  return (
    <div className="container border my-3">
      <LtkListUser dataUser={dataUser} />
    </div>
  );
}

export default App;
