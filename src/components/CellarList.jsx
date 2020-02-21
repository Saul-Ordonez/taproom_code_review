import React from 'react';
import './Taplist.css';
import NavBar from './NavBar.jsx';

function Taplist() {

  const availableBeers = [
    {
      name: 'Pliney the Elder',
      brewery: 'Russian River Brewing Co.',
      size: '16.9oz',
      cost: '$8',
      abv: '12%',
      ibu: '100'
    }
    {
      name: 'CBS',
      brewery: 'Founders Brewing',
      size: '22oz',
      cost: '$24',
      abv: '11.7%',
      ibu: '45'
    }
    {
      name: '4 Seasons Hazy IPA',
      brewery: 'Mother Earth Brewing',
      size: '16oz',
      cost: '$5',
      abv: '7.5%',
      ibu: '55'
    }
    {
      name: 'Hazy Rabbit IPA',
      brewery: 'Lakefront Brewery',
      size: '12oz',
      cost: '$4',
      abv: '5.2%',
      ibu: '61'
    }
    {
      name: 'Fog Breaker IPA',
      brewery: 'Anchor Brewing',
      size: '14oz',
      cost: '$4.50',
      abv: '6.8%',
      ibu: '64'
    }
    {
      name: 'Ruby Redbird',
      brewery: 'Shiner',
      size: '12oz',
      cost: '$4',
      abv: '4%',
      ibu: '22'
    }
    {
      name: 'Cuvée Du Jongluer',
      brewery: 'Cascade Brewing Barrel House',
      size: '22oz',
      cost: '$15',
      abv: '9.4%',
      ibu: '44'
    }
    {
      name: 'Bourbon County Double Barrel',
      brewery: 'Goose Island',
      size: '16.9oz',
      cost: '$20',
      abv: '18%',
      ibu: '30'
    }
    {
      name: 'Distorted Perception',
      brewery: 'Hardywood Park',
      size: '16oz',
      cost: '$7',
      abv: '7%',
      ibu: '58'
    }
    {
      name: 'Witch Finder',
      brewery: 'Holy Mountain',
      size: '22oz',
      cost: '$24',
      abv: '6.1%',
      ibu: '35'
    }
  ]

  return (
    <div>
    <NavBar/>
    </div>
  )
}

export default Taplist
