import React from 'react';
import PropTypes from 'prop-types';
import './Beer.css';

function Beer(props) {
  return (
    <div>
    <h2>{props.name}</h2>
    <h4>{props.brewery}</h4>
    <h4>{props.size}</h4>
    <h4>{props.cost}</h4>
    <h4>{props.abv}</h4>
    <h4>{props.ibu}</h4>
    </div>
  )

  Beer.propTypes = {
    name: PropTypes.string,
    brewery: PropTypes.string,
    size: PropTypes.string,
    cost: PropTypes.string,
    abv: PropTypes.string,
    ibu: PropTypes.string,
  }
}

export default Beer;
