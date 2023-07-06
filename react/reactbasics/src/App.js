import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Customer from './components/Customer';
import Users from './components/Users';
import CovidDashboard from './components/CovidDashboard';

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
       */}
      <CovidDashboard/>
    </div>
  );
}

export default App;
