import { getPopular } from "../api/getPopular";
import { getRecent } from "../api/getRecent";
import BlogCard from "../blogs/_components/BlogCard";

const BlogListRecent = async () => {
  const blogs = await getRecent();

  return (
    <section className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {blogs.length > 0 ? (
          blogs.map((blog) => <BlogCard key={blog.objectId} blog={blog} />)
        ) : (
          <p>No blogs available.</p>
        )}
      </div>
    </section>
  );
};

export default BlogListRecent;
