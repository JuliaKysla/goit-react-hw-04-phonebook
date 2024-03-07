import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import Notification from './Notification';
import { Wrapper } from '../styles/Styles';

const Data = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];


export const App = () => {
    const [contacts, setContacts] = useState(()=> {return JSON.parse(window.localStorage.getItem('contacts')) ?? Data;});
 const [filter, setFilter] = useState('');

 useEffect(() => {
  localStorage.setItem('contacts', JSON.stringify(contacts));
}, [contacts]);

  const handleChangeFilter = e => {
    setFilter(e.target.value);
  };

  const handleAddContact = (name, number) => {
    const nameExists = contacts.find(
      contact =>
        contact.name.toLocaleLowerCase().trim() ===
        name.toLocaleLowerCase().trim()
    );

    if (nameExists) {
      alert(`Contact is already in your contacts.`);
    } else {
      const newContact = { id: nanoid(), name, number};
      setContacts(prevContacts =>  [...prevContacts, newContact],
      )};
    }

  const handleContactFilter = () => { contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.includes(filter)
    );}

  const handleDeleteContact = id => {
    setContacts(prevContacts =>
       prevContacts.filter(contact => contact.id !== id),
    )};

    return (
      <>
        <Wrapper>
          <h1>Phonebook</h1>
          <ContactForm addContact={handleAddContact} />
          <h2>Contacts List</h2>
          <Filter filteredContacts={handleChangeFilter} />
          {contacts.length ? (
            <ContactList
              list={handleContactFilter}
              onDeleteContact={handleDeleteContact}
            />
          ) : (
            <Notification message="Your contact list is empty" />
          )}
        </Wrapper>
      </>
    );

          };