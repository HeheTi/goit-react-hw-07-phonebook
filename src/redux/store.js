import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import contactsReducer from './contacts/contactsActionsSlice';

// {
//   contacts: {
// data: {
//     items: [],
//     loading: false,
//     error: null,
//   },
// filter: '',
//   }
// }

const logger = createLogger({
  collapsed: (getState, action, logEntry) => !logEntry.error,
  timestamp: false,
});

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});

export { store };
