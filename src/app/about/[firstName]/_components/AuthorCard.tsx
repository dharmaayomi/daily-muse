import { getAuthors } from "@/app/api/getAuthors";
import Link from "next/link";

const AuthorCard = async () => {
  const authors = await getAuthors();

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {authors?.length > 0 ? (
        authors.map((author) => (
          <div
            key={author.objectId}
            className="bg-white rounded-lg shadow-lg p-6 text-center"
          >
            <img
              src={author.image}
              alt={author.firstName + " " + author.lastName}
              className="mx-auto rounded-full w-24 h-24 mb-4"
            />
            <h3 className="text-xl font-semibold">
              {author.firstName} {author.lastName}
            </h3>
            <p className="text-gray-600">{author.title || "Contributor"}</p>
            <p className="text-gray-500 text-sm mt-2">{author.description}</p>

            <Link
              href={`/about/${author.firstName}`}
              className="mt-3 inline-block text-blue-500 font-medium hover:underline"
            >
              See Profiles
            </Link>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500 col-span-3">
          No authors found.
        </p>
      )}
    </div>
  );
};

export default AuthorCard;
