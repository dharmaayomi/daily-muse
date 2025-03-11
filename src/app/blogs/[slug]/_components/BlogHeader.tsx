// import React, { FC } from "react";
// import { getBlog } from "../../_api/getBlog";
// import { format } from "date-fns";
// import Image from "next/image";
// import { Badge } from "@/components/ui/badge";
// import Link from "next/link";

// interface BlogHeaderProps {
//   slug: string;
// }

// const BlogHeader: FC<BlogHeaderProps> = async ({ slug }) => {
//   const blogs = await getBlog(slug);
//   return (
//     <section className="container mx-auto p-4">
//       <Badge className="capitalize">{blogs[0].category}</Badge>
//       <h1 className="text-4xl font-bold">{blogs[0].title}</h1>
//       <p className="font-light text-sm">
//         {format(new Date(blogs[0].created), "dd MMM yyyy")}
//       </p>
//       <Link href={`/about/${blogs[0].user.firstName}`}>
//         {blogs[0].user.firstName}
//       </Link>
//       <div className="relative w-full h-[400px] mt-3">
//         <Image src={blogs[0].thumbnail} alt="" fill className="object-cover" />
//       </div>
//     </section>
//   );
// };

// export default BlogHeader;

import { FC } from "react";
import { format } from "date-fns";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { getBlog } from "@/app/api/getBlog";

interface BlogHeaderProps {
  slug: string;
}
const BlogHeader: FC<BlogHeaderProps> = async ({ slug }) => {
  const blogs = await getBlog(slug);
  return (
    <section className="container flex justify-center mt-20 mx-auto p-4">
      <div className="space-y-3 max-w-[70%]">
        <Badge className="capitalize bg-[#004DE8]">{blogs[0].category}</Badge>
        <h1 className="text-4xl font-bold">{blogs[0].title}</h1>
        <div className="flex items-center gap-2">
          <p className="font-light text-sm">
            {format(new Date(blogs[0].created), "dd MMM yyyy")}
          </p>
          <Link
            href={`/about/${blogs[0].user.firstName}`}
            className="hover:underline"
          >
            {blogs[0].user.firstName} {blogs[0].user.lastName}
          </Link>
        </div>

        <div className="relative w-full h-[300px] rounded-lg">
          <Image
            src={blogs[0].thumbnail}
            alt="thumbnail"
            fill
            sizes="w-full max-h-[300px]"
            className="object-cover rounded-lg overflow-hidden"
          />
        </div>
      </div>
    </section>
  );
};

export default BlogHeader;
