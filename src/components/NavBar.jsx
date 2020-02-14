import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {

  return (
    <div>
    <Link to='/'>Home</Link>
    <Link to='/TapList'>Taplist</Link>
    <Link to='/AddBeer'>Add a Beer</Link>
    </div>
  )
}

export default NavBar;
