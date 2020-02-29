import React from 'react';
import Beer from './Beer';
import PropTypes from 'prop-types';

function BeerList(props) {

  return (
    <div>
    {props.beerlist.map((beer, index) =>
      <Beer
      name={beer.name}
      brewery={beer.brewery}
      size={beer.size}
      cost={beer.cost}
      abv={beer.abv}
      ibu={beer.ibu}
      key={index}/>
    )}
    </div>
  );
}

BeerList.propTypes = {
  beerList: PropTypes.array
};

export default BeerList;
