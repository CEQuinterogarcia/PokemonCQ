import React from 'react';
import { connect } from 'react-redux';
import { changePage } from '../../redux/actions/action';
import './pagination.styles.css';


const PaginationComponent = ({ totalpokemons, currentPage, totalItems, itemsPerPage, changePage }) => {
  //const totalPages = Math.ceil(totalItems / itemsPerPage);
  const totalPages =  Math.ceil(totalpokemons/itemsPerPage);
  

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      changePage(newPage);
    }
  };

  return (
    <div>
      <button onClick={() => handlePageChange(currentPage - 1)}>&lt; Prev</button>
      <span className='span' > Page {currentPage} of {totalPages} </span>
      <button onClick={() => handlePageChange(currentPage + 1)}>Next &gt;</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentPage: state.currentPage,
  totalItems: state.totalItems,
  itemsPerPage: state.itemsPerPage,
  totalpokemons: state.totalpokemons,
});

export default connect(mapStateToProps, { changePage })(PaginationComponent);