import React from "react";
import Blog from "../blog/blog";
import { blogPosts } from "@/constants/blogPostArray";

export default function ReadBlogSection() {
  const blogsMobile = blogPosts.slice(0, 2);
  const blogsTablet = blogPosts.slice(0, 4);
  const blogsDesktop = blogPosts.slice(0, 6);
  const blogsWideScreen = blogPosts.slice(0, 9);

  return (
    <section className="bg-white py-10 pt-20 dark:bg-zinc-900 dark:text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex w-full flex-col items-center justify-start gap-4 pb-4">
          <h2 className="mb-8 text-center text-3xl font-bold">Read Our Latest Blog</h2>
          <p className="text-center">
            We write various things related to furniture, from tips and what things I need to pay attention to when choosing furniture
          </p>
        </div>

        {/* //* Mobile */}
        <div className="mx-auto grid w-full max-w-md grid-cols-1 gap-4 sm:hidden">
          {blogsMobile.map(item => (
            <div key={`${item.id}-blog`}>
              <Blog blog={item} />
            </div>
          ))}
        </div>

        {/* //* Tablet */}
        <div className="mx-auto hidden w-full grid-cols-2 gap-4 sm:grid lg:hidden">
          {blogsTablet.map(item => (
            <div key={`${item.id}-blog`}>
              <Blog blog={item} />
            </div>
          ))}
        </div>

        {/* //* Laptop */}
        <div className="mx-auto hidden w-full grid-cols-3 gap-4 lg:grid xl:hidden">
          {blogsDesktop.map(item => (
            <div key={`${item.id}-blog`}>
              <Blog blog={item} />
            </div>
          ))}
        </div>

        {/* //* Desktop */}
        <div className="mx-auto hidden w-full grid-cols-3 gap-4 xl:grid">
          {blogsWideScreen.map(item => (
            <div key={`${item.id}-blog`}>
              <Blog blog={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
