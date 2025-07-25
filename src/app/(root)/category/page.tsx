import BlogByCategory from "./_components/BlogByCategory";
import JumboCategory from "./_components/JumboCategory";

const page = () => {
  return (
    <main className="bg-[#fafafa]">
      <JumboCategory />
      <BlogByCategory />
    </main>
  );
};

export default page;
