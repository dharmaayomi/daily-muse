// import React from "react";
// import BlogListGlobal from "./BlogListGlobal";
// import { Suspense } from "react";
// import BlogListSkeleton from "../blogs/_components/BlogListSkeleton";
// import BlogListRecent from "./BlogListRecent";

// const RecPost = () => {
//   return (
//     <section className="container mx-auto p-4 mt-9 max-w-[90%]">
//       <div className="mx-none md:mx-5">
//         <h3 className="text-3xl md:text-4xl p-3 text-[#004DE8] font-bold gap-2 leading-tight">
//           Recent Post
//         </h3>
//         <p></p>
//         <Suspense fallback={<BlogListSkeleton />}>
//           <BlogListRecent />
//         </Suspense>
//       </div>
//     </section>
//   );
// };

// export default RecPost;

import React, { Suspense } from "react";
import BlogListGlobal from "./BlogListGlobal";
import BlogListSkeleton from "../blogs/_components/BlogListSkeleton";
import BlogListRecent from "./BlogListRecent";
import { FileText } from "lucide-react";

const RecPost = () => {
  return (
    <section className="container mx-auto mt-9">
      <div className="mx-0 md:mx-6 text-left ">
        {/* Judul dengan efek garis bawah */}
        <div className="inline-block border-b-4 mx-4 border-[#004DE8] pb-2 mb-4">
          <h3 className="text-3xl md:text-5xl mx-4 text-left font-extrabold text-[#004DE8] flex items-center gap-2">
            <FileText size={30} />
            Recent Posts
          </h3>
        </div>

        {/* Deskripsi dengan efek muncul */}
        <p className="text-gray-700 max-w-3xl text-lg mx-4 animate-fadeIn">
          Discover the latest insights, trends, and stories from our expert
          contributors.
        </p>

        {/* Suspense untuk BlogListRecent */}
        <Suspense fallback={<BlogListSkeleton />}>
          <div className="mt-6 animate-fadeInUp">
            <BlogListRecent />
          </div>
        </Suspense>
      </div>
    </section>
  );
};

export default RecPost;
