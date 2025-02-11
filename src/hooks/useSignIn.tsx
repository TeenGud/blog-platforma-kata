import { useLoginMutation } from '../services/blogApi';

export default function useSignIn() {
  const [loginUser, { isLoading }] = useLoginMutation();
  return {
    loginUser,
    isLoading,
  };
}
