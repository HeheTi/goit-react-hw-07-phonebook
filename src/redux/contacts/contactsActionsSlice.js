import { createSlice, nanoid, combineReducers } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  filter: '',
};

const contactsReducer = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addItem: {
      reducer: (state, { payload }) => {
        state.items.push(payload);
      },

      prepare: item => {
        const id = nanoid();
        return { payload: { id: id, ...item } };
      },
    },
    removeItem: (state, { payload }) => {
      const idx = state.items.findIndex(contact => contact.id === payload);
      state.items.splice(idx, 1);
    },

    changeFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { addItem, removeItem, changeFilter } = contactsReducer.actions;

export default contactsReducer.reducer;
