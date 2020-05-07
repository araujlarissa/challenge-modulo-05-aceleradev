import React, { useState } from 'react';

import './style.css';

const Filters = ({ handleFilter, handleSearch }) => {
  const [selected, setSelected] = useState('');

  const handleClick = (filter) => {
    setSelected(filter);
    handleFilter(filter);
  }

	return (
    <section className="filters">
      <div className="filters__search">
        <input 
          type="text" 
          className="filters__search__input" 
          placeholder="Pesquisar"
          onChange={(e) => handleSearch(e)}
        />

        <button className="filters__search__icon">
          <i className="fa fa-search"/>
        </button>
      </div>

      <button 
        className={ selected === 'name' ? 'filters__item is-selected' :  'filters__item'}
        onClick={() => handleClick('name')}
      >
        Nome <i className="fas fa-sort-down" />
      </button>

      <button 
        className={ selected === 'country' ? 'filters__item is-selected' :  'filters__item'}
        onClick={() => handleClick('country')}
      >
        País <i className="fas fa-sort-down" />
      </button>

      <button 
        className={ selected === 'company' ? 'filters__item is-selected' :  'filters__item'}
        onClick={() => handleClick('company')}
      >
        Empresa <i className="fas fa-sort-down" />
      </button>

      <button 
        className={ selected === 'department' ? 'filters__item is-selected' :  'filters__item'}
        onClick={() => handleClick('department')}
      >
        Departamento <i className="fas fa-sort-down" />
      </button>

      <button 
        className={ selected === 'admissionDate' ? 'filters__item is-selected' :  'filters__item'}
        onClick={() => handleClick('admissionDate')}
      >
        Data de admissão <i className="fas fa-sort-down" />
      </button>
    </section>
  );
}

export default Filters;
