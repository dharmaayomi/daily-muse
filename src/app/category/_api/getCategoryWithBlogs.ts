import { Blog } from "@/types/blog";
import { Category } from "@/types/category";

export const getCategoryWithBlogs = async () => {
  const response = await fetch(
    `https://servicestew-us.backendless.app/api/data/category?loadRelations=blogs`
  );
  const category: Category[] = await response.json();
  // console.log("API Response:", blogs);

  return category;
};
