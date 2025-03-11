import { getAuthorByFirstName } from "@/app/api/getAuthorByFirstName";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Blog } from "@/types/blog";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Badge } from "@/components/ui/badge";
import { User } from "@/types/user";

interface AuthorCardProps {
  user: User;
  blog: Blog;
}

const BlogAuthor: FC<AuthorCardProps> = ({ user, blog }) => {
  console.log(user);
  return (
    <Link href={`/blogs/${user.firstName}`}>
      <Card>
        <CardHeader>
          <div className="relative w-full h-[220px] rounded-lg overflow-hidden">
            <Image
              src={blog.thumbnail}
              alt="thumbnail"
              fill
              sizes=""
              priority
              className="object-cover"
            ></Image>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Badge>
              <p>{blog.category}</p>
            </Badge>
            <h2 className="text-xl font-bold">{blog.title}</h2>

            <p className="line-clamp-3">{blog.description}</p>
            <Badge className="hover:underline bg-[#004DE8] flex gap-2">
              <p>Read More</p> <MoveRight />
            </Badge>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BlogAuthor;
