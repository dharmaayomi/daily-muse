import React, { Suspense } from "react";
import BlogBody from "./_components/BlogBody";
import BlogHeader from "./_components/BlogHeader";
import Loading from "@/components/Loading";
import { getBlog } from "../../api/getBlog";
import CategorySidebar from "@/app/_components/Category";
import RecPost from "@/app/_components/RecPost";
import ReadMore from "@/app/_components/ReadMore";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params).slug;
  const blogs = await getBlog(slug);

  return {
    title: blogs[0].title,
    description: blogs[0].description,
    openGraph: {
      images: blogs[0].thumbnail,
    },
  };
};

const BlogDetail = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params).slug;

  return (
    <div className="bg-[#fafafa]">
      <Suspense fallback={<Loading />}>
        <BlogHeader slug={slug} />
        <BlogBody slug={slug} />
        <ReadMore />
      </Suspense>
    </div>
  );
};

export default BlogDetail;
