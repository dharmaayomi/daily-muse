import { Suspense } from "react";
import BlogListSkeleton from "../blogs/_components/BlogListSkeleton";
import BlogListRecent from "./BlogListRecent";

const ReadMore = () => {
  return (
    <section className="container mx-auto p-4 mt-9">
      <div className="mx-none md:mx-14">
        <h3 className="text-2xl md:text-3xl p-3  text-[#272727] font-bold gap-2 leading-tight">
          Read More...
        </h3>
        <p></p>
        <Suspense fallback={<BlogListSkeleton />}>
          <BlogListRecent />
        </Suspense>
      </div>
    </section>
  );
};

export default ReadMore;
