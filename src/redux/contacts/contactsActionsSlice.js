import { createSlice, nanoid } from '@reduxjs/toolkit';
import { getContacts, addContact, deleteContact } from './contactsOperations';

// const initialState = {
//   items: [],
//   filter: '',
// };

const initialState = {
  data: {
    items: [],
    loading: false,
    error: null,
  },
  filter: '',
};

const contactsReducer = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addItem: {
      reducer: (state, { payload }) => {
        state.data.items.push(payload);
      },

      prepare: item => {
        const id = nanoid();
        return { payload: { id: id, ...item } };
      },
    },
    removeItem: (state, { payload }) => {
      const idx = state.items.findIndex(contact => contact.id === payload);
      state.data.items.splice(idx, 1);
    },

    changeFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getContacts.pending, state => {
        state.data.loading = true;
        state.data.error = null;
      })
      .addCase(getContacts.fulfilled, (state, { payload }) => {
        state.data.loading = false;
        state.data.items = payload;
      })
      .addCase(getContacts.rejected, (state, { payload }) => {
        state.data.loading = false;
        state.data.error = payload;
      });
  },
});
console.log('🚀 ~ contactsReducer', contactsReducer);

export const { addItem, removeItem, changeFilter } = contactsReducer.actions;

export default contactsReducer.reducer;
