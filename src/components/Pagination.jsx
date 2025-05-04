// components/Pagination.jsx
import React from 'react';

const Pagination = ({ currentPage, totalPages, paginate }) => {
  const pageNumbers = [];

  // Generate page numbers with ellipsis
  if (totalPages <= 5) {
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  } else {
    if (currentPage <= 3) {
      pageNumbers.push(1, 2, 3, 4, 'ellipsis', totalPages);
    } else if (currentPage >= totalPages - 2) {
      pageNumbers.push(1, 'ellipsis', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
    } else {
      pageNumbers.push(1, 'ellipsis', currentPage - 1, currentPage, currentPage + 1, 'ellipsis', totalPages);
    }
  }

  return (
    <div className="flex justify-center mt-8 mb-12">
      <nav className="flex items-center space-x-2">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded-md border border-gray-400 bg-white text-black hover:bg-gray-100 transition disabled:opacity-40"
        >
          Previous
        </button>

        {pageNumbers.map((number, index) =>
          number === 'ellipsis' ? (
            <span key={`ellipsis-${index}`} className="px-3 py-2 text-gray-500">...</span>
          ) : (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={`px-4 py-2 rounded-md border transition ${
                currentPage === number
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-black border-gray-400 hover:bg-gray-100'
              }`}
            >
              {number}
            </button>
          )
        )}

        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 rounded-md border border-gray-400 bg-white text-black hover:bg-gray-100 transition disabled:opacity-40"
        >
          Next
        </button>
      </nav>
    </div>
  );
};

export default Pagination;
