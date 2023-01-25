import { createSlice } from '@reduxjs/toolkit';

import { addContact, deleteContact, requestContacts } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};
const handlePending = (state, action) => {
  state.isLoading = true;
  state.error = '';
};

const handleRejected = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      // Create contacts
      .addCase(requestContacts.pending, handlePending)
      .addCase(requestContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(requestContacts.rejected, handleRejected)
      // add contacts
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push({
          name: action.payload.name,
          number: action.payload.number,
          id: action.payload.id,
        });
      })
      .addCase(addContact.rejected, handleRejected)
      // delete contacts
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter(
          contact => contact.id !== action.payload
        );
      })
      .addCase(deleteContact.rejected, handleRejected),
});

export default contactsSlice.reducer;
