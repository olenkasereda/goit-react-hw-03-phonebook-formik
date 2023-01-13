import React from 'react';
import { PropTypes } from 'prop-types';
import s from './ContactsList.module.css';
import ContactItem from '../ContactItem';

const ContactsList = ({ contacts, onDelete }) => {
  return (
    <ul className={s.list}>
      {contacts.length
        ? contacts.map(({ name, number, id }) => (
            <ContactItem
              key={id}
              name={name}
              number={number}
              id={id}
              onDelete={onDelete}
            />
          ))
        : 'No contacts'}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactsList;
