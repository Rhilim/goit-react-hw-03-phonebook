import { Component } from 'react';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { PhoneBook } from './PhoneBook/PhoneBook';
import { StyledTitle } from './PhoneBook/PhoneBook.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addName = newName => {
    const findContact = this.state.contacts.find(
      item => item.name === newName.name
    );

    if (findContact) {
      return alert(`${newName.name} is already added`);
    } else {
      this.setState({ contacts: [...this.state.contacts, newName] });
    }
  };

  changeFilter = newValue => {
    this.setState({
      filter: newValue,
    });
  };

  handleDelete = contactId => {
    this.setState(prevState => {
      
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
        
      };
    });
  };

  render() {
    const { contacts, filter } = this.state;

    const visibleNames = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
    );

    return (
      <>
        <StyledTitle>Phonebook</StyledTitle>
        <PhoneBook onAdd={this.addName} />
        <StyledTitle>Contacts</StyledTitle>
        <Filter filter={filter} onChangeFilter={this.changeFilter} />
        <Contacts array={visibleNames} onDelete={this.handleDelete} />
      </>
    );
  }
}
