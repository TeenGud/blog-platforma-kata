import { AppDispatch } from '../store/store';
import {
  addAvatarUrl,
  addEmail,
  addToken,
  addUsername,
} from '../store/userData/userDataSlice';

export interface resUserData {
  data: {
    user: {
      token: string;
      username: string;
      email: string;
      image: string;
    };
  };
}

export const handleUpdateUserInformation = (
  res: resUserData,
  dispatch: AppDispatch,
) => {
  localStorage.setItem('token', res.data.user.token);
  localStorage.setItem('username', res.data.user.username);
  localStorage.setItem('email', res.data.user.email);
  localStorage.setItem('avatarUrl', res.data.user.image);
  dispatch(addToken(res.data.user.token));
  dispatch(addEmail(res.data.user.email));
  dispatch(addUsername(res.data.user.username));
  dispatch(addAvatarUrl(res.data.user?.image));
};
