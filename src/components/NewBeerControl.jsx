import React from 'react';
import NewBeerForm from './NewBeerForm.jsx';
import AgeConfirmation from './AgeConfirmation.jsx';

class NewBeerControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(this);
  }

  handleTroubleshootingConfirmation(){
    this.setState({formVisibleOnPage: true});
  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewBeerForm />
    } else {
      currentlyVisibleContent = <AgeConfirmation onTroubleshootingConfirmation={this.handleTroubleshootingConfirmation}/>;
    }
    return (
      <div>
      <NewBeerForm />
      </div>
    );
  }
}

export default NewBeerControl;
