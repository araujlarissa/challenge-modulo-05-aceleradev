import React from "react";

import './style.css';

class Contacts extends React.Component {
	render() {
		return (
      <section className="contacts">
        <article className="contact">
        <span className="contact__avatar" />
        <span className="contact__data">Nome</span>
        <span className="contact__data">Telefone</span>
        <span className="contact__data">País</span>
        <span className="contact__data">Admissão</span>
        <span className="contact__data">Empresa</span>
        <span className="contact__data">Departamento</span>
      </article>
      </section>
    );
	}
}

export default Contacts;
