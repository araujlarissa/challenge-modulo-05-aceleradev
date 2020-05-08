import React from 'react';
import { format } from 'date-fns';

import './style.css';

const Contact = ({ contact }) => {
  const date = new Date(contact.admissionDate);
  const formatDate = format(date, 'dd/MM/yyyy');

  return (
    <>
      <article className="contact">
        <div className="contact__item contact__item--avatar">
          <span className="contact__avatar">
            <img src={contact.avatar} alt={contact.name}/>
          </span>
          <span className="contact__data contact__data--blue">{contact.name}</span>
        </div>

        <div className="contact__details">
          <div className="contact__item">
            <label htmlFor="phone" className="contact__description">Telefone:</label>
            <span className="contact__data">{contact.phone}</span>
          </div>
          <div className="contact__item">
            <label htmlFor="country" className="contact__description">País:</label>
            <span className="contact__data">{contact.country}</span>
          </div>
          <div className="contact__item">
            <label htmlFor="date" className="contact__description">Admissão:</label>
            <span className="contact__data">{formatDate}</span>
          </div>
          <div className="contact__item">
            <label htmlFor="company" className="contact__description">Empresa:</label>
            <span className="contact__data">{contact.company}</span>
          </div>
          <div className="contact__item">
            <label htmlFor="department" className="contact__description">Departamento:</label>
            <span className="contact__data">{contact.department}</span>
          </div>
        </div>
      </article>

      <article className="contact-block">
        <span className="contact__avatar">
          <img src={contact.avatar} alt={contact.name}/>
        </span>
        <span className="contact__data">{contact.name}</span>
        <span className="contact__data">{contact.phone}</span>
        <span className="contact__data">{contact.country}</span>
        <span className="contact__data">{formatDate}</span>
        <span className="contact__data">{contact.company}</span>
        <span className="contact__data">{contact.department}</span>
      </article>
    </>
  );
}

export default Contact;
