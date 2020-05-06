import React from 'react';
import { format } from 'date-fns';

import './style.css';

const Contact = ({ contact }) => {
  const date = new Date(contact.admissionDate);
  const formatDate = format(date, 'dd/MM/yyyy');

  return (
    <article className="contact">
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
  );
}

export default Contact;
