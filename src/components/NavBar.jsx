import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {

  const navStyles = {
    textAlign: 'center',
    fontFamily: 'Helvetica',
    fontSize: '30px',
    paddingTop: '40px',
    paddingLeft: '20px',
    backgroundColor: 'black',
    height: '100px',
    position: 'absolute',
    width: '100vw',
    margin: '0',
    color: 'white',
  }

  const homeLink = {
    float: 'left',
  }

  const centerLinks = {
    margin: '0 10px',
  }



  return (
    <div>
    <div style={navStyles}>
    <Link class='link' style={homeLink} to='/'>Home</Link>
    <Link class='link' style={centerLinks} to='/tapList'>Taplist</Link>
    <Link class='link' style={centerLinks} to='/addbeer'>Add a Beer</Link>
    </div>
    </div>
  )
}

export default NavBar;
