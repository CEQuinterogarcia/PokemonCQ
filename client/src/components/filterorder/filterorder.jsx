import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { clearFilter, filterByCreate, OrderAttack
   , filterByTypes, getTypes, postPokemons, 
   filterByTypesdos} from '../../redux/actions/action';

function FilterOrder() {
   const dispatch = useDispatch();
   const allTypes= useSelector((state)=> state.allTypes);
   //console.log(allTypes);
   useEffect(()=>{
     dispatch(getTypes());
   }, []) 
   function handleChange(e) {
      e.preventDefault()
      console.log(e.target.value);
     // setsearchString(e.target.value)
   }
   const handlefilterCreate = (evento) => {
         console.log(evento.target.value);
        dispatch(filterByCreate(evento.target.value))
    }

   const handlefilter = (evento) => {
         console.log(evento.target.value);
         
        dispatch(filterByTypes(evento.target.value))
    
   }
  
   let filterdos = [];

   const handlefilterdos = (evento) => {
      console.log(evento.target.value);
    // Verifica si ya hay dos tipos seleccionados
    
      // Si ya hay dos tipos seleccionados, no permitas seleccionar más
      dispatch(filterByTypesdos(evento.target.value));
 
     

}

// orden por ataque y por nombre
   const handleOrderAttack = (evento) => {
    console.log(evento.target.value);
   dispatch(OrderAttack(evento.target.value))

}

  
 
    return (
       <div>
          <label for="pokemo">Filtros:</label>
          <select  name="orderAtaque" 
          onChange={handleOrderAttack}
          defaultValue={'orderAtaque'}>
          <option value="Orden" > Orden Ataque</option>
          <option value="Menor"> Menor a Mayor </option>
          <option value="Mayor"> Mayor a Menor </option>
          <option value="As"> Ascendente </option>
          <option value="De"> Descedente </option>
          </select>
          <select  name="Created" 
          onChange={handlefilterCreate}
          defaultValue={'orderPokemons'}>
          <option value="Create" > API-DB </option>
          <option value="false"> API </option>
          <option value="true"> DATABASE </option>
          </select>
          <select
           name="typesName"
           onChange={handlefilter}
           defaultValue={'selectedType'} // Puedes establecer el valor predeterminado si es necesario
           >
           <option value="Types" > Sin Filtro</option>
           {allTypes?.map((type) => (
           <option key={type.id} value={type.name}>
           {type.name}
           </option>
           ))}
         </select>
         {/* <select
           name="typesNamedos"
           onChange={handlefilterdos}
           defaultValue={'selectedType'} // Puedes establecer el valor predeterminado si es necesario
           >
           <option value="Types" > Sin Filtro</option>
           {allTypes?.map((type) => (
           <option key={type.id} value={type.name}>
           {type.name}
           </option>
           ))}
         </select> */}
       </div>
    );
 }
 export default FilterOrder