import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

function App() {
  let course = "html,css,java script"
  let courses = ["html","css","java script"]
  return (
    <div className="App">
      <h1>Welcome to React</h1>
      <h2>I am learning react</h2>
      <h2>I have learnt {courses.length} i,e {course}</h2>
      <Header/>
    </div>
  );
}

export default App;
