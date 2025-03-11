"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { Input } from "@/components/ui/input";
import useGetBlogs from "@/hooks/api/blog/useGetBlogs";
import { Atom } from "lucide-react";
import { useState } from "react";
import { useDebounceValue } from "usehooks-ts";
import BlogCard from "../_components/BlogCard";

const LIMIT = 6;

const BlogList = () => {
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("all");

  const [debounceValue] = useDebounceValue(search, 700);
  const { data: blogs, isPending } = useGetBlogs({
    title: debounceValue,
    category: category === "all" ? undefined : category, // Jika "all", hapus filter kategori
    limit: LIMIT,
    offset: (page - 1) * LIMIT,
  });

  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    const totalPages = Math.ceil((blogs?.count || 0) / LIMIT);

    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  //   bagian ini juga bisa dihapus karna udah ada di pagination section misal impor dari saan

  return (
    <main className=" bg-[#fafafa] mt-20 mx-auto p-8">
      <h2 className="text-2xl md:text-4xl mx-10 font-semibold text-gray-700 text-center mb-6">
        Discover Insights That Inspire & Transform Your Thinking.
      </h2>
      {/* Blog list header /} */}
      <section className="max-w-full mx-10 flex gap-4 mt-11">
        <Input
          placeholder="Discover new insights..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="food">Food</SelectItem>
            <SelectItem value="tips">Tips</SelectItem>
            <SelectItem value="life">Life</SelectItem>
            <SelectItem value="book">Book</SelectItem>
          </SelectContent>
        </Select>
      </section>

      {/* {/ Blog list body */}
      <section className="grid  grid-cols-1 md:grid-cols-3 gap-4 mx-10 mt-12">
        {isPending && (
          <div className="flex justify-center items-center h-[50vh] col-span-4">
            <p className="animate-spin">
              <Atom size={40} />
            </p>
          </div>
        )}

        {blogs?.data.map((blog) => {
          return <BlogCard key={blog.objectId} blog={blog} />;
        })}
      </section>
      {/* yg ini juga bisa diimport ambil dari BlogListBody di component list dan diisi data yg diminta dari bloglistbody */}

      {/* pagination section */}
      <section className="mt-8">
        <Pagination>
          <PaginationContent>
            {/* button prev */}
            <PaginationItem>
              <PaginationPrevious onClick={handlePrev} />
            </PaginationItem>

            {/* page */}
            <PaginationItem>
              <PaginationLink>{page}</PaginationLink>
            </PaginationItem>

            {/* button next */}
            <PaginationItem>
              <PaginationNext onClick={handleNext} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </section>
    </main>
  );
};

export default BlogList;
