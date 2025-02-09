import { Link } from 'react-router-dom';

import { Article } from '../../types/interfaces/ArticleInterface';
import { Post } from './Post';

interface PostListInterface {
  articles: Article[];
}

export const PostList = ({ articles }: PostListInterface) => {
  return (
    <ul className="flex flex-col gap-[26px] items-center mb-8 mt-6">
      {articles.map((article: Article) => {
        return (
          <Link to={`/articles/${article.slug}`} key={article.slug}>
            <Post
              classes="w-[941px] shadow-md"
              article={article}
              isMyPost={true}
            />
          </Link>
        );
      })}
    </ul>
  );
};
