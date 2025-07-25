import { getPopular } from "../(root)/api/getPopular";
import BlogCard from "../(root)/blogs/_components/BlogCard";

const BlogListGlobal = async () => {
  const blogs = await getPopular();

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

export default BlogListGlobal;
