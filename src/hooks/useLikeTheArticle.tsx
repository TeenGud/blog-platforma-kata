import { useFavoriteTheArticleMutation } from '../services/blogApi';

export default function useLikeTheArticle() {
  const [likeTheArticle, { isLoading }] = useFavoriteTheArticleMutation();
  return {
    likeTheArticle,
    isLoading,
  };
}
