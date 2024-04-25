
const initialState = {
    allPokemons: [],
    allPokemonsCopy: [],
    pokemons: [],
    types: [],
    filterCopy: [],
    orderCopy: [],
    allTypes: [],
    PokemonNew: [],
    detail: [],
    pokemonbyId: [],
    currentPage: 1,
    itemsPerPage: 12,
    totalItems: 230,
    totalpokemons: 0
};

function rootReducer(state = initialState, { type, payload }) {
    switch (type) {
        case "GET_POKEMONS":

        return {
            ...state,
            allPokemons: payload,
            allPokemonsCopy: payload,
            currentPage: 1,
            totalpokemons: payload.length,
            filterCopy: payload
           // pokemonbyId: [],
        }
        case "GET_BY_NAME":
            return {
                ...state,
                allPokemons: payload,
                currentPage: 1,
                totalpokemons: payload.length
            };

        case "GET_BY_ID":
            return {
                ...state,
                pokemonbyId: payload,
            };

        case "GET_TYPES":
            return {
                ...state,
                allTypes: payload,
            };

        case "POST_POKEMONS":
            state.PokemonNew = [];
            return {
                ...state,
                PokemonNew: payload,
            };

        case "CLEAR_DETAIL":
            return {
                ...state,
                pokemonById: payload,
            };

        case 'CHANGE_PAGE':
            return { ...state, currentPage: payload };

        case "CLEAR_FILTER":
            return {
                ...state,
                allPokemons: state.allPokemonsCopy,
                currentPage: 1,
                totalpokemons: state.allPokemonsCopy.length,
            };

        case 'FILTER_TYPES':
            const allPokemonscopy = state.allPokemonsCopy
            let typesFilter = payload !== 'Types' ? allPokemonscopy.filter(pokemon => pokemon.types.includes(payload)) : state.allPokemonsCopy;
            return {
                ...state,
                allPokemons: typesFilter,
                filterCopy: typesFilter,
                currentPage: 1,
                totalpokemons: typesFilter.length,
            };

        case 'FILTER_CREATE':
            const pokemons = state.filterCopy;
            let createFilter = payload !== 'Create' ? pokemons.filter(pokemon => pokemon.create === payload) : pokemons;
            return {
                ...state,
                allPokemons: createFilter,
                currentPage: 1,
                totalpokemons: createFilter.length,
            };

        case 'ORDER_ATTACK':
            let pokOrder = [];
            if (payload !== 'Orden') {
                pokOrder = [...state.allPokemons];
                if (payload === 'As') {
                    pokOrder.sort((a, b) => a.name.localeCompare(b.name));
                } else if (payload === 'De') {
                    pokOrder.sort((a, b) => b.name.localeCompare(a.name));
                } else if (payload === 'Menor') {
                    pokOrder.sort((a, b) => a.attack - b.attack);
                } else if (payload === 'Mayor') {
                    pokOrder.sort((a, b) => b.attack - a.attack);
                }
            }
            return {
                ...state,
                allPokemons: payload === 'Orden' ? state.allPokemons : pokOrder,
                currentPage: 1,
                totalpokemons: pokOrder.length,
            };

        default:
            return state;
    }
}

export default rootReducer;


///////////////////////////////////////////////////


// const initialState = {
//     allPokemons: [],
//     allPokemonscopy: [],
//     pokemons: [],
//     types: [],
//     filtercopy: [],
//     ordencopy: [],
//     allTypes: [],
//     PokemonNew: [],
//     detail: [],
//     pokemonbyId: [],
//     currentPage: 1,
//     itemsPerPage: 12, // Número de elementos por página
//     totalItems: 230,
//     totalpokemons: 0

// }


// function rootReducer(state = initialState, { type, payload }) {
//     switch (type) {
//         case "GET_POKEMONS":

//         return {
//             ...state,
//             allPokemons: payload,
//             allPokemonscopy: payload,
//             currentPage: 1,
//             totalpokemons: payload.length
//            // pokemonbyId: [],
//         }
//         case "GET_BY_NAME":

//         return {
//             ...state,            
//             allPokemons: payload,
//             currentPage: 1,
//             totalpokemons: payload.length
            
//         }
//         case "GET_BY_ID":

//         return {
//             ...state,
//             pokemonbyId: payload,
//         }
//         case "GET_TYPES":
//             // console.log("entrooo");
//             // console.log(payload);
//              return{
//                ...state,
//                allTypes: payload,
                  
//                } ; 
//         case "POST_POKEMONS":
//             // console.log("entrooo");
//              console.log(payload);
//              return{
//              ...state,
//              PokemonNew: payload,
//              } ; 
//         case "CLEAR_DETAIL":
        
//         return {
//             ...state,
//             pokemonbyId: payload,
//         }
//         case 'CHANGE_PAGE':
//             return { ...state, currentPage: payload };  

//         case "CLEAR_FILTER":
//             console.log("entrooo");
//            // console.log(payload);
//             return{
//               ...state,
//               allPokemons: state.allPokemonsCopy,
//               currentPage: 1,
//               totalpokemons: state.allPokemonsCopy.length,
//             } ;  

//         case 'FILTER_TYPES': {
//            // console.log("entrooo");
//            console.log(payload);
//             let sortedPokemons = [...state.allPokemons]
//             let pokorder = [];

    
//             let typesfilter = []
//             if (payload !='Types') {
        
//             state.allPokemons?.map(pokemon => {  //state.allPokemonscopy?.map(pokemon => {
//                // console.log(pokemon.name);
//                 if (pokemon.types.length>0) {
//                   //  const types1 = pokemon.types
//                     if(pokemon.types?.includes(payload)){
//                         console.log(pokemon.types);
//                        typesfilter.push(pokemon);
//                     }
                  
//                 }
//             });
//            }
//                 return {
//                   ...state,
                
//                   allPokemons: payload === "Types" ? state.allPokemonscopy : typesfilter,
//                   currentPage: 1,
//                   totalpokemons: payload === "Types" ? state.allPokemonscopy.length : typesfilter.length,
//                  // filtercopy: payload === "Types" ? state.allPokemonscopy : typesfilter,
//                 };
                
//             }  
//             case 'FILTER_TYPES_DOS': {
//               // console.log("entrooo");
//               let sortedPokemons = [...state.allPokemons];
//               let typesfilter = [];
          
//               if (payload !== 'Types') {
//                   typesfilter = sortedPokemons.filter(pokemon => pokemon.types.includes(payload));
//               }
//               console.log(typesfilter);
//               return {
//                   ...state,
//                   allPokemons: payload === 'Types' ? state.allPokemonscopy : typesfilter,
//                   currentPage: 1,
//                   totalpokemons: payload === 'Types' ? state.allPokemonscopy.length : typesfilter.length,
//                 };
              
//              }       
//          case 'FILTER_CREATE': {
//              // console.log("entrooo");
//              console.log(payload);
//              state.filtercopy= state.allPokemons;
//              let createFilter = []
//             if (payload != 'Create') {
//                 state.allPokemons?.map(pokemon => {    //state.allPokemonscopy?.map(pokemon => {
//                     // console.log(payload);
//                       if (pokemon.create===payload) {
//                         console.log(pokemon.create);
//                          createFilter.push(pokemon)                  
//                       }
                     
//                   });
//             } 
//              //console.log(state.allVideogames);
            
//               console.log(createFilter);
//                   return {
//                     ...state,
//                     //allVideogamesCopy: state.allVideogames,
//                     allPokemons: payload === "Create" ? state.allPokemonscopy : createFilter,
//                     currentPage: 1,
//                     totalpokemons: payload === "Create" ? state.allPokemonscopy.length : createFilter.length,
//                     //filtercopy
//                   };                 
//          }  
         
//          case 'ORDER_ATTACK': {

            
//           //  let sortedPokemons = [];
//            let sortedPokemons = [...state.allPokemons]
//             let pokorder = [];
//            // state.ordencopy = state.allPokemonscopy;
//             //state.allPokemons = [];
        
//             // Verifica si se seleccionó un filtro distinto de 'Attack'
//             if (payload != 'Orden') {
//                // let sortedPokemons = [];
               

//                 if (payload === 'As') {
//                    console.log(payload);
//                     sortedPokemons.sort((a, b) => {
//                         if (a.name > b.name) {
//                             return 1;
//                         }
//                         if (b.name > a.name) {
//                             return -1;
//                         }
//                         return 0
//                     })
//                    // state.allPokemons = [];
//                 }
    
//                 else if (payload === 'De') {
//                     console.log(payload);
//                     sortedPokemons.sort((a, b) => {
//                         if (a.name > b.name) {
//                             return -1;
//                         }
//                         if (b.name > a.name) {
//                             return 1;
//                         }
//                         return 0
//                     })
//                 }
//                 else if (payload === 'Menor') {
//                     console.log(payload);
//                     sortedPokemons.sort((a, b) => {
//                         if (a.attack > b.attack) {
//                             return 1;
//                         }
//                         if (b.attack > a.attack) {
//                             return -1;
//                         }
//                         return 0
//                     })
//                 } else if (payload === 'Mayor'){
//                    // console.log(payload);
//                     sortedPokemons.sort((a, b) => {
//                        // console.log(a);
//                         if (a.attack > b.attack) {
                            
//                             return -1;
//                         }
//                         if (b.attack > a.attack) {
//                             return 1;
//                         }
//                         return 0
//                     })
//                 }
//                pokorder = sortedPokemons; 
//            }
//            console.log(pokorder);
//             return {
//                 ...state,
//                 allPokemons: payload === "Orden" ? state.allPokemonscopy : pokorder,
//                 currentPage: 1,
//                 totalpokemons: payload === "Orden" ? state.allPokemonscopy.length : pokorder.length,
//             };                 
//         } 
       

//         default:
//             return state
//     }

// }

// export default rootReducer

// case 'FILTER_TYPES': {
//     const { types } = payload;
//     let typesfilter = [];

//     if (types.length > 0) {
//         typesfilter = state.allPokemonscopy.filter(pokemon => {
//             return pokemon.types.some(type => types.includes(type));
//         });
//     } else {
//         typesfilter = [...state.allPokemonscopy];
//     }