import React from "react";

const History = () => {
  return (
    <section className="bg-[#fafafa]">
      <div className=" container mx-auto p-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-5xl font-extrabold text-gray-800 mb-4">
            Blog History
          </h2>
          <p className="text-gray-600 text-justify">
            Our blog was born out of a passion for sharing knowledge and
            insights in the ever-evolving world of technology. Initially
            launched as a small platform to document personal experiences and
            discoveries, it quickly grew into a hub for industry trends, expert
            opinions, and in-depth analysis.
          </p>
          <h2 className="text-5xl text-gray-800  font-extrabold">
            Mission and Vision
          </h2>
          <p className="text-gray-600 text-justify">
            At <span className="font-semibold">Daily Muse</span>, we strive to
            educate, inspire, and connect like-minded individuals through
            high-quality content. Our mission is to empower our readers with
            valuable knowledge, practical insights, and thought-provoking
            discussions.
          </p>
          <p className="text-gray-600 mt-4 text-justify">
            Driven by integrity, curiosity, and a commitment to excellence, we
            aim to be a trusted source of information and inspiration in the
            tech world.
          </p>
        </div>
      </div>

      {/* Mission and Vision */}
    </section>
  );
};

export default History;
