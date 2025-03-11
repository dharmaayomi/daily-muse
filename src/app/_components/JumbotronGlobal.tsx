import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import CarouselPicture from "./CarouselPicture";

const JumbotronGlobal = () => {
  return (
    <section className="bg-gradient-to-b from-[#004DE8] to-[#0148d7] text-white py-16 px-4 md:px-8 items-center">
      <div className="container mx-auto mt-16 max-w-[90%] flex flex-col md:flex-row items-center gap-8">
        {/* Left Content */}
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Welcome to Daily Muse
          </h2>
          <p className="mt-4 text-lg">
            Discover insightful articles, latest updates, and expert opinions on
            various topics. Stay informed and inspired as we explore the world
            of technology, creativity, and innovation.
          </p>
          <Link href="/blogs">
            <Button className="mt-6 px-6 py-3 bg-white text-[#004DE8] font-semibold rounded-lg shadow-md pointer-events-auto hover:bg-gray-200">
              Explore Blogs
            </Button>
          </Link>
        </div>
        {/* Right Image */}
        <div className="md:w-1/2">
          {/* <img
            src="/login.png"
            alt="Blog Image"
            className="w-full rounded-lg max-h-[300px] shadow-lg"
          /> */}
          <CarouselPicture />
        </div>
      </div>
    </section>
  );
};

export default JumbotronGlobal;
