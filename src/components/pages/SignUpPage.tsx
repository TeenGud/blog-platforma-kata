import { Button } from 'antd';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import useSignUp from '../../hooks/useSignUp';
import { AppDispatch } from '../../store/store';
import { handleError, resError } from '../../tools/handleError';
import {
  handleUpdateUserInformation,
  resUserData,
} from '../../tools/handleUpdateUserInformation';
import { Loader } from '../ui/Loader';

export const SignUpPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { registerUser, isLoading } = useSignUp();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleSubmitFull = handleSubmit(async dataForm => {
    const signUpData = {
      user: {
        username: dataForm.username,
        email: dataForm.email,
        password: String(dataForm.password),
      },
    };
    try {
      const res = await registerUser({ user: signUpData });
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
    <div className="w-[384px] h-[640px] py-12 px-8 rounded-md border-[1px] shadow-sm bg-white mx-auto mt-5">
      <h1 className="font-medium text-xl text-center m-0">
        Create new account
      </h1>
      <ToastContainer />
      <form className="mt-5 flex flex-col" onSubmit={handleSubmitFull}>
        <div className="flex flex-col relative">
          <label className="text-sm" htmlFor="username">
            Username
          </label>
          <input
            {...register('username', {
              required: 'This field is required',
              minLength: {
                value: 3,
                message: 'Your username needs to be at least 3 characters',
              },
              maxLength: {
                value: 20,
                message: 'Your username needs to be less than 20 characters',
              },
            })}
            className={`${errors.username?.message ? 'input-red' : ''}`}
            placeholder={'Username'}
            id={'username'}
            type={'text'}
          />
          <span className="text-sm text-red-500 absolute top-[60px]">
            {errors.username?.message as string}
          </span>
        </div>
        <div className="mt-6 flex flex-col relative">
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
            className={`${errors.email?.message ? 'input-red' : ''}`}
            placeholder={'Email address'}
            id={'email'}
            type={'text'}
          />
          <span className="text-sm text-red-500 absolute top-[60px]">
            {errors.email?.message as string}
          </span>
        </div>
        <div className="mt-6 flex flex-col relative">
          <label className="text-sm" htmlFor="password">
            Password
          </label>
          <input
            {...register('password', {
              required: 'This field is required',
              minLength: {
                value: 6,
                message: 'Your password needs to be at least 6 characters',
              },
              maxLength: {
                value: 40,
                message: 'Your password needs to be less than 40 characters',
              },
            })}
            className={`${errors.password?.message ? 'input-red' : ''}`}
            placeholder={'Password'}
            id={'password'}
            type={'password'}
          />
          <span className="text-sm text-red-500 absolute top-[60px]">
            {errors.password?.message as string}
          </span>
        </div>
        <div className="mt-6 flex flex-col relative">
          <label className="text-sm" htmlFor="passwordRepeat">
            Repeat password
          </label>
          <input
            {...register('passwordRepeat', {
              required: 'This field is required',
              validate: (val: string) => {
                if (watch('password') !== val) {
                  return 'Password must match';
                }
              },
            })}
            className={`${errors.passwordRepeat?.message ? 'input-red' : ''}`}
            placeholder={'Repeat password'}
            id={'passwordRepeat'}
            type={'password'}
          />
          <span className="text-sm text-red-500 absolute top-[60px]">
            {errors.passwordRepeat?.message as string}
          </span>
        </div>
        <div className="mt-6 border-t-[1px] relative">
          <label className="flex gap-3 items-start pt-2">
            <input
              {...register('checkbox', {
                validate: (val: boolean) => {
                  if (!val) {
                    return 'You should accept our terms and conditions';
                  }
                },
              })}
              type="checkbox"
              className="checkbox mt-2 w-4 h-4"
            />
            <span>I agree to the processing of my personal information</span>
          </label>
          <span className="text-sm text-red-500 absolute top-14">
            {errors.checkbox?.message as string}
          </span>
        </div>
        <div className="flex justify-center w-[320px] mt-4">
          <Button
            className="w-[320px] h-[40px] mt-5 text-md bg-blue-600 text-white py-3"
            htmlType="submit"
            type="primary"
            size="large"
          >
            Create
          </Button>
        </div>
      </form>
      <div className="text-center mt-4 text-sm">
        <span>
          Already have an account?{' '}
          <Link
            className="text-purple-700 hover:text-pink-400 transition-colors text-base"
            to="/sign-in"
          >
            Sign In.
          </Link>
        </span>
      </div>
    </div>
  );
};
