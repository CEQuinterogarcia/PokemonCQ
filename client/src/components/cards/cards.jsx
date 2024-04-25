import Card from '../card/card';
import PaginationComponent from '../pagination/PaginationComponent';
import { connect } from 'react-redux';
import './cards.styles.css';

function Cards({currentPage, itemsPerPage, allPokemons}) {
    const pokemonList = allPokemons

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedItems = allPokemons.slice(startIndex, endIndex);

    return (
        <div>
        <div className='card-list'>
          { displayedItems?.map(pokemons=>
          <Card  key ={pokemons.id} pokemons = {pokemons} />
          
          )}

        </div>
        <PaginationComponent totalItems={allPokemons.length} />
        </div>
      ); 
}
const mapStateToProps = state => ({
  currentPage: state.currentPage,
  itemsPerPage: state.itemsPerPage,
 
});

export default connect(mapStateToProps)(Cards);