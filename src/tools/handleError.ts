import { toast } from 'react-toastify';

export interface resError {
  error: {
    data: {
      errors: {
        [key: string]: string;
      };
    };
  };
}

export const handleError = (res: resError) => {
  let errorMessage = '';
  const errorsMessages = res.error;
  for (const error in errorsMessages.data.errors) {
    errorMessage += `${error} ${errorsMessages.data.errors[error]}\n`;
  }
  return toast.error(errorMessage);
};
