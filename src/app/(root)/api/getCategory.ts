import { Blog } from "@/types/blog";

export const getCategory = async (category: string) => {
  const response = await fetch(
    `https://servicestew-us.backendless.app/api/data/blogs?where=%60category%60%20%3D%20'${category}'`
  );
  const blogs: Blog[] = await response.json();

  return blogs;
};
