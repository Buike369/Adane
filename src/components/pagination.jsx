// src/App.js
import React, { useState } from 'react';
import Page from './pagenate';
import "../styles/pagination.css"

const items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);

const Pagination = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div>
            <h1>Pagination Example</h1>
            <ul>
                {currentItems.map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            <Page
                totalItems={items.length}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

export default Pagination;
