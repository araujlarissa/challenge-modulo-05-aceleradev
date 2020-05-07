/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';

import Topbar from './components/Topbar';
import Filter from './components/Filter';
import Contacts from './components/Contacts';

import './App.css';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('name');
  const [search, setSearch] = useState('');

  const handleFilter = (nameFilter) => {
    setFilter(nameFilter);
  }

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }

  const filterContacts = (search, filter) => {
    let filtered = '';
    const regex = new RegExp(search, 'i');

    const filteredContacts = contacts.filter(contact => {      
      if (filter === 'name')
        filtered = contact.name;  
        
      if (filter === 'country')
        filtered = contact.country; 

      if (filter === 'company')
        filtered = contact.company; 

      if (filter === 'department')
        filtered = contact.department; 

      if (filter === 'admissionDate') {
        const date = new Date(contact.admissionDate);
        filtered = format(date, 'dd/MM/yyyy');
      }

      return filtered.match(regex);
    });

    return filteredContacts;
  }

  const loadContacts = () => {
    setLoading(true);

    fetch('https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts')
      .then(response => response.json())
      .then(data => {
        search !== '' ? setContacts(filterContacts(search, filter)) : setContacts(data); 
        setLoading(false);
      })
      .catch(error => {
        alert('Erro ao carregar os contatos!');
      });
  }

  useEffect(() => {
    loadContacts();
  }, [search]);

  return (
    <>
      <Topbar />

      <div className="container">
        <Filter handleFilter={handleFilter} handleSearch={handleSearch} />
      </div>

      <div className="container">
      {loading ? <h1>Loading...</h1> :
        <Contacts contacts={contacts} /> 
      }  
      </div>
    </>
  );
}

export default App;
