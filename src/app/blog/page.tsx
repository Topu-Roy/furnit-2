import RenderBlogs from "@/components/blog/RenderBlogs";
import { blogPosts } from "@/constants/blogPostArray";

export default function BlogPage() {
  return (
    <div className="mt-[4rem] bg-gray-200 pt-8 md:pt-10 lg:pt-14">
      <div className="flex w-full flex-col items-center justify-start gap-2">
        <h2 className="mb-8 text-center text-3xl font-bold">Read Our Latest Blog</h2>
        <p className="px-4 text-center">
          We write various things related to furniture, from tips and what things <br className="hidden md:block" />
          you need to pay attention to when choosing furniture
        </p>
      </div>
      <RenderBlogs blogs={blogPosts} />
    </div>
  );
}
