import { Button } from 'antd';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import useSignIn from '../../hooks/useSignIn';
import { AppDispatch } from '../../store/store';
import { handleError, resError } from '../../tools/handleError';
import {
  handleUpdateUserInformation,
  resUserData,
} from '../../tools/handleUpdateUserInformation';
import { Loader } from '../ui/Loader';

export const SignInPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { loginUser, isLoading } = useSignIn();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSubmitFull = handleSubmit(async dataForm => {
    const loginData = {
      user: {
        email: dataForm.email,
        password: String(dataForm.password),
      },
    };
    console.log(loginData);
    try {
      const res = await loginUser({ user: loginData });
      if (res.data) {
        handleUpdateUserInformation(res as resUserData, dispatch);
        navigate('/');
        window.location.reload();
      } else if (res.error) {
        return handleError(res as resError);
      }
    } catch (error) {
      console.log(error);
    }
  });
  if (isLoading)
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '100px',
        }}
      >
        <Loader />
      </div>
    );
  return (
    <div className="w-[400px] h-[600px] py-12 px-8 rounded-md shadow-md bg-white mx-auto mt-5">
      <h1 className="font-medium text-xl text-center">Sign in</h1>
      <ToastContainer />
      <form className="mt-5" onSubmit={handleSubmitFull}>
        <div className="mt-4 relative">
          <label className="text-sm" htmlFor="email">
            Email address
          </label>
          <input
            {...register('email', {
              required: 'This field is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'You should provide correct email addess',
              },
            })}
            placeholder="Email address"
            className={`h-[40px] w-[320px] ${errors.email?.message ? 'input-red' : ''}`}
            id="email"
            type="email"
          />
          <span className="text-sm text-red-500 absolute left-[0px] top-[70px]">
            {errors.email?.message as string}
          </span>
        </div>
        <div className="mt-8 relative">
          <label className="text-sm" htmlFor="password">
            Password
          </label>
          <input
            {...register('password', {
              required: 'This field is required',
            })}
            placeholder="Password"
            className={`h-[40px] w-[320px] ${errors.password?.message ? 'input-red' : ''}`}
            id="password"
            type="password"
          />
          <span className="text-sm text-red-500 absolute left-[0px] top-[70px]">
            {errors.password?.message as string}
          </span>
        </div>
        <Button
          className={
            'mt-8 text-md bg-blue-600 text-white py-3 w-[320px] h-[40px]'
          }
          htmlType="submit"
          type="primary"
          size="large"
        >
          Login
        </Button>
      </form>
      <div className="text-center mt-4 text-sm">
        <span>
          Don’t have an account?{' '}
          <Link
            className="text-purple-700 hover:text-pink-400 transition-colors text-base"
            to="/sign-up"
          >
            Sign Up.
          </Link>
        </span>
      </div>
    </div>
  );
};
