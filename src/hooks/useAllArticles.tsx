import { useGetArticlesQuery } from '../services/blogApi';

export default function useAllArticles({ offset }: { offset: number }) {
  const responseAllArticles = useGetArticlesQuery({ offset });
  const isLoading = responseAllArticles.isFetching;
  const hasError = responseAllArticles.isError;
  const articles = responseAllArticles.data;
  return {
    articles,
    isLoading,
    hasError,
  };
}
