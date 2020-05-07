import React, { useState, useEffect } from 'react';

import Topbar from './components/Topbar';
import Filter from './components/Filter';
import Contacts from './components/Contacts';

import './App.css';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [contacts, setContacts] = useState([]);

  const loadContacts = () => {
    setLoading(true);

    fetch('https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts')
      .then(response => response.json())
      .then(data => {
        setContacts(data);
        setLoading(false);
      })
      .catch(error => {
        alert('Erro ao carregar os contatos!');
      });
  }

  useEffect(() => {
    loadContacts();
  }, []);

  return (
    <>
      <Topbar />

      <div className="container">
        <Filter contacts={contacts} />
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
