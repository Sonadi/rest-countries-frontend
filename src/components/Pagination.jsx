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
          className="px-4 py-2 rounded-md border border-blue-300 bg-transparent text-blue-100 hover:bg-blue-800 transition disabled:opacity-40 disabled:hover:bg-transparent disabled:cursor-not-allowed"
        >
          Previous
        </button>

        {pageNumbers.map((number, index) =>
          number === 'ellipsis' ? (
            <span key={`ellipsis-${index}`} className="px-3 py-2 text-blue-300">...</span>
          ) : (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={`px-4 py-2 rounded-md border transition ${
                currentPage === number
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-transparent text-blue-100 border-blue-300 hover:bg-blue-800'
              }`}
            >
              {number}
            </button>
          )
        )}

        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 rounded-md border border-blue-300 bg-transparent text-blue-100 hover:bg-blue-800 transition disabled:opacity-40 disabled:hover:bg-transparent disabled:cursor-not-allowed"
        >
          Next
        </button>
      </nav>
    </div>
  );
};

export default Pagination;