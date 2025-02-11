import { MouseEventHandler, useState } from 'react';

import useLikeTheArticle from '../../hooks/useLikeTheArticle';
import useUnlikeTheArticle from '../../hooks/useUnlikeTheArticle';
import { handleError, resError } from '../../tools/handleError';

interface Likes {
  token?: string | null;
  isFavoritedServer?: boolean;
  slug?: string;
  favoritesCount: number;
}

export const Likes = ({ favoritesCount, slug, isFavoritedServer }: Likes) => {
  const { likeTheArticle } = useLikeTheArticle();
  const { unlikeTheArticle } = useUnlikeTheArticle();
  const [isFavoritedClient, setIsFavoritedClient] = useState(isFavoritedServer);
  const token = localStorage.getItem('token');
  const handleToggleLike = async (event: Event) => {
    event.preventDefault();
    if (!isFavoritedClient) {
      try {
        const res = await likeTheArticle({ slug });
        setIsFavoritedClient(true);
        if (!res.error) {
          window.location.reload();
        } else if (res.error) {
          return handleError(res as resError);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const res = await unlikeTheArticle({ slug });
        setIsFavoritedClient(false);
        if (!res.error) {
          window.location.reload();
        } else if (res.error) {
          return handleError(res as resError);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <button
      className="flex gap-1 items-center cursor-pointer"
      disabled={!token}
      onClick={
        handleToggleLike as unknown as MouseEventHandler<HTMLButtonElement>
      }
    >
      <svg
        width="30px"
        height="30px"
        viewBox="0 0 24 24"
        fill={isFavoritedClient || isFavoritedServer ? 'red' : 'none'}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span>{favoritesCount}</span>
    </button>
  );
};
