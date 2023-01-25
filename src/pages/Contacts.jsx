import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../redux/contacts//selectors';

import { useEffect } from 'react';
import { requestContacts } from 'redux/contacts//operations';
import { Form } from 'components/Form/Form';

const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestContacts());
  }, [dispatch]);

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <Form />
      </div>
      <div>
        <h2>Contacts</h2>
        {contacts.length ? (
          <>
            <Filter />
            <ContactList />
          </>
        ) : (
          <p>You dont have any contacts yet</p>
        )}
      </div>
    </>
  );
};

export default Contacts;
