"use client";

import { Breadcrumb, Pagination } from "@/components/Common";
import { blogData, SingleBlog } from "@/components/LandingPage";
import React, { useState } from "react";

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;
  const totalPages = Math.ceil(blogData.length / blogsPerPage);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogData.slice(indexOfFirstBlog, indexOfLastBlog);

  const handlePageChagne = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Breadcrumb
        pageName="Our Blogs"
        description="This is our blogs page"
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {currentBlogs.map((blog) => (
              <div key={blog.id} className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3">
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>

          <div>
            <div>
              <Pagination 
              currentPage={ currentPage }
              totalPages={ totalPages }
              onPageChange={ handlePageChagne }
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
