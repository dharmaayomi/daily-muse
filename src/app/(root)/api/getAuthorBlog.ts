import { Blog } from "@/types/blog";
import { User } from "@/types/user";
import { cache } from "react";

export const getAuthorBlog = cache(async (firstName: string) => {
  const response = await fetch(
    `https://servicestew-us.backendless.app/api/data/blogs?where=%60firstName%60%20%3D%20'${firstName}'&loadRelations=userBlogs'`
  );
  const blogs: Blog[] = await response.json();

  return blogs;
});
