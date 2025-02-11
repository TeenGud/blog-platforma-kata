import { useUpdateCurrentUserMutation } from '../services/blogApi';

export default function useUpdateUser() {
  const [updateUser, { isLoading }] = useUpdateCurrentUserMutation();
  return {
    updateUser,
    isLoading,
  };
}
