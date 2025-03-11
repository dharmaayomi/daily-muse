"use client";

import { useState, useEffect } from "react";

const categories = [
  {
    name: "Front-End Developer",
    subcategories: [
      "TypeScript",
      "React",
      "Vue.js",
      "Tailwind CSS",
      "Framer Motion",
      "Next.js",
    ],
  },
  { name: "UI/UX Designer", subcategories: [] },
  {
    name: "Detail and Summary",
    subcategories: ["Programming Languages", "Libraries", "Tools"],
  },
];

const CategorySidebar: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside
      className={`w-64 p-4 bg-white shadow-lg rounded-lg transition-all ${
        isSticky ? "fixed top-28 right-7" : "relative"
      }`}
    >
      <h2 className="text-lg font-bold mb-3">Categories</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index} className="mb-2">
            <span className="font-semibold text-blue-600">{category.name}</span>
            {category.subcategories.length > 0 && (
              <ul className="ml-4 mt-1 text-gray-600">
                {category.subcategories.map((sub, i) => (
                  <li key={i} className="text-sm">
                    {sub}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default CategorySidebar;
