import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Nav from "./Nav";
import Missing from "./Missing";
import Footer from "./Footer";
import { Routes, Route } from 'react-router-dom';
function App() {
  
  return (
    <div className="App">
      
        <Nav/>
        
        <Routes>
          <Route path='/' element ={<Home/>} />
          <Route path='/about' element ={<About/>} />
          <Route path='/contact' element ={<Contact/>} />
          <Route path='*' element ={<Missing/>} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
