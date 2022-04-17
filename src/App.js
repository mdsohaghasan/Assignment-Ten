import './App.css';
import { Route, Routes } from 'react-router-dom';
import Headers from './Components/Headers/Headers';
import Home from './Components/Home/Home';
import Register from './Components/Register/Register';
import Signin from './Components/Signin/Signin';


function App() {
  return (
    <div className="App">
      <Headers></Headers>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Register" element={<Register></Register>}></Route>
        <Route path="/Signin" element={<Signin></Signin>}></Route>

      </Routes>
    </div>
  );
}

export default App;
