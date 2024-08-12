"use client";

import { useState } from "react";
import SectionTitle from "../../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";
import { Pagination } from "@/components/Common";

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 3;
  const totalPages = Math.ceil(blogData.length / blogsPerPage);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogData.slice(indexOfFirstBlog, indexOfLastBlog);

  const handlePageChagne = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  
  return (
    <section
      id="blog"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Our Latest Blogs"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {currentBlogs.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>

        <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChagne}
        />
      </div>
    </section>
  );
};

export default Blog;
export { default as blogData } from "./blogData";
export { default as SingleBlog } from "./SingleBlog";
export { default as TagButton } from "./TagButton";
export { default as SharePost } from "./SharePost";
export { default as RelatedPost } from "./RelatedPost";
