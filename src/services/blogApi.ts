import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const blogKey = localStorage.getItem('token');

export const blogApi = createApi({
  reducerPath: 'blogApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://blog-platform.kata.academy/api',
    prepareHeaders: headers => {
      headers.set('Authorization', `Token ${blogKey}`);
      headers.set('Content-Type', 'application/json');
    },
  }),
  endpoints: builder => ({
    getArticles: builder.query({
      query: ({ offset }) => `/articles?offset=${offset}&limit=5`,
    }),
    getAnArticle: builder.query({
      query: ({ slug }) => `/articles/${slug}`,
    }),
    getCurrentUser: builder.query({
      query: () => `/user`,
    }),
    createAnArticle: builder.mutation({
      query: ({ article }) => ({
        url: '/articles',
        method: 'POST',
        body: article,
      }),
    }),
    updateAnArticle: builder.mutation({
      query: ({ article, slug }) => ({
        url: `/articles/${slug}`,
        method: 'PUT',
        body: article,
      }),
    }),
    deleteTheArticle: builder.mutation({
      query: ({ slug }) => ({
        url: `/articles/${slug}`,
        method: 'DELETE',
      }),
    }),
    favoriteTheArticle: builder.mutation({
      query: ({ slug }) => ({
        url: `/articles/${slug}/favorite`,
        method: 'POST',
      }),
    }),
    unfavoriteTheArticle: builder.mutation({
      query: ({ slug }) => ({
        url: `/articles/${slug}/favorite`,
        method: 'DELETE',
      }),
    }),
    updateCurrentUser: builder.mutation({
      query: ({ user }) => ({
        url: `/user`,
        method: 'PUT',
        body: user,
      }),
    }),
    login: builder.mutation({
      query: ({ user }) => ({
        url: `/users/login`,
        method: 'POST',
        body: user,
      }),
    }),
    registerUser: builder.mutation({
      query: ({ user }) => ({
        url: `/users`,
        method: 'POST',
        body: user,
      }),
    }),
  }),
});

export const {
  useGetArticlesQuery,
  useCreateAnArticleMutation,
  useGetAnArticleQuery,
  useUpdateAnArticleMutation,
  useDeleteTheArticleMutation,
  useFavoriteTheArticleMutation,
  useUnfavoriteTheArticleMutation,
  useGetCurrentUserQuery,
  useUpdateCurrentUserMutation,
  useLoginMutation,
  useRegisterUserMutation,
} = blogApi;
