import { useUnfavoriteTheArticleMutation } from '../services/blogApi';

export default function useUnlikeTheArticle() {
  const [unlikeTheArticle, { isLoading }] = useUnfavoriteTheArticleMutation();
  return {
    unlikeTheArticle,
    isLoading,
  };
}
