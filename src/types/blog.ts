import { User } from "./user";

export interface Blog {
  objectId: string;
  slug: string;
  category: string;
  title: string;
  description: string;
  content: string;
  thumbnail: string;
  created: number;
  totalView: number;
  user: User;
}
