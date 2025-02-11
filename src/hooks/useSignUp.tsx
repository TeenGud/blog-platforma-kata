import { useRegisterUserMutation } from '../services/blogApi';

export default function useSignUp() {
  const [registerUser, { isLoading }] = useRegisterUserMutation();
  return {
    registerUser,
    isLoading,
  };
}
