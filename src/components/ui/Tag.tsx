import { useState } from 'react';

interface TagInterface {
  tagId: string;
  handleDeleteTag: any;
  setTagsText: any;
  text?: string;
}

export const Tag = ({
  tagId,
  handleDeleteTag,
  setTagsText,
  text,
}: TagInterface) => {
  const [value, setValue] = useState(text ? text : '');
  setTagsText((prevTags: any) => ({ ...prevTags, [tagId]: value }));
  return (
    <div className="flex gap-3 mr-3">
      <input
        className="w-[300px] h-[40px]"
        placeholder="Tag"
        id={`tag${tagId}`}
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button
        data-key={tagId}
        onClick={handleDeleteTag}
        type="button"
        className="w-[160px] h-[40px] text-xl cursor-pointer rounded-md text-red-500 border-[1px] border-red-600"
      >
        Delete
      </button>
    </div>
  );
};
