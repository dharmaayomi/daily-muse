import Link from "next/link";
import React from "react";
import AuthorCard from "./AuthorCard";

const JumboContri = () => {
  return (
    <section className="bg-[#fafafa]">
      <div className="container mx-auto p-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold text-gray-800 ">
            Meet Our Contributors
          </h1>
          <p className="mt-4 text-lg text-gray-600 text-justify">
            Get to know the brilliant minds behind our content. Our contributors
            are passionate writers, industry experts, and creative thinkers who
            bring fresh perspectives and valuable insights to every article.
          </p>
        </div>
      </div>
    </section>
  );
};

export default JumboContri;
