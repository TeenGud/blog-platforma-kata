import { Button } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import useDeleteTheArticle from '../../hooks/useDeleteTheArticle';
import {
  addBody,
  addDescription,
  addTagList,
  addTitle,
} from '../../store/currentArticleData/currentArticleData';
import { AppDispatch } from '../../store/store';
import { formatTime } from '../../tools/formatTime';
import { handleError, resError } from '../../tools/handleError';
import { truncateString } from '../../tools/truncateString';
import { Article } from '../../types/interfaces/ArticleInterface';
import { Likes } from './Likes';
import { Loader } from './Loader';

interface PostInterface {
  classes?: string;
  isMyPost?: boolean;
  article: Article;
}

export const Post = ({ classes, isMyPost, article }: PostInterface) => {
  const navigate = useNavigate();
  const { deleteTheArticle, isLoading } = useDeleteTheArticle();
  const handleDeleteTheArticle = async () => {
    try {
      const res = await deleteTheArticle({ slug });
      if (!res.error) {
        navigate('/');
        window.location.reload();
      } else if (res.error) {
        return handleError(res as resError);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const dispatch = useDispatch<AppDispatch>();
  const handleEdit = () => {
    dispatch(addBody(body));
    dispatch(addDescription(description));
    dispatch(addTitle(title));
    dispatch(addTagList(tagList));
  };
  const {
    title,
    description,
    tagList,
    author,
    favoritesCount,
    createdAt,
    slug,
    body,
    favorited,
  } = article;
  const [isHidden, setIsHidden] = useState(true);
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
    <li
      className={`${classes} p-2 flex items-start justify-between h-[150px] cursor-pointer bg-white`}
    >
      <div className="max-w-[682px] flex flex-col gap-2">
        <div className="flex gap-3 items-center">
          <h3 className="text-blue-600 text-xl m-0">
            {truncateString(title, 60)}
          </h3>
          <Likes
            favoritesCount={favoritesCount}
            slug={slug}
            isFavoritedServer={favorited}
          />
        </div>
        <ul className="list-none flex gap-2 p-0 mt-0">
          {tagList.map((tag: string, index) => {
            if (!tag?.length) return;
            return (
              <span key={tag + index} className="border-2 p-1 py-0 text-sm">
                {truncateString(tag, 20)}
              </span>
            );
          })}
        </ul>
        <p className="text-sm">{truncateString(description, 80)}</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex gap-2">
          <div className="flex flex-col items-center">
            <span>{author.username}</span>
            <span className="text-sm font-light">{formatTime(createdAt)}</span>
          </div>
          <img src={author.image} alt="avatar" height={46} width={46} />
        </div>
        {isMyPost && (
          <div className="flex gap-2 mt-3 relative">
            <Button
              variant="outlined"
              color="danger"
              onClick={() => setIsHidden(false)}
            >
              Delete
            </Button>
            <Link to={`/articles/${slug}/edit`}>
              <Button variant="outlined" onClick={handleEdit} color="green">
                Edit
              </Button>
            </Link>
            <div
              className={`w-[240px] h-[104px] px-3 py-4 rounded bg-white flex flex-col shadow-sm absolute left-20 ${isHidden && 'hidden'}`}
            >
              <div className="flex items-start gap-1">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 1C4.13438 1 1 4.13438 1 8C1 11.8656 4.13438 15 8 15C11.8656 15 15 11.8656 15 8C15 4.13438 11.8656 1 8 1ZM7.5 4.625C7.5 4.55625 7.55625 4.5 7.625 4.5H8.375C8.44375 4.5 8.5 4.55625 8.5 4.625V8.875C8.5 8.94375 8.44375 9 8.375 9H7.625C7.55625 9 7.5 8.94375 7.5 8.875V4.625ZM8 11.5C7.80374 11.496 7.61687 11.4152 7.47948 11.275C7.3421 11.1348 7.26515 10.9463 7.26515 10.75C7.26515 10.5537 7.3421 10.3652 7.47948 10.225C7.61687 10.0848 7.80374 10.004 8 10C8.19626 10.004 8.38313 10.0848 8.52052 10.225C8.6579 10.3652 8.73485 10.5537 8.73485 10.75C8.73485 10.9463 8.6579 11.1348 8.52052 11.275C8.38313 11.4152 8.19626 11.496 8 11.5Z"
                    fill="#FAAD14"
                  />
                </svg>
                <span className="text-sm">
                  Are you sure you want to delete this article?
                </span>
              </div>
              <div className="flex justify-end">
                <Button
                  variant="outlined"
                  className="text-sm w-[34px] h-[24px]"
                  onClick={() => setIsHidden(true)}
                >
                  No
                </Button>
                <Button
                  className="bg-blue-500 text-white text-sm w-[40px] h-[24px]"
                  onClick={handleDeleteTheArticle}
                >
                  Yes
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </li>
  );
};
