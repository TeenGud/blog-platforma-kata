import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { NewArticle } from '../ui/NewArticle';
import { Tag } from '../ui/Tag';

export const NewArticlePage = () => {
  const location = useLocation().pathname;

  const tagList = location === '/new-article' ? [] : ['1', '2', '3', '4', '5'];

  const handleDeleteTag = (e: any, setTags: any, setTagsText: any) => {
    const tagIdFromButton = e?.target?.getAttribute('data-key');
    setTags((tags: any) =>
      tags.filter((tag: any) => tag.id !== tagIdFromButton),
    );
    setTagsText((prevTagsText: any) => {
      const entries = Object.entries(prevTagsText);
      return Object.fromEntries(
        entries.filter(([key]) => key !== tagIdFromButton),
      );
    });
  };

  const handleAddTag = (event: any) => {
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
            handleDeleteTag={(e: any) =>
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
                handleDeleteTag={(e: any) =>
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
      tags={tags}
      handleAddTag={handleAddTag}
      tagsText={tagsText}
    />
  );
};
