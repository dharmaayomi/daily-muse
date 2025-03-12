import { Suspense } from "react";
import JumbotronGlobal from "./_components/JumbotronGlobal";
import { getBlogs } from "./api/getBlogs";
import BlogList from "./blogs/_components/BlogList";
import BlogListSkeleton from "./blogs/_components/BlogListSkeleton";
import BlogListGlobal from "./_components/BlogListGlobal";
import { getPopular } from "./api/getPopular";
import BlogListRecent from "./_components/BlogListRecent";
import PopPost from "./_components/PopPost";
import RecPost from "./_components/RecPost";
import CategorySidebar from "./_components/Category";
import CTA from "./_components/CTA";

const Blogs = async () => {
  const blogs = await getPopular();
  console.log(blogs);

  return (
    <main className=" bg-[#fafafa]">
      <JumbotronGlobal />
      <Suspense fallback={<BlogListSkeleton />}>
        <PopPost />
        {/* <BlogListGlobal /> */}
        {/* <BlogListRecent /> */}
        <RecPost />
        <CTA />
        {/* <CategorySidebar /> */}
      </Suspense>
    </main>
  );
};

export default Blogs;
