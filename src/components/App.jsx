import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';

const App = () => {
  const [contacts, setContacts] = useState([
    {
      id: '3em',
      name: 'asdasd',
      number: '+420122770',
    },
  ]);
  const [filtered, setFiltered] = useState('');

  useEffect(() => {
    const LSContacts = JSON.parse(localStorage.getItem('contacts'));
    if (LSContacts) {
      setContacts(LSContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const checkingAddedContact = outName => {
    const res = contacts.find(({ name }) => name === outName);
    return res;
  };

  const addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(3),
      name,
      number,
    };
    const newContact = checkingAddedContact(name);

    newContact
      ? alert(`${newContact.name} is already in contacts`)
      : setContacts(prevContacts => [contact, ...prevContacts]);
  };

  const deleteContact = contId => {
    setContacts(prevContacts =>
      prevContacts.filter(item => item.id !== contId)
    );
  };

  const handleFilterInput = event => {
    setFiltered(event.currentTarget.value);
  };

  const getFilteredContacts = () => {
    console.log(contacts);
    const normalizedFilter = filtered.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <main>
      <h1 className="titlePhonebook">Phonebook</h1>
      <ContactForm onSubmit={addContact} />

      <h2 className="titleContacts">Contacts</h2>
      <Filter value={filtered} onChange={handleFilterInput} />
      <ContactList
        contacts={getFilteredContacts()}
        deleteContact={deleteContact}
      />
    </main>
  );
  // }
};

export default App;
