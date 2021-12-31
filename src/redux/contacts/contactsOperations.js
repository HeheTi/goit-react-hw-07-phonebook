import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../services/api';

const getContacts = createAsyncThunk('contacts/getContactsStatus', () =>
  api.getAllContacts(),
);
const addContact = createAsyncThunk('contacts/addContactStatus', newContact =>
  api.saveItem(newContact),
);

const deleteContact = createAsyncThunk('contacts/deleteContactStatus', id =>
  api.deleteItem(id),
);

export { getContacts, addContact, deleteContact };
