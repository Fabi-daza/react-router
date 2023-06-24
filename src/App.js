import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Menu from './components/navbar/Navbar';
import Home from './components/home/Home';
import Contact from './components/contact/Contact'


function App() {
  return (
      <div className="App">
        <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/contact' element={<Contact />} />
          <Route path='/' element={<Home />} />
        </Routes>
        
        </BrowserRouter>
      </div>
    
  );
}

export default App;
