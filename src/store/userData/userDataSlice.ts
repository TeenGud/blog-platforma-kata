import { createSlice } from '@reduxjs/toolkit';

interface UserDataSlice {
  user: {
    email: string | null;
    token: string | null;
    username: string | null;
    avatarUrl: string | null;
  };
}

const initialState: UserDataSlice = {
  user: {
    email:
      localStorage.getItem('email') !== 'undefined'
        ? localStorage.getItem('email')
        : '',
    token:
      localStorage.getItem('token') !== 'undefined'
        ? localStorage.getItem('token')
        : null,
    username:
      localStorage.getItem('username') !== 'undefined'
        ? localStorage.getItem('username')
        : '',
    avatarUrl:
      localStorage.getItem('avatarUrl') !== 'undefined'
        ? localStorage.getItem('avatarUrl')
        : '',
  },
};

const userDataSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addEmail: (state, action) => {
      state.user.email = action.payload;
    },
    addUsername: (state, action) => {
      state.user.username = action.payload;
    },
    addToken: (state, action) => {
      state.user.token = action.payload;
    },
    addAvatarUrl: (state, action) => {
      state.user.avatarUrl = action.payload;
    },
  },
});

export const { addEmail, addUsername, addToken, addAvatarUrl } =
  userDataSlice.actions;
export default userDataSlice.reducer;
