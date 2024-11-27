import Image from "next/image";
import RecommendedBlogs from "./recommendedBlogs";
import { blogPosts } from "@/constants/blogPostArray";

export default async function BlogDetails(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const { id } = params;
  const parsedId = parseInt(id);
  const blog = blogPosts.find(item => item.id === parsedId);

  if (!blog) {
    return (
      <div className="mx-auto mt-[6rem] max-w-7xl pb-14">
        <p className="text-center">Sorry, Could not find the article.</p>
      </div>
    );
  }

  return (
    <div className="mt-[4rem] bg-gray-200 pt-8 md:pt-10 lg:pt-14">
      <div className="prose mx-auto max-w-7xl px-4 py-2 sm:py-3 md:py-4 xl:px-6">
        <h2 className="my-4 mb-8 pt-2 text-center text-3xl font-bold sm:mt-8 sm:text-left md:hidden">{blog.headline}</h2>

        <div className="flex w-full items-center justify-center overflow-hidden rounded-lg lg:h-[30rem]">
          <Image className="my-0 w-full py-0 shadow" width={1800} height={900} src={blog.cover} alt={blog.headline} />
        </div>

        <h2 className="my-4 hidden pt-2 text-center text-3xl font-bold md:block">{blog.headline}</h2>

        <div className="flex items-center justify-start gap-4 pt-8 md:pt-2">
          <Image className="m-0 rounded-full p-0" height={80} width={80} src={blog.author.imageURL} alt={blog.author.name} />
          <div className="flex h-full w-full flex-col items-start justify-start">
            <p className="m-0 font-semibold text-black/80">{blog.author.name}</p>
            <p className="m-0">{blog.postDate}</p>
          </div>
        </div>

        <h2 className="group cursor-pointer text-3xl font-bold hover:underline">
          Overview <span className="opacity-0 group-hover:opacity-100">#</span>
        </h2>

        <p>{blog.article.intro}</p>

        {blog.article.blocks.map(textBlock => (
          <div key={`${textBlock.heading.slice(0, 3)}-${textBlock.text.slice(0, 3)}-textBlock`}>
            <h2 key={textBlock.heading} className="group cursor-pointer text-3xl font-bold hover:underline">
              {textBlock.heading} <span className="opacity-0 group-hover:opacity-100">#</span>
            </h2>
            <p>{textBlock.text}</p>
          </div>
        ))}

        <div className="mx-auto my-16 h-[2px] w-[50%] bg-black/30" />

        <h2 className="mt-4 pb-8 text-center text-3xl font-bold">You might also like</h2>
        <RecommendedBlogs currentBlogId={blog.id} blogs={blogPosts} />
      </div>
    </div>
  );
}
