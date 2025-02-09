import { Button } from 'antd';
import { useForm } from 'react-hook-form';
import { ToastContainer } from 'react-toastify';

export const EditProfilePage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: 'Teen Gud',
      email: 'simon.gorunovich@gmail.com',
      avatar:
        'https://sun9-28.userapi.com/impg/5m1VwY7Rlk-r6x2bVRBWSs2yQaElR2ZvEh2zgg/f_LkhdWDUpE.jpg?size=827x827&quality=95&sign=c35489f6ed15dc8e1061b6bdcc803a8e&type=album',
      password: '',
    },
  });
  const handleSubmitFull = (dataForm: {
    username: string;
    email: string;
    avatar: string;
    password: string;
  }) => {
    const updateData = {
      user: {
        username: dataForm.username,
        email: dataForm.email,
        image: dataForm.avatar,
        password: dataForm.password,
        bio: '',
      },
    };
    console.log(updateData);
    console.log('ferferfer');
  };
  return (
    <div className="w-[384px] h-[600px] py-12 px-8 rounded-md shadow-md bg-white mx-auto mt-5">
      <h1 className="font-medium text-xl text-center">Edit profile</h1>
      <ToastContainer />
      <form className="mt-5" onSubmit={handleSubmit(handleSubmitFull)}>
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
          <span className="text-sm text-red-500 absolute top-[70px]">
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
          <span className="text-sm text-red-500 absolute top-[70px]">
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
          <span className="text-sm text-red-500 absolute top-[70px]">
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
          <span className="text-sm text-red-500 absolute top-[70px]">
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
