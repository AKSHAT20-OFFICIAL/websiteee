import React from "react";
import blogs from "./blogs.json"; // Import JSON data
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const HomeBlogSection = () => {
  // Sort blogs by date (most recent first) and select the top 3
  const sortedBlogs = blogs
    .sort((a, b) => {
      const dateA = new Date(a.date.split("-").reverse().join("-"));
      const dateB = new Date(b.date.split("-").reverse().join("-"));
      return dateB - dateA;
    })
    .slice(0, 3);

  return (
    <div className="bg-charcoal py-10 px-4">
      <div className="max-w-7xl mx-auto relative">
        {/* Section Title */}
        <h2 className="text-gold text-3xl font-bold mb-6">Recent Blogs</h2>

        {/* Floating Show More Button */}
        <Link
          to="/blogs"
          className="absolute top-0 right-0 flex items-center gap-2 bg-soft-gold text-dark-navy px-4 py-2 rounded-full shadow-lg opacity-80 hover:opacity-100 transition duration-200"
          title="Show More"
        >
          <span className="text-sm font-semibold">Show More</span>
          <FaArrowRight />
        </Link>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedBlogs.map((blog, index) => (
            <div
              key={index}
              className="bg-steel-grey rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-gold text-xl font-semibold mb-4">
                  {blog.title}
                </h3>
                <p className="text-light-grey text-sm mb-6">
                  {blog.description}
                </p>
                <Link
                  to={blog.url}
                  className="inline-block bg-soft-gold text-dark-navy px-4 py-2 rounded-md font-semibold transition hover:bg-gold"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeBlogSection;
