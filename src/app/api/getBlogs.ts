import { Blog } from "@/types/blog";

export const getBlogs = async (size: number = 6) => {
  const response = await fetch(
    `https://servicestew-us.backendless.app/api/data/blogs?pageSize=${size}`
  );
  const blogs: Blog[] = await response.json();

  return blogs;
};
