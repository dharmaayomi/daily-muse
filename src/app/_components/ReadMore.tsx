import { Suspense } from "react";
import BlogListSkeleton from "../(root)/blogs/_components/BlogListSkeleton";
import BlogListRecent from "./BlogListRecent";
import BlogListGlobal from "./BlogListGlobal";

const ReadMore = () => {
  return (
    <section className="container mx-auto mt-9">
      <div className="mx-none md:mx-4">
        <h3 className="text-2xl md:text-3xl px-6  text-[#272727] font-bold gap-2 leading-tight">
          Read More...
        </h3>
        <p></p>
        <Suspense fallback={<BlogListSkeleton />}>
          <BlogListGlobal />
        </Suspense>
      </div>
    </section>
  );
};

export default ReadMore;
