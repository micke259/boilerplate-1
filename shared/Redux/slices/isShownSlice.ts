// openSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store'

interface OpenState {
  isOpen: boolean;
}

const initialState: OpenState = {
  isOpen: false,
};

const openSlice = createSlice({
  name: 'open',
  initialState,
  reducers: {
    setOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
  },
});

export const { setOpen } = openSlice.actions;

export default openSlice.reducer;
