import { Blog } from "@/types/blog";

export const getRecent = async () => {
  const response = await fetch(
    `https://servicestew-us.backendless.app/api/data/blogs?pageSize=3&sortBy=%60created%60%20desc`
  );
  const blogs: Blog[] = await response.json();
  // console.log("API Response:", blogs);

  return blogs;
};
