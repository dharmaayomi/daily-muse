import { Blog } from "./blog";
import { User } from "./user";

export interface AuthorBlog {
  userBlog: [blog: Blog[]];
}
