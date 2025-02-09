import Markdown from 'markdown-to-jsx';

import '../../defaultCss.module.css';

export const MarkdownText = ({ text }: { text: string }) => {
  return (
    <Markdown className={`markdown w-[1200px] bg-white p-2 pt-4`}>
      {text}
    </Markdown>
  );
};
