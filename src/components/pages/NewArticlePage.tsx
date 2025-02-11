import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { RootState } from '../../store/store';
import { NewArticle } from '../ui/NewArticle';
import { Tag } from '../ui/Tag';

export type tags = { id: string; tag: typeof Tag }[];

export const NewArticlePage = () => {
  const location = useLocation().pathname;

  const tagListText = useSelector(
    (state: RootState) => state.article.article.tagList,
  );

  const tagList = location === '/new-article' ? [] : tagListText;

  const handleDeleteTag = (
    e: any,
    setTags: (tags: tags | any) => void,
    setTagsText: (tagsText: string[] | any) => void,
  ) => {
    const tagIdFromButton = e?.target?.getAttribute('data-key');
    setTags((tags: tags) =>
      tags.filter((tag: { id: string }) => tag.id !== tagIdFromButton),
    );
    setTagsText((prevTagsText: [string]) => {
      const entries = Object.entries(prevTagsText);
      return Object.fromEntries(
        entries.filter(([key]) => key !== tagIdFromButton),
      );
    });
  };

  const handleAddTag = (event: Event) => {
    event.preventDefault();
    if (tags.length > 5) {
      return;
    }
    tagId = uuidv4();
    setTags([
      ...tags,
      {
        id: tagId,
        tag: (
          <Tag
            tagId={tagId}
            handleDeleteTag={(e: Event) =>
              handleDeleteTag(e, setTags, setTagsText)
            }
            setTagsText={setTagsText}
          />
        ),
      },
    ]);
  };

  let tagId = uuidv4();
  const [tagsText, setTagsText] = useState({});
  const [tags, setTags] = useState(
    location === '/new-article'
      ? [
          {
            id: tagId,
            tag: (
              <Tag
                tagId={tagId}
                handleDeleteTag={(e: Event) =>
                  handleDeleteTag(e, setTags, setTagsText)
                }
                setTagsText={setTagsText}
              />
            ),
          },
        ]
      : [],
  );

  useEffect(() => {
    for (const index in tagList) {
      const tagId = uuidv4() + index;
      setTags(prev => [
        ...prev,
        {
          id: tagId,
          tag: (
            <Tag
              tagId={tagId}
              handleDeleteTag={(e: any) =>
                handleDeleteTag(e, setTags, setTagsText)
              }
              setTagsText={setTagsText}
              text={tagList[index]}
            />
          ),
        },
      ]);
      setTagsText({ ...tagsText, [tagId]: tagList[index] });
    }
  }, []);

  return (
    <NewArticle
      title={
        location === '/new-article' ? 'Create new article' : 'Edit the article'
      }
      newOrUpdate={location === '/new-article' ? 'New' : 'Update'}
      tags={tags as unknown as tags}
      handleAddTag={handleAddTag}
      tagsText={tagsText as string[]}
      slug={location.split('/')[2]}
    />
  );
};
