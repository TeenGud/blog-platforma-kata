import { Pagination } from 'antd';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import useAllArticles from '../../hooks/useAllArticles';
import { Loader } from '../ui/Loader';
import { PostList } from '../ui/PostList';

export const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(
    searchParams.get('page') ? Number(searchParams.get('page')) : 1,
  );
  const { isLoading, hasError, articles } = useAllArticles({
    offset: (page - 1) * 5,
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

  if (hasError) return <h1>Some error occurated</h1>;

  return (
    <div className="flex flex-col items-center mb-8">
      <PostList articles={articles.articles} />
      <Pagination
        defaultCurrent={page}
        total={Math.ceil(articles.articlesCount / 5) * 10}
        totalBoundaryShowSizeChanger={Math.floor(articles.articlesCount / 5)}
        onChange={page => {
          setPage(page);
          setSearchParams({ page: String(page) });
        }}
      />
    </div>
  );
};
