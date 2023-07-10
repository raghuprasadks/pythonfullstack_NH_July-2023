import logo from './logo.svg';
import './App.css';
import { useState, createContext, useContext } from "react";

const UserContext = createContext();

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
export default App;
