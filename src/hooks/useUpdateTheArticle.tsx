import { useUpdateAnArticleMutation } from '../services/blogApi';

export default function useUpdateTheArticle() {
  const [updateTheArticle, { isLoading: isLoadingUpdate }] =
    useUpdateAnArticleMutation();
  return {
    updateTheArticle,
    isLoadingUpdate,
  };
}
