import React from 'react';
import NewBeerForm from './NewBeerForm.jsx'

class NewBeerControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({formVisibleOnPage: true});
    console.log('Hey, you clicked me! I do not have code to change my state quite yet, but I will in a moment!');
  }

  render(){
    return (
      <div>
        <NewBeerForm />
      </div>
    );
  }
}

export default NewBeerControl;
