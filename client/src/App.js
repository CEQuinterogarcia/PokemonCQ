import {Routes, Route} from "react-router-dom";
import logo from './logo.svg';
//import './App.css';
import Home from './pages/home/home';
import Create from "./pages/create/create";
import Detail from "./pages/detail/detail";
import About from "./pages/about/about";
import LandingPage from "./pages/landing/landing";

function App() {
  return (
    <div className="App">
       <Routes>
         <Route exact path='/home' element={<Home/>}/>
         <Route exact path='/' element={<LandingPage/>}/>
         <Route exact path='/about' element={<About/>}/>
         <Route path='/create' element={<Create/>}/>
         <Route path='/detail/:id' element={<Detail/>}/>
        
       </Routes>
       
    </div>
  );
}

export default App;
