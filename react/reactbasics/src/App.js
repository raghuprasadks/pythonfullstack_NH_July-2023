import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Customer from './components/Customer';
import Users from './components/Users';
import CovidDashboard from './components/CovidDashboard';
import SimpleInterest from './components/SimpleInterest';
import UseEffectDemo from './components/UseEffectDemo';
import PostAPI from './components/PostAPI';
import EmployeeMaster from './components/EmployeeMaster';

function App() {
  let course = "html,css,java script"
  let courses = ["html","css","java script"]
  return (
    <div className="App">
      {/**
      <h1>Welcome to React</h1>
      <h2>I am learning react</h2>
      <h2>I have learnt {courses.length} i,e {course}</h2>
      <Content/>
      <Users/>
      <Header/>      
      <Customer/>
      
      <Footer></Footer>
      <CovidDashboard/>
      <SimpleInterest/>
       <UseEffectDemo/>
       <PostAPI/> 
       */}

          <EmployeeMaster/>  
      
    </div>
  );
}

export default App;
