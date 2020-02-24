import React from 'react';

function NewBeerForm() {

  let _name = null;
  let _brewery = null;
  let _cost = null;
  let _size = null;
  let _abv = null;
  let _ibu = null;

  function handleNewBeerFormSubmission(event) {
  event.preventDefault();
}

  return (
    <div>
    <form onSubmit={handleNewBeerFormSubmission}>
    <input
    type='text'
    id='name'
    placeholder='Beer Name'/>
    ref={(input) => {_name = input;}}/>
    <input
    type='text'
    id='brewery'
    placeholder='Brewery'/>
    ref={(input) => {_brewery = input;}}/>
    <input
    type='text'
    id='size'
    placeholder='Size'/>
    ref={(input) => {_size = input;}}/>
    <input
    type='text'
    id='cost'
    placeholder='Cost'/>
    ref={(input) => {_cost = input;}}/>
    <input
    type='text'
    id='abv'
    placeholder='ABV'/>
    ref={(input) => {_abv = input;}}/>
    <input
    type='text'
    id='ibu'
    placeholder='IBU'/>
    ref={(input) => {_ibu = input;}}/>
    <button type='submit'>Add Beer to cellar</button>
    </form>
    </div>
  );
}

export default NewBeerForm;
