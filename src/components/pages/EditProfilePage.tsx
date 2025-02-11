import { Button } from 'antd';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import useUpdateUser from '../../hooks/useUpdateUser';
import { AppDispatch, RootState } from '../../store/store';
import { handleError, resError } from '../../tools/handleError';
import {
  handleUpdateUserInformation,
  resUserData,
} from '../../tools/handleUpdateUserInformation';
import { Loader } from '../ui/Loader';

export const EditProfilePage = () => {
  const { updateUser, isLoading } = useUpdateUser();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const username = useSelector((state: RootState) => state.user.user.username);
  const email = useSelector((state: RootState) => state.user.user.email);
  const avatarUrl = useSelector(
    (state: RootState) => state.user.user.avatarUrl,
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username,
      email,
      avatar: avatarUrl,
      password: '',
    },
  });
  const handleSubmitFull = handleSubmit(async dataForm => {
    const updateData = {
      user: {
        username: dataForm.username,
        email: dataForm.email,
        image: dataForm.avatar,
        password: dataForm.password,
        bio: '',
      },
    };
    try {
      const res = await updateUser({ user: updateData });
      if (res.data) {
        handleUpdateUserInformation(res as resUserData, dispatch);
        navigate('/');
      } else if (res.error) {
        return handleError(res as resError);
      }
    } catch (error) {
      console.log(error);
    }
  });
  if (isLoading)
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Loader />
      </div>
    );
  return (
    <div className="w-[384px] h-[600px] py-12 px-8 rounded-md shadow-md bg-white mx-auto mt-5">
      <h1 className="font-medium text-xl text-center">Edit profile</h1>
      <ToastContainer />
      <form className="mt-5" onSubmit={handleSubmitFull}>
        <div className="relative">
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
            placeholder="Username"
            id="username"
            type="text"
            className={`w-[320px] h-[40px] ${errors.username?.message ? 'input-red' : ''}`}
          />
          <span className="text-sm text-red-500 absolute top-[70px] left-0">
            {errors.username?.message as string}
          </span>
        </div>
        <div className="mt-8 relative">
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
            id="email"
            type="email"
            className={`w-[320px] h-[40px] ${errors.email?.message ? 'input-red' : ''}`}
          />
          <span className="text-sm text-red-500 absolute top-[70px] left-0">
            {errors.email?.message as string}
          </span>
        </div>
        <div className="mt-8 relative">
          <label className="text-sm" htmlFor="password">
            New password
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
            placeholder="New password"
            className={`w-[320px] h-[40px] ${errors.password?.message ? 'input-red' : ''}`}
            id="password"
            type="password"
          />
          <span className="text-sm text-red-500 absolute top-[70px] left-0">
            {errors.password?.message as string}
          </span>
        </div>
        <div className="mt-8 relative">
          <label className="text-sm" htmlFor="avatar">
            Avatar image(url)
          </label>
          <input
            {...register('avatar', {
              required: '',
              pattern: {
                value:
                  /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g,
                message: 'You should provide correct url',
              },
            })}
            className={`w-[320px] h-[40px] ${errors.avatar?.message ? 'input-red' : ''}`}
            placeholder="Avatar image"
            type="text"
          />
          <span className="text-sm text-red-500 absolute top-[70px] left-0">
            {errors.avatar?.message as string}
          </span>
        </div>
        <Button
          className="bg-blue-600 text-white mt-10 py-3 w-[100%]"
          htmlType="submit"
          type="primary"
          size="large"
        >
          Save
        </Button>
      </form>
    </div>
  );
};
