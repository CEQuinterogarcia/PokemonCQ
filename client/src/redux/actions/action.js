import axios from 'axios'

export const GET_POKEMONS = "GET_POKEMONS"

export function getPokemons() {
    return async (dispatch) => {
        try {
            const {data} = await axios.get("http://localhost:3001/pokemon")
            return dispatch({
                type: "GET_POKEMONS",
                payload: data
            })
        }
        catch (error) {
            console.log(error)
        }
    }
}  

export function getPokemonsName(name) {
    return async (dispatch) => {
        try {
           let {data} =  await axios.get(`http://localhost:3001/pokemon/?name=${name}`)
           return dispatch({
           type: "GET_BY_NAME",
           payload: data
         });
         
         
        } catch (error) {
         
         alert(error.message);
         return dispatch({
           type: "ERROR",
           payload: error.message,
         });
        } 
    }
  }

  export function getPokemonsById(id) {
    return async (dispatch) => {
        try {
           let {data} =  await axios.get(`http://localhost:3001/pokemon/${id}`)
          
           return dispatch({
           type: "GET_BY_ID",
           payload: data
         });
         
         
        } catch (error) {
         alert(error.message);
         return dispatch({
           type: "ERROR",
           payload: error.message,
         });
        } 
    }
  }
  export function postPokemons(pokemonData) {

    console.log(pokemonData);
    return async (dispatch) => {
    try {
      let newpokemon =  await axios.post('http://localhost:3001/pokemon/', pokemonData)
         
      console.log(newpokemon.data);
      return dispatch({
        type: "POST_POKEMONS",
        payload: newpokemon.data
      });
      
    } catch (error) {
      console.log(error);
      if (error.response) {
        console.log("errrooo");
        // El servidor respondió con un código de estado diferente de 2xx
        console.error('Error en la solicitud:', error.response.data);
        // Puedes acceder al mensaje de error enviado desde el servidor
        const errorMessage = error.response.data.error;
        // Aquí puedes manejar el mensaje de error, por ejemplo, mostrándolo en un alert
        alert('Hubo un error : ' + errorMessage);
        return dispatch({
          type: "POST_POKEMONS",
          payload: error.response.data.error
        });}
       
    } 

    }
  }

  export function getTypes() {
    return async (dispatch) => {
     try {
      let {data} =  await axios.get(`http://localhost:3001/types`)
         
      //console.log(data);
      return dispatch({
       type: "GET_TYPES",
       payload: data
      });
      
     } catch (error) {
      alert(error.message);
      return dispatch({
        type: "ERROR",
        payload: error.message,
      });
     } 
     }
  }
  export function clearDetail() {
    return async (dispatch) => {
        try {
                return dispatch({
                type: "CLEAR_DETAIL",
                payload: []
            })
        }
        catch (error) {
            console.log(error)
        }
    }
} 
export const changePage = (newPage) => {
  return {
    type: 'CHANGE_PAGE',
    payload: newPage,
  };
};

export const filterByTypes = (types) => {
  //console.log(genres);
   return {
       type: 'FILTER_TYPES',
       payload: types
   }
 }

 export const filterByTypesdos = (types) => {
  //console.log(genres);
   return {
       type: 'FILTER_TYPES_DOS',
       payload: types
   }
 }
 export const filterByCreate = (create) => {
  //console.log(genres);
   return {
       type: 'FILTER_CREATE',
       payload: create
   }
 }

 export const OrderAttack = (Attack) => {
  //console.log(genres);
  //console.log("pasooooo");
   return {
       type: 'ORDER_ATTACK',
       payload: Attack
   }
 }
 

 export const clearFilter = () => {
   //console.log("pasooooo");
    return {
        type: 'CLEAR_FILTER',
       
    }
  }