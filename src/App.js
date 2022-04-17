import './App.css';
import { Route, Routes } from 'react-router-dom';
import Headers from './Components/Headers/Headers';
import Home from './Components/Home/Home';
import Register from './Components/Register/Register';
import Signin from './Components/Signin/Signin';
import Services from './Components/Services/Services';
import Blogs from './Components/Blogs/Blogs';
import About from './Components/About/About';


function App() {
  return (
    <div className="App">
      <Headers></Headers>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Register" element={<Register></Register>}></Route>
        <Route path="/Signin" element={<Signin></Signin>}></Route>
        <Route path="/Services" element={<Services></Services>}></Route>
        <Route path="/Blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/About" element={<About></About>}></Route>


      </Routes>
    </div>
  );
}

export default App;
