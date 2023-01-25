import React, { useState } from 'react';
import { addContact } from 'redux/contacts/operations';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import css from './Form.module.css';
import { PropTypes } from 'prop-types';

export const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handelInputChange = e => {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const onChangeForm = e => {
    e.preventDefault();
    if (contacts.some(el => el.name.toLowerCase() === name.toLowerCase())) {
      return alert(`We already have ${name}`);
    }
    dispatch(addContact({ name: name, number: number, id: nanoid() }));
    reset();
  };

  return (
    <form onSubmit={onChangeForm} className={css.form}>
      <label className={css.label}>
        <span className={css.span}>Name:</span>
        <input
          className={css.input}
          type="text"
          name="name"
          value={name}
          onChange={handelInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.label}>
        <span className={css.span}>Phone:</span>
        <input
          className={css.input}
          type="tel"
          name="number"
          value={number}
          onChange={handelInputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.button} type="submit">
        add contact
      </button>
    </form>
  );
};

Form.propTypes = {
  submitProps: PropTypes.func,
};
