import React from "react";

import Contact from '../Contact';

import './style.css';

const Contacts = ({ contacts }) => {
  return (
    <section className="contacts">
      <article className="description">
        <span className="description__item"></span>
        <span className="description__item">Nome</span>
        <span className="description__item">Telefone</span>
        <span className="description__item">País</span>
        <span className="description__item">Admissão</span>
        <span className="description__item">Empresa</span>
        <span className="description__item">Departamento</span>
      </article>

      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </section>
  );
}

export default Contacts;
