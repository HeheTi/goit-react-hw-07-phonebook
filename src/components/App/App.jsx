import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
import { getContacts } from '../../redux/contacts/contactsOperations';
import { contactsSelectors } from '../../redux/contacts';
import Loader from '../LoaderModal';

import s from './App.module.css';

const App = () => {
  const contacts = useSelector(contactsSelectors.getContacts);
  const loading = useSelector(contactsSelectors.getLoading);
  const error = useSelector(contactsSelectors.getError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const isAddContact = !error && !contacts.length;

  return (
    <div className={s.app}>
      {loading && <Loader />}

      <h1>Phonebook</h1>

      <ContactForm />

      <h2>Contacts</h2>

      {contacts.length > 1 && <Filter />}

      {isAddContact && <p>Please, add contact!</p>}

      {!!contacts.length && <ContactList />}

      {error && <p className={s.errorMess}>{error.message}</p>}
    </div>
  );
};

export default App;
