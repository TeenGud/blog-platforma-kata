import { useDeleteTheArticleMutation } from '../services/blogApi';

export default function useDeleteTheArticle() {
  const [deleteTheArticle, { isLoading }] = useDeleteTheArticleMutation();
  return {
    deleteTheArticle,
    isLoading,
  };
}
