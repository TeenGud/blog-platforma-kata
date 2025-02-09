import { Button } from 'antd';
import { Link } from 'react-router-dom';

export const Header = () => {
  const login = false;
  if (login) {
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
            <span>Teen Gud</span>
            <img
              src="https://sun9-38.userapi.com/impg/mV_caVLA-mLR7Nmy_zB7PP6h32cjnQKgU9HNig/LF2HObOF3Ic.jpg?size=828x1101&quality=95&sign=ee2679363fa5bd07e47a8d0ba82e5f8f&type=album"
              alt="avatar"
              width={46}
              height={46}
            />
          </Link>
          <Link to="/articles">
            <Button
              variant="outlined"
              onClick={() => {}}
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
