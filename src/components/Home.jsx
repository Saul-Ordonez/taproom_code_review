import React from 'react';
import NavBar from './NavBar.jsx';

function Home() {

  const homePageStyling = {
  }

  return (
    <div>
    <NavBar/>
    <p style={homePageStyling}>Here is the homepage for the taproom.</p>
    </div>
  );
}

export default Home;
