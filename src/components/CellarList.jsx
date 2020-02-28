import React from 'react';
import './CellarList.css';
import Beer from './Beer.jsx'

function CellarList(props) {

  const beerlist = {

  }

  return (
    <div>
    <div style={beerlist}>
    {props.beerlist.map((beer, index) =>
      <Beer
      name={beer.name}
      brewery={beer.origin}
      size={beer.size}
      cost={beer.cost}
      abv={beer.abv}
      ibu={beer.ibu}
      key={index}/>
    )}
    </div>
    </div>
  )
}

export default CellarList;
