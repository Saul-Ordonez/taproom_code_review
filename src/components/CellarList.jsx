import React from 'react';
import './CellarList.css';
import NavBar from './NavBar.jsx';
import Beer from './Beer.jsx'

function CellarList() {

  const availableBeers = [

  ]

  const beerlist = {

  }

  return (
    <div>
    <NavBar/>
    <div style={beerlist}>
    {availableBeers.map((beer, index) =>
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

export default CellarList
