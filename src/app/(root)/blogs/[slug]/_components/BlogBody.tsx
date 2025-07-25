import React, { FC } from "react";
import { getBlog } from "../../../api/getBlog";
import Markdown from "@/components/Markdown";
import IncrementViews from "./IncrementViews";

interface BlogBodyProps {
  slug: string;
}

const BlogBody: FC<BlogBodyProps> = async ({ slug }) => {
  const blogs = await getBlog(slug);
  return (
    <section className="container flex justify-center mx-auto p-4">
      <div className="space-y-3 max-w-full md:max-w-[85%] ">
        <Markdown content={blogs[0].content} />
        <IncrementViews
          objectId={blogs[0].objectId}
          totalView={blogs[0].totalView}
        />
      </div>
    </section>
  );
};

export default BlogBody;
