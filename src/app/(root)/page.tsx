import { Suspense } from "react";
import CTA from "../_components/CTA";
import JumbotronGlobal from "../_components/JumbotronGlobal";
import PopPost from "../_components/PopPost";
import RecPost from "../_components/RecPost";
import { getPopular } from "./api/getPopular";
import BlogListSkeleton from "./blogs/_components/BlogListSkeleton";

const Blogs = async () => {
  const blogs = await getPopular();

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
