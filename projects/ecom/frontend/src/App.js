import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css';
import Layout from './components/layout';
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import SignUp from "./components/SignUp";
import Login from "./components/Login";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}></Route>
        <Route path="aboutus" element={<AboutUs/>}></Route>
        <Route path="signup" element={<SignUp/>}></Route>
        <Route path="login" element={<Login/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
