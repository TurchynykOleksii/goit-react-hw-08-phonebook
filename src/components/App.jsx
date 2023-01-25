import { Form } from './Form';
import { ContactList } from './ContactList';
import { Loader } from './Loader';
import { useSelector } from 'react-redux';
import { Filter } from './Filter';

export const App = () => {
  const { isLoading, error } = useSelector(state => state.contacts);

  return (
    <div className="app">
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />

      <ContactList />
      {isLoading && <Loader />}
      {error && <h2>Error: {error}</h2>}
    </div>
  );
};
