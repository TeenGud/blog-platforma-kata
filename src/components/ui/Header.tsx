import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { AppDispatch, RootState } from '../../store/store';
import { handleLogOut } from '../../tools/handleLogOut';

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const token = useSelector((state: RootState) => state.user.user.token);
  const username = useSelector((state: RootState) => state.user.user.username);
  const avatarUrl = useSelector(
    (state: RootState) => state.user.user.avatarUrl,
  );
  if (token) {
    return (
      <header className="p-4 flex justify-between items-center h-[80px] bg-white">
        <Link to="/">
          <h1 className="text-xl">Realworld Blog</h1>
        </Link>
        <div className="flex gap-4 items-center">
          <Link to="/new-article">
            <Button
              variant="outlined"
              className="h-[50px] w-[120px]"
              color="green"
            >
              Create article
            </Button>
          </Link>
          <Link
            to="/profile"
            className="flex gap-2 items-center hover:text-purple-400 transition-colors"
          >
            <span>{username}</span>
            <img
              src={avatarUrl || undefined}
              alt="avatar"
              width={46}
              height={46}
            />
          </Link>
          <Link to="/articles">
            <Button
              variant="outlined"
              onClick={() => handleLogOut(dispatch, navigate)}
              className="text-xl"
              size="large"
            >
              Log out
            </Button>
          </Link>
        </div>
      </header>
    );
  } else {
    return (
      <header className="p-4 flex justify-between items-center h-[80px] bg-white">
        <Link to="/">
          <h1 className="text-xl">Realworld Blog</h1>
        </Link>
        <div>
          <Link to="/sign-in" className="h-[50px]">
            <Button
              className="mr-8 text-xl border-none h-[50px]"
              type="text"
              size="large"
            >
              Sign in
            </Button>
          </Link>
          <Link to="/sign-up" className="h-[50px]">
            <Button
              variant="outlined"
              color="green"
              size="large"
              className="text-xl"
            >
              Sign up
            </Button>
          </Link>
        </div>
      </header>
    );
  }
};
