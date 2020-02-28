import React from 'react';
import PropTypes from 'prop-types';
import NewBeerControl from './NewBeerControl';

function AgeConfirmation(props) {

  const ageConfirmStyle = {
    marginLeft: '40%',
    marginTop: '20%',
  }

  return(
    <div style={ageConfirmStyle}>
    <button onClick={props.onTroubleshootingConfirmation}>You must be 21+ to add a beer to this cellar</button>
    </div>
  );
}

AgeConfirmation.propTypes = {
  onTroubleshootingConfirmation: PropTypes.func
};

export default AgeConfirmation;
