import React from "react";
import blogs from "./blogs.json"; // Import JSON data
import { Link } from "react-router-dom";

const BlogPage = () => {
  return (
    <div className="bg-dark-navy min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <Link to="/">
          <h1 className="text-gold text-4xl font-bold text-center mb-8">
            Blogs
          </h1>
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-steel-grey rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-gold text-xl font-semibold mb-4">
                  {blog.title}
                </h2>
                <p className="text-light-grey text-sm mb-6">
                  {blog.description}
                </p>
                <a
                  href={blog.url}
                  className="inline-block bg-soft-gold text-dark-navy px-4 py-2 rounded-md font-semibold transition hover:bg-gold">
                  Explore
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
