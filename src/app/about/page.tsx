import { getAuthors } from "../api/getAuthors";
import AuthorCard from "./[firstName]/_components/AuthorCard";
import History from "./[firstName]/_components/History";
import JumboContri from "./[firstName]/_components/JumboContri";

const Authors = async () => {
  const data = await getAuthors();

  return (
    <main className="bg-[#fafafa]">
      <section className="container mx-auto mt-20">
        {/* {data.map((author) => author.firstName)} */}
        <History />
        <JumboContri />
        <AuthorCard />
      </section>
    </main>
  );
};

export default Authors;
