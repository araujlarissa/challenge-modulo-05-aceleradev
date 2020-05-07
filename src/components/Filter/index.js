import React from 'react';

import './style.css';

const Filters = ({ handleFilter, handleSearch }) => {
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
        className="filters__item is-selected"
        onClick={() => handleFilter('name')}
      >
        Nome <i className="fas fa-sort-down" />
      </button>

      <button 
        className="filters__item"
        onClick={() => handleFilter('country')}
      >
        País <i className="fas fa-sort-down" />
      </button>

      <button 
        className="filters__item"
        onClick={() => handleFilter('company')}
      >
        Empresa <i className="fas fa-sort-down" />
      </button>

      <button 
        className="filters__item"
        onClick={() => handleFilter('department')}
      >
        Departamento <i className="fas fa-sort-down" />
      </button>

      <button 
        className="filters__item"
        onClick={() => handleFilter('admissionDate')}
      >
        Data de admissão <i className="fas fa-sort-down" />
      </button>
    </section>
  );
}

export default Filters;
