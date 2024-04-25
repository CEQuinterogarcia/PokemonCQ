


import Card from '../card/card';
import FilterOrder from '../filterorder/filterorder';
import SearchBar from '../searchbar/searchbar';
import './navbar.styles.css';
import { Link } from "react-router-dom";


function Navbar() {
    return (
        <div className='container'>
        <div className="menu">
     
       <Link to='/home' ><button>Home</button></Link>   
       <Link to = '/create' ><button>Crear Juego</button></Link>
       <SearchBar/>
       <FilterOrder/>
       {/* <SearchBar onSearch={onSearch} /> */}
       </div>

        
        </div>
      ); 
}

export default Navbar;