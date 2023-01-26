import css from './ContactList.module.css';
import React from 'react';
import { PropTypes } from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => {
    return state.contacts.items.filter(el => {
      return el.name.toLowerCase().includes(state.filter.toLowerCase());
    });
  });
  const del = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div>
      {contacts.length > 0 && (
        <ul className={css.list}>
          {contacts.map(({ id, name, number }) => {
            return (
              <li key={id} className={css.listItem}>
                <span className={css.span}>
                  {name}: {number}
                </span>
                <button
                  className={css.button}
                  type="button"
                  onClick={() => del(id)}
                >
                  delete
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

ContactList.propTypes = {
  changeList: PropTypes.array,
  onDeleteContact: PropTypes.func,
};
