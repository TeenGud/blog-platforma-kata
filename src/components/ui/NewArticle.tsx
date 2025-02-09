import { Button } from 'antd';
import { useForm } from 'react-hook-form';

// import { Tag } from './Tag';

interface NewArticleInterface {
  title: string;
  tags: any;
  tagsText: any;
  handleAddTag: any;
}

export const NewArticle = ({
  title,
  tags,
  tagsText,
  handleAddTag,
}: NewArticleInterface) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleSubmitFull = handleSubmit(async dataForm => {
    const newArticle = {
      article: {
        title: dataForm.title,
        description: dataForm.description,
        body: dataForm.text,
        tagList: Object.values(tagsText) as string[],
      },
    };
    console.log(newArticle);
  });
  return (
    <div className="bg-white shadow-sm w-[938px] py-12 px-8 rounded-md mx-auto mt-6 mb-9">
      <h2 className="text-center font-medium text-xl">{title}</h2>
      <form className="mt-3" onSubmit={handleSubmitFull}>
        <div className="relative flex flex-col">
          <label htmlFor="title">Title</label>
          <input
            {...register('title', {
              required: 'This field is required',
              maxLength: {
                value: 40,
                message: 'Your title needs to be less than 40 characters',
              },
            })}
            className={`input-long h-[40px] ${errors.title?.message ? 'input-red' : ''}`}
            placeholder="Title"
            id="title"
            type="text"
          />
          <span className="text-sm text-red-500 absolute top-[70px]">
            {errors.title?.message as string}
          </span>
        </div>
        <div className="mt-8 relative flex flex-col">
          <label htmlFor="description">Short description</label>
          <input
            {...register('description', {
              required: 'This field is required',
              minLength: {
                value: 3,
                message: 'Your description needs to be at least 3 characters',
              },
              maxLength: {
                value: 80,
                message: 'Your description needs to be less than 80 characters',
              },
            })}
            className={`h-[40px] input-long ${errors.description?.message ? 'input-red' : ''}`}
            placeholder="Description"
            id="description"
            type="text"
          />
          <span className="text-sm text-red-500 absolute top-[70px]">
            {errors.description?.message as string}
          </span>
        </div>
        <div className="mt-8 relative flex flex-col">
          <label htmlFor="text">Text</label>
          <textarea
            className={`w-[874px] h-[168px] rounded border-[1px] p-2 placeholder:text-sm placeholder:text-gray-400 ${errors.text?.message ? 'border-red-600' : ''}`}
            placeholder="Text"
            {...register('text', {
              required: 'This field is required',
              minLength: {
                value: 3,
                message: 'Your text needs to be at least 3 characters',
              },
            })}
            id="text"
            name="text"
          />
          <span className="text-sm text-red-500 absolute top-[196px]">
            {errors.text?.message as string}
          </span>
        </div>
        <div className="flex flex-col gap-4 mt-8">
          <span>Tags</span>
          <div className="flex justify-start items-start">
            <div className="flex flex-col gap-4">
              {tags.map((tag: any) => (
                <div key={tag.id}>{tag.tag}</div>
              ))}
            </div>
            <Button
              color="primary"
              variant="outlined"
              className="w-[160px] h-[40px] text-xl text-blue-500 border-blue-500 py-[5px]"
              size="large"
              onClick={handleAddTag}
            >
              Add tag
            </Button>
          </div>
        </div>
        <Button
          htmlType="submit"
          className="w-[320px] h-[50px] text-xl bg-blue-600 text-md text-white mt-6 rounded-md"
          type="primary"
          size="large"
        >
          Send
        </Button>
      </form>
    </div>
  );
};
