import React from 'react';

import Form from './Form/Form';
import Contacts from './Contacts/Contacts';

export class App extends React.Component {
state = {
  contacts: [],
  name: ''
  }

    addContact = data => {
      this.setState((prevState) => ({ contacts: [...prevState.contacts, data] }));
      console.log(this.state.contacts)
  };


  render() {
    return (
    <>
    <Form onSubmit={this.addContact}/>
    <Contacts contacts={this.state.contacts}/>
   </>);
   
  }
}
