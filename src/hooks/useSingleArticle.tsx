import { useGetAnArticleQuery } from '../services/blogApi';

export default function useSingleArticle({ slug }: { slug: string }) {
  const responseSingleArticle = useGetAnArticleQuery({ slug });
  const isLoading = responseSingleArticle.isFetching;
  const hasError = responseSingleArticle.isError;
  const theArticle = responseSingleArticle.data;
  return {
    theArticle,
    isLoading,
    hasError,
  };
}
