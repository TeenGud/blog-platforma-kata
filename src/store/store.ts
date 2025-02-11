import { configureStore } from '@reduxjs/toolkit';

import { blogApi } from '../services/blogApi';
import articleDataSlice from './currentArticleData/currentArticleData.ts';
import userDataSlice from './userData/userDataSlice.ts';

export const store = configureStore({
  reducer: {
    [blogApi.reducerPath]: blogApi.reducer,
    user: userDataSlice,
    article: articleDataSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(blogApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
