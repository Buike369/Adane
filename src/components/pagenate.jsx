// src/components/Pagination.js
import React from 'react';

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
    const pageCount = Math.ceil(totalItems / itemsPerPage);
    const pages = Array.from({ length: pageCount }, (_, i) => i + 1);

    return (
        <nav>
            <ul className="pagination">
                {pages.map(page => (
                    <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
                        <button className="page-link" onClick={() => onPageChange(page)}>
                            {page}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;
