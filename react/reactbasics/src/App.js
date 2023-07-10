import logo from './logo.svg';
import './App.css';
import { useState, createContext, useContext } from "react";
import Employee from './components/Employee';
import Car from './components/CarClass';

const UserContext = createContext();
/** 
function App() {
  const [user, setUser] = useState("Jesse Hall");
  return (
    
    <div>
      <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 info={user}></Component2>
      </UserContext.Provider>
    </div>
  );
}

function Component2(props) {
 let name = props.info
  return (
    <>
      <h1>{name}</h1>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}
function Component3() {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );
}

function Component5() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}
**/

function App() {
    const [employees,setEmployees]=useState([])

    const saveEmployeeHandler=(code,name,dept,sal)=>{
        let emp = {code:code,name:name,dept:dept,sal:sal}
        console.log("emp #",emp)
        setEmployees([...employees,emp])
        console.log('employees ##',employees)    
    
      }

    return (
        <>
          <Employee saveEmployee={saveEmployeeHandler} empdata={employees}/>
         <Car/>
        </>
      );
}

export default App;
