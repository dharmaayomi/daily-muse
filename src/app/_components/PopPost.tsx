// import { Flame } from "lucide-react";
// import React from "react";
// import BlogListGlobal from "./BlogListGlobal";
// import { Suspense } from "react";
// import BlogListSkeleton from "../blogs/_components/BlogListSkeleton";
// import CategorySidebar from "./Category";

// const PopPost = () => {
//   return (
//     <section className="container mx-auto p-4 mt-9 max-w-[90%]">
//       <div className="mx-none  md:mx-5">
//         <h3 className="text-3xl p-2 md:text-4xl text-[#004DE8] font-bold gap-2 leading-tight text-right">
//           Popular Post
//         </h3>
//         <p></p>
//         <Suspense fallback={<BlogListSkeleton />}>
//           <BlogListGlobal />
//         </Suspense>
//       </div>
//     </section>
//   );
// };

// export default PopPost;

import { Flame } from "lucide-react";
import React, { Suspense } from "react";
import BlogListGlobal from "./BlogListGlobal";
import BlogListSkeleton from "../blogs/_components/BlogListSkeleton";

const PopPost = () => {
  return (
    <section className="container mx-auto  mt-9 ">
      <div className="mx-0 md:mx-6">
        {/* Judul dengan ikon dan garis bawah */}
        <div className="flex justify-end mx-4 pb-2 mb-4 items-center gap-3">
          <h3 className="text-3xl md:text-5xl font-extrabold text-[#004DE8] items-center gap-2 border-b-4 border-[#004DE8] inline-block">
            Popular Posts
          </h3>
          <Flame size={30} className="text-[#004DE8]" />
        </div>

        {/* Deskripsi dengan efek muncul */}
        <p className="text-gray-700 mx-4 text-lg  text-right  animate-fadeIn">
          Stay updated with the hottest and most talked-about articles in our
          community.
        </p>

        {/* Suspense untuk BlogListGlobal */}
        <Suspense fallback={<BlogListSkeleton />}>
          <div className="mt-6 animate-fadeInUp">
            <BlogListGlobal />
          </div>
        </Suspense>
      </div>
    </section>
  );
};

export default PopPost;
