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
  const customers=[
    {
        id:1,
        name:'Balaji',
        location:'Chennai'
    },
    {
        id:2,
        name:'Pawar',
        location:'Mumbai'
    },
    {
        id:3,
        name:'Himanth Biswa Sarma',
        location:'Gauhati'
    },
    {
        id:4,
        name:'Ajith Singh',
        location:'Chandigarh'
    }

]
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
       <EmployeeMaster/>  
       */}
          <Customer custlist={customers}></Customer>
          
      
    </div>
  );
}

export default App;
