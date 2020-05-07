/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

import './style.css';

const Filters = ({ contacts }) => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('name');

  useEffect(() => {
    if (search !== '') {
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

        if (filter === 'admissionDate')
        filtered = contact.admissionDate; 
        
        return filtered.match(regex);
      });

      console.log(filteredContacts);
    }
  }, [search]);

	return (
    <section className="filters">
      <div className="filters__search">
        <input 
          type="text" 
          className="filters__search__input" 
          placeholder="Pesquisar" 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button className="filters__search__icon">
          <i className="fa fa-search"/>
        </button>
      </div>

      <button 
        className="filters__item is-selected"
        onClick={() => setFilter('name')}
      >
        Nome <i className="fas fa-sort-down" />
      </button>

      <button 
        className="filters__item"
        onClick={() => setFilter('country')}
      >
        País <i className="fas fa-sort-down" />
      </button>

      <button 
        className="filters__item"
        onClick={() => setFilter('company')}
      >
        Empresa <i className="fas fa-sort-down" />
      </button>

      <button 
        className="filters__item"
        onClick={() => setFilter('department')}
      >
        Departamento <i className="fas fa-sort-down" />
      </button>

      <button 
        className="filters__item"
        onClick={() => setFilter('admissionDate')}
      >
        Data de admissão <i className="fas fa-sort-down" />
      </button>
    </section>
  );
}

export default Filters;
