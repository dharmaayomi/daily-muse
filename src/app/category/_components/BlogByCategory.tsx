import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getCategoryWithBlogs } from "../_api/getCategoryWithBlogs";

export default async function BlogByCategory() {
  const categories = (await getCategoryWithBlogs()) || [];

  if (!Array.isArray(categories)) {
    console.error("Expected categories to be an array, but got:", categories);
    return (
      <p className="text-center text-gray-500">
        No categories available. Limit Reached
      </p>
    );
  }

  return (
    <section className="container mt-5 mx-auto p-4">
      <div className="mx-10">
        <div className="space-y-5 p-4">
          {categories.map((category) => {
            const categoryPost = category.blogs.slice(0, 3);
            return (
              <div key={category.objectId}>
                <div className="space-y-4 pt-8">
                  <h3 className="text-5xl font-extrabold capitalize mt-5 text-gray-800 mb-4">
                    {`${category.title} Category`}
                  </h3>
                  <p className="text-gray-600 ">{category.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 my-8 gap-5">
                  {categoryPost.map((blog, index) => (
                    <Link key={index} href={`/blogs/${blog.slug}`}>
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
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
