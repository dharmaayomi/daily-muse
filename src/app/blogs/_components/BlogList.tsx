import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { getBlogs } from "../../api/getBlogs";
import BlogCard from "./BlogCard";

const BlogList = async () => {
  const blogs = await getBlogs();
  // console.log("API Response:", blogs);

  return (
    <section className="container mt-14 mx-auto p-4">
      <div>
        {blogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {blogs.map((blog) => (
              <BlogCard key={blog.objectId} blog={blog} />
            ))}
          </div>
        ) : (
          <p className=" ">No blogs available.</p>
        )}
      </div>
    </section>
  );
};

export default BlogList;
