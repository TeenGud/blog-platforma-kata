import { MarkdownText } from '../ui/MarkdownText';
import { Post } from '../ui/Post';

export const SinglePostPage = () => {
  const article = {
    author: {
      username: 'Blaine',
      image:
        'https://sun9-51.userapi.com/s/v1/ig2/BhmahxzDbrzLg14OHUQREDmj1wUPQpKjSv1CuuW939swesTpGaI9OGp144zcIQ4eON-pdRcWc76MlZMKtUFHIA1o.jpg?quality=95&as=32x56,48x84,72x126,108x189,160x280,240x420,360x630,480x840,540x946,640x1121,720x1261,731x1280&from=bu&u=2H1TWDgskIXEG769Qxr6xawAVoCu-pzXn-v-wSdu8Dk&cs=731x1280',
      following: false,
    },
    body: 'lalalalaalalal',
    createdAt: '11-01-2025ADASD',
    description: 'lalalalalalla',
    favorited: true,
    favoritesCount: 44,
    slug: 'lalalla',
    tagList: ['1', '2', '3', '4'],
    title: 'LALALLALA',
    updatedAt: '22-02-2025ADADAD',
  };
  const isPending = false;
  const error = false;
  if (isPending)
    return (
      <span className="loader flex items-center justify-center mt-10"></span>
    );

  if (error)
    return (
      <span className="mt-4 ml-5 font-semibold text-2xl">
        An error has occurated: {error}
      </span>
    );
  return (
    <div className="flex items-center justify-center mt-6 flex-col mb-4">
      <Post classes={'w-[1200px]'} isMyPost={true} article={article} />
      <MarkdownText text={article.body} />
    </div>
  );
};
