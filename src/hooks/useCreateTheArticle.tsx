import { useCreateAnArticleMutation } from '../services/blogApi';

export default function useCreateTheArticle() {
  const [createTheArticle, { isLoading }] = useCreateAnArticleMutation();
  return {
    createTheArticle,
    isLoading,
  };
}
