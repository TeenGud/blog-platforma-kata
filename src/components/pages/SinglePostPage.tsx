import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import useSingleArticle from '../../hooks/useSingleArticle';
import { RootState } from '../../store/store';
import { Loader } from '../ui/Loader';
import { MarkdownText } from '../ui/MarkdownText';
import { Post } from '../ui/Post';

export const SinglePostPage = () => {
  const slug = useLocation().pathname.split('/')[2];
  const username = useSelector((state: RootState) => state.user.user.username);
  const { theArticle, isLoading, hasError } = useSingleArticle({ slug });
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

  if (hasError) return <h1>Error occurated!</h1>;

  return (
    <div className="flex items-center justify-center mt-6 flex-col mb-4">
      <Post
        classes={'w-[1200px]'}
        isMyPost={theArticle.article.author.username === username}
        article={theArticle.article}
      />
      <MarkdownText text={theArticle.article.body} />
    </div>
  );
};
