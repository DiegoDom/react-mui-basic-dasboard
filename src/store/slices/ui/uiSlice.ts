import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface uiState {
  loading: boolean;
  menuOpen: boolean;
}

const initialState: uiState = {
  loading: false,
  menuOpen: false,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    toggleMenu: (state) => {
      state.menuOpen = !state.menuOpen;
    },
  },
});

export const { setLoading, toggleMenu } = uiSlice.actions;
