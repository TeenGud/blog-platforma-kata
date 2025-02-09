import { Pagination } from 'antd';

import { PostList } from '../ui/PostList';

const data = {
  articles: [
    {
      author: {
        username: 'Teen Gud',
        image:
          'https://sun9-38.userapi.com/impg/mV_caVLA-mLR7Nmy_zB7PP6h32cjnQKgU9HNig/LF2HObOF3Ic.jpg?size=828x1101&quality=95&sign=ee2679363fa5bd07e47a8d0ba82e5f8f&type=album',
        following: false,
      },
      body: 'Some body h1 h2 h3',
      createdAt: '2025-02-11-ABCD123',
      description: 'Test description',
      favorited: true,
      favoritesCount: 16,
      slug: '123',
      tagList: ['sex', 'test', 'tag'],
      title: 'Test Title',
      updatedAt: '2025-02-21-ABCD123',
    },
    {
      author: {
        username: 'Teen Gud',
        image:
          'https://sun9-38.userapi.com/impg/mV_caVLA-mLR7Nmy_zB7PP6h32cjnQKgU9HNig/LF2HObOF3Ic.jpg?size=828x1101&quality=95&sign=ee2679363fa5bd07e47a8d0ba82e5f8f&type=album',
        following: false,
      },
      body: 'Some body h1 h2 h3',
      createdAt: '2025-02-11-ABCD123',
      description: 'Test description',
      favorited: true,
      favoritesCount: 16,
      slug: '1234',
      tagList: ['sex', 'test', 'tag'],
      title: 'Test Title',
      updatedAt: '2025-02-21-ABCD123',
    },
    {
      author: {
        username: 'Teen Gud',
        image:
          'https://sun9-38.userapi.com/impg/mV_caVLA-mLR7Nmy_zB7PP6h32cjnQKgU9HNig/LF2HObOF3Ic.jpg?size=828x1101&quality=95&sign=ee2679363fa5bd07e47a8d0ba82e5f8f&type=album',
        following: false,
      },
      body: 'Some body h1 h2 h3',
      createdAt: '2025-02-11-ABCD123',
      description: 'Test description',
      favorited: true,
      favoritesCount: 16,
      slug: '1235',
      tagList: ['sex', 'test', 'tag'],
      title: 'Test Title',
      updatedAt: '2025-02-21-ABCD123',
    },
    {
      author: {
        username: 'Teen Gud',
        image:
          'https://sun9-38.userapi.com/impg/mV_caVLA-mLR7Nmy_zB7PP6h32cjnQKgU9HNig/LF2HObOF3Ic.jpg?size=828x1101&quality=95&sign=ee2679363fa5bd07e47a8d0ba82e5f8f&type=album',
        following: false,
      },
      body: 'Some body h1 h2 h3',
      createdAt: '2025-02-11-ABCD123',
      description: 'Test description',
      favorited: true,
      favoritesCount: 16,
      slug: '1236',
      tagList: ['sex', 'test', 'tag'],
      title: 'Test Title',
      updatedAt: '2025-02-21-ABCD123',
    },
    {
      author: {
        username: 'Teen Gud',
        image:
          'https://sun9-38.userapi.com/impg/mV_caVLA-mLR7Nmy_zB7PP6h32cjnQKgU9HNig/LF2HObOF3Ic.jpg?size=828x1101&quality=95&sign=ee2679363fa5bd07e47a8d0ba82e5f8f&type=album',
        following: false,
      },
      body: 'Some body h1 h2 h3',
      createdAt: '2025-02-11-ABCD123',
      description: 'Test description',
      favorited: true,
      favoritesCount: 16,
      slug: '1237',
      tagList: ['sex', 'test', 'tag'],
      title: 'Test Title',
      updatedAt: '2025-02-21-ABCD123',
    },
  ],
  articlesCount: 300,
};

export const HomePage = () => {
  return (
    <div className="flex flex-col items-center mb-8">
      <PostList articles={data.articles} />
      <Pagination
        defaultCurrent={1}
        total={Math.ceil(data.articlesCount / 5) * 10}
        totalBoundaryShowSizeChanger={Math.floor(data.articlesCount / 5)}
        onChange={() => {}}
      />
    </div>
  );
};
