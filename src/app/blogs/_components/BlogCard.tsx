import { getAuthorByFirstName } from "@/app/api/getAuthorByFirstName";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Blog } from "@/types/blog";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Badge } from "@/components/ui/badge";

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: FC<BlogCardProps> = ({ blog }) => {
  console.log(blog);
  return (
    <Link href={`/blogs/${blog.slug}`}>
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
            <h2 className="text-xl font-bold line-clamp-2">{blog.title}</h2>

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

export default BlogCard;
