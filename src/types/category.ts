import { Blog } from "./blog";

export interface Category {
  slug: string;
  description: string;
  title: string;
  blogs: Blog[];
  objectId: string;
}
