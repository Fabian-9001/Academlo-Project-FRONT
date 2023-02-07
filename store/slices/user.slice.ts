import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface userState {
  isAuthenticated: boolean;
}
const initialState: userState = { isAuthenticated: false };

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserState: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { setUserState } = userSlice.actions;
export default userSlice.reducer;
