import { getAuthorByFirstName } from "@/app/api/getAuthorByFirstName";

interface AuthorDetailPageProps {
  params: {
    firstName: string;
  };
}

const AuthorDetailPage = async ({
  params,
}: {
  params: Promise<{ firstName: string }>;
}) => {
  const firstname = (await params).firstName;
  const author = await getAuthorByFirstName(firstname);
  if (!author) {
    return <main className="container mx-auto mt-20">Author not found</main>;
  }

  return (
    <main className="bg-[#fafafa]">
      <section className="container flex items-center justify-center mx-auto px-4 py-8">
        <div className="max-w-4xl w-full mt-20 bg-white shadow-lg rounded-xl p-6 md:p-10">
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Author Image */}
            <img
              src={author.image}
              alt="Author"
              className="rounded-full w-28 h-28 md:w-32 md:h-32 object-cover border-4 border-gray-200 shadow-sm"
            />

            {/* Author Info */}
            <div className="text-center md:text-left">
              <h2 className="font-bold text-3xl md:text-4xl text-gray-900">
                {`${author.firstName} ${author.lastName}`}
              </h2>
              <p className="text-gray-600 mt-2 text-lg">{author.description}</p>
              <p className="text-[#272727] font-semibold text-sm mt-2">
                {`Reach me out here ${author.email}`}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AuthorDetailPage;
