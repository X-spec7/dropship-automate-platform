import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pageNumbers: number[] = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="flex items-center justify-center pt-8">
        <li className="mx-1">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition ${
              currentPage === 1
                ? "cursor-not-allowed bg-body-color bg-opacity-[15%] text-body-color"
                : "bg-body-color bg-opacity-[15%] text-body-color hover:bg-primary hover:bg-opacity-100 hover:text-white"
            }`}
          >
            prev
          </button>
        </li>
        {pageNumbers.map((number) => (
          <li key={number} className="mx-1">
            <button
              onClick={() => onPageChange(number)}
              className={`flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition ${
                currentPage === number
                  ? "bg-primary text-white"
                  : "bg-body-color bg-opacity-[15%] text-body-color hover:bg-primary hover:bg-opacity-100 hover:text-white"
              }`}
            >
              {number}
            </button>
          </li>
        ))}
        <li className="mx-1">
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition ${
              currentPage == totalPages
                ? "cursor-not-allowed bg-body-color bg-opacity-[15%] text-body-color"
                : "bg-body-color bg-opacity-[15%] text-body-color hover:bg-primary hover:bg-opacity-100 hover:text-white"
            }`}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
