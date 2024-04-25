import './App.css';
import LTK_Class from './components/LTK_Class';
import LTK_Func from './components/LTK_Func';

function App() {
  const users = {
      user:"k22cnt4",
      password:"123456a@",
      Fullname:"Lê Trung Kiên",
      firstname:"Lê Trung",
      lastname:"Kiên"
  }
  function forMatname(user){
          return(
          <h2>Xin chào {user.firstname} {user.lastname}</h2>
          )
  }
  return (
      <div className="App">
        <div>
        <p>{forMatname(users)}</p>
      <p>FullName:{users.firstname} {users.lastname}</p>
        </div>
      <div> 
        <LTK_Func/>

        <LTK_Func username="ltk" Fullname="Lê Trung Kiên" age="20" />
      </div>
      <div>
        <LTK_Class/>

        <LTK_Class company="Fit-NTU - K22CNT4" course="ReactJS"/>
      </div>
    </div>
  );
}

export default App;
