// import React from "react";
// import blogs from "./blogs.json"; // Import JSON data
// import { Link } from "react-router-dom";

// const BlogPage = () => {
//   return (
//     <div className="bg-gradient-to-r from-dark-navy  to-light-navy min-h-screen py-10 px-4">
//       <div className="max-w-7xl mx-auto">
//         <Link to="/">
//           <h1 className="text-gold text-4xl font-bold text-center mb-8">
//             Blogs
//           </h1>
//         </Link>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {blogs.map((blog, index) => (
//             <div
//               key={index}
//               className="bg-steel-grey rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105">
//               <img
//                 src={blog.image}
//                 alt={blog.title}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-6">
//                 <h2 className="text-gold text-xl font-semibold mb-4">
//                   {blog.title}
//                 </h2>
//                 <p className="text-light-grey text-sm mb-6">
//                   {blog.description}
//                 </p>
//                 <a
//                   href={blog.url}
//                   className="inline-block bg-soft-gold text-dark-navy px-4 py-2 rounded-md font-semibold transition hover:bg-gold">
//                   Read More
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogPage;
import React, { useState } from "react";
import blogs from "./blogs.json"; // Import JSON data
import { Link } from "react-router-dom";
import { FaFilter } from "react-icons/fa"; // Import an icon for the filter

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState(""); // "" | "asc" | "desc"
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = blogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(query) ||
        blog.tags.some((tag) => tag.toLowerCase().includes(query))
    );

    setFilteredBlogs(filtered);
  };

  const handleSort = (order) => {
    setSortOrder(order);

    const sortedBlogs = [...filteredBlogs].sort((a, b) => {
      const dateA = new Date(a.date.split("-").reverse().join("-"));
      const dateB = new Date(b.date.split("-").reverse().join("-"));

      return order === "asc" ? dateA - dateB : dateB - dateA;
    });

    setFilteredBlogs(sortedBlogs);
    setShowDropdown(false); // Close dropdown after sorting
  };

  return (
    <div className="bg-gradient-to-r from-dark-navy to-light-navy min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <Link to="/">
          <h1 className="text-gold text-4xl font-bold text-center mb-8">
            Blogs
          </h1>
        </Link>

        {/* Search and Filter Section */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-4">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search by title or tags..."
            className="w-full md:w-2/3 lg:w-1/2 px-4 py-2 rounded-md border-2 border-light-grey bg-dark-navy text-light-grey focus:outline-none focus:ring-2 focus:ring-gold"
          />
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center bg-soft-gold text-dark-navy px-4 py-2 rounded-md font-semibold transition hover:bg-gold"
            >
              <FaFilter className="mr-2" />
              Filter
            </button>
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-dark-navy border border-light-grey rounded-md shadow-lg z-10">
                <button
                  onClick={() => handleSort("asc")}
                  className="block w-full text-left px-4 py-2 text-light-grey hover:bg-light-grey hover:text-dark-navy"
                >
                  Sort Ascending
                </button>
                <button
                  onClick={() => handleSort("desc")}
                  className="block w-full text-left px-4 py-2 text-light-grey hover:bg-light-grey hover:text-dark-navy"
                >
                  Sort Descending
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Blog Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog, index) => (
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
                  <h2 className="text-gold text-xl font-semibold mb-4">
                    {blog.title}
                  </h2>
                  <p className="text-light-grey text-sm mb-6">
                    {blog.description}
                  </p>
                  <a
                    href={blog.url}
                    className="inline-block bg-soft-gold text-dark-navy px-4 py-2 rounded-md font-semibold transition hover:bg-gold"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p className="text-light-grey text-center col-span-full">
              No blogs found matching your search criteria.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
