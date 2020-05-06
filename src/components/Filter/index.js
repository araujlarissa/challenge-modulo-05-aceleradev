import React from 'react';

import './style.css';

class Filters extends React.Component {
	render() {
		return (
      <section className="filters">
        <div className="filters__search">
          <input type="text" className="filters__search__input" placeholder="Pesquisar" />

          <button className="filters__search__icon">
            <i className="fa fa-search"/>
          </button>
        </div>

        <button className="filters__item is-selected">
          Nome <i className="fas fa-sort-down" />
        </button>

        <button className="filters__item">
          País <i className="fas fa-sort-down" />
        </button>

        <button className="filters__item">
          Empresa <i className="fas fa-sort-down" />
        </button>

        <button className="filters__item">
          Departamento <i className="fas fa-sort-down" />
        </button>

        <button className="filters__item">
          Data de admissão <i className="fas fa-sort-down" />
        </button>
      </section>
    );
	}
}

export default Filters;
