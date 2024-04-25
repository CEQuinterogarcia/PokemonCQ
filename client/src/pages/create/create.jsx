import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import validation from './validation';
import { getTypes, postPokemons } from '../../redux/actions/action';

import './create.styles.css';

function Create() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const allTypes= useSelector((state)=> state.allTypes);
  const PokemonNew= useSelector((state)=> state.PokemonNew);
  const [formIsValid, setFormIsValid] = useState(false);
  //console.log(allTypes);
  const [pokemonData, setpokemonData] = useState({
    name: '',
    hp: '',
    attack: '',
    defense: '',
    speed: '',
    height: '',
    weight: '',
    image: '',
    types: [],
});

const [errors, setErrors] = useState({
    name: '',
    hp: '',
    attack: '',
    defense: '',
    speed: '',
    height: '',
    weight: '',
    image: '',
});

useEffect(() => {
  dispatch(getTypes());
  const isValid = Object.values(errors).every(error => !error) &&
                  Object.values(pokemonData).every(value => value !== '');
  setFormIsValid(isValid);
}, [errors, pokemonData]);

  

const [typess, settypess] = useState([]);

const handleChange =(evento)=>{
  // const namefor = evento.target.name;
  // const valu = evento.target.value;
  const nameEvento= evento.target.name;
  const valEvento = evento.target.value;
  if (nameEvento=== "typesName") {
    const {checked} = evento.target;
    const typee = evento.target.value;
    console.log(typee);
    if (checked) {
     
      settypess([...typess, typee])
    
      setpokemonData((pokemonData) => ({
        ...pokemonData, 
        types: [...pokemonData.types, typee]
      
      }))   
    }
  
  }else{
    setpokemonData((prevpokemonData)=>({
      ...prevpokemonData,
      [nameEvento]: valEvento,
    }));
    setErrors(validation({...pokemonData,[nameEvento]:
      valEvento}))
      console.log(pokemonData.types);
    }
  }
  



const handleSubmit =(evento)=>{
 
  evento.preventDefault();
  if (errors.name ||
    errors.hp ||
    errors.attack ||
    errors.defense ||
    errors.speed ||
    errors.height ||
    errors.weight ||
    errors.image)
  {
    
    window.alert('Debe completar todos los campos de forma correcta')
  } else if(typess.length === 0) {
        evento.preventDefault();
        window.alert('debe escoger almenos un tipo') 
  
    }else
    {evento.preventDefault();
      dispatch(postPokemons(pokemonData)); 
        console.log(PokemonNew);
            
      
        //  window.alert(error)
        setpokemonData({
        name: '',
        hp: '',
        attack: '',
        defense: '',
        speed: '',
        height: '',
        weight: '',
        image: '',
        types: [],
       });
      
      
   }




}



    return (
        <div>
           <div className='containerbutton'> 
              <button  onClick={() => { navigate('/home') }}>HOME</button>
            </div> 
        <div className="form-containercreate">
          
          <h2>CREACION DE POKEMON</h2>
          <form onSubmit={handleSubmit }> 
          <div className='form-group'>
            <label htmlFor="Nombre del Pokemon"  >
                Nombre del Pokemon:
                <input 
                className='text'
                type="text" 
                placeholder="Ingrese un Nombre"
                id="name"
                name="name"
                value={pokemonData.name}
                onChange={handleChange}/>
            </label >
          </div>
          <p style={{color: "red" }}>{errors.name}</p>
          <div className='form-group' >
            {/* <p style={{color: "red" }}>{errors.email}</p> */}
            <label htmlFor="Imagen">
                URL de Imagen:
                <input type="text"
                className='text'
                placeholder="Ingrese Url Imagen"
                id="image"
                name="image"
                value={pokemonData.image} 
                onChange={handleChange}/>
            </label>
          </div> 
          <p style={{color: "red" }}>{errors.image}</p>
          <div className='form-group' >
            <label htmlFor="Vida del Pokemon">
                Vida del Pokemon:
                <input 
                className='text'
                type="text" 
                placeholder="Nivel de Vida"
                id="hp"
                name="hp"
                value={pokemonData.hp}
                onChange={handleChange}/>
            </label >
          </div>
          <p style={{color: "red" }}>{errors.hp}</p>
          <div className='form-group' >
            <label htmlFor="Ataque del Pokemon">
                Ataque del Pokemon:
                <input 
                className='text'
                type="text" 
                placeholder="Nivel de Ataque"
                id="attack"
                name="attack"
                value={pokemonData.attack}
                onChange={handleChange}/>
            </label >
          </div  >
          <p style={{color: "red" }}>{errors.attack}</p>
          <div className='form-group' >
            <label htmlFor="Defensa del Pokemon">
                Defensa del Pokemon:
                <input 
                className='text'
                type="text" 
                placeholder="Nivel de Defensa"
                id="defense"
                name="defense"
                value={pokemonData.defense}
                onChange={handleChange}/>
            </label >
          </div>
          <p style={{color: "red" }}>{errors.defense}</p>
          <div className='form-group' >
            <label htmlFor="Velocidad del Pokemon">
                Velocidad del Pokemon:
                <input 
                className='text'
                type="text" 
                placeholder="Nivel de Velocidad"
                id="speed"
                name="speed"
                value={pokemonData.speed}
                onChange={handleChange}/>
            </label >
          </div>
          <p style={{color: "red" }}>{errors.speed}</p>
          <div className='form-group' >
            <label htmlFor="Altura del Pokemon">
                Altura del Pokemon:
                <input 
                className='text'
                type="text" 
                placeholder="Altura"
                id="height"
                name="height"
                value={pokemonData.height}
                onChange={handleChange}/>
            </label >
          </div>
          <p style={{color: "red" }}>{errors.height}</p>
          <div className='form-group' >
            <label htmlFor="Peso del Pokemon">
                Peso del Pokemon:
                <input 
                className='text'
                type="text" 
                placeholder="Peso"
                id="weight"
                name="weight"
                value={pokemonData.weight}
                onChange={handleChange}/>
            </label >
          </div>
          <p style={{color: "red" }}>{errors.weight}</p>
          <label htmlFor="Tipos de Pokemon">
                Tipos de Pokemon:
                </label >     
          <div>
          
            {/* <p style={{color: "red" }}>{errors.email}</p> */}
           {allTypes?.map((type) => (
            <span key={type.id}>
              {type.name}  
                
                <input 
                type="checkbox"
                // placeholder="Ingrese Rating"
                id="types"
                name="typesName"
                value={type.id} 
                onChange={handleChange}
                />
              
            </span>
            ))}
             
          </div> 
          {/* <button disabled=''>CREAR POKEMON</button> */}
           <button disabled={!formIsValid}>CREAR POKEMON</button> 
          {/* <button>CREAR POKEMON</button> */}
          </form> 
        </div>
        </div>
      ); 
}

export default Create;