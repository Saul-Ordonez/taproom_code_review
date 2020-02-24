import React from './react';
import PropTypes from 'prop-types';
import NewBeerControl from './NewBeerControl';

function AgeConfirmation() {
  return(
    <div>
    <button onClick={props.onTroubleshootingConfirmation}>You must be 21+ to add a beer to this cellar</button>
    </div>
  );
}

Header.propTypes = {
  onTroubleshootingConfirmation: PropTypes.func
};

export default AgeConfirmation;
