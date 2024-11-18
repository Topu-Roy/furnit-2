import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Calendar, NotebookPen } from "lucide-react";
import type { BlogType } from "@/constants/blogPostArray";

type Props = {
  blog: BlogType;
};

export default function Blog({ blog }: Props) {
  const { id, headline, thumbnail, article, postDate, author } = blog;
  return (
    <div className="flex w-full flex-col items-center justify-start space-y-3 rounded-lg border bg-white p-2 outline dark:bg-black dark:text-white">
      <div className="flex aspect-square w-full items-center justify-center overflow-hidden rounded-lg">
        <Image src={thumbnail} alt={headline} height={1024} width={1024} />
      </div>
      <p className="line-clamp-2 h-[3.5rem] text-center font-semibold">{headline}</p>

      <div className="flex items-center justify-center gap-4">
        <div className="flex items-center justify-center gap-2">
          <NotebookPen />
          <p className="line-clamp-1">{author.name}</p>
        </div>
        <div className="h-4 w-0.5 rounded-xl bg-black/50" />
        <div className="flex items-center justify-center gap-2">
          <Calendar />
          <span>{postDate}</span>
        </div>
      </div>

      <p className="line-clamp-3">{article.intro}</p>

      <Link href={`/blog/${id}`} className="w-full">
        <Button className="h-14 w-full rounded-sm bg-slate-200 text-gray-800 hover:bg-primary hover:text-white">Read more</Button>
      </Link>
    </div>
  );
}
