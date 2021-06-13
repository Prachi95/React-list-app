import React, { useState } from 'react'
import "./Pagination.css";

const Pagination = ({ data, RenderComponent, pageLimit, dataLimit }) => {
    const [pages] = useState(Math.round(data.length / dataLimit));
    const [currentPage, setCurrentPage] = useState(1);

    function goToNextPage() {
        setCurrentPage(page => page + 1);
     }
   
    function goToPreviousPage() {
        setCurrentPage(page => page - 1);
    }

    function changePage(event) {
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
    }

    const getPaginatedData = () => {
        const startIndex = currentPage*dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return data.slice(startIndex, endIndex);
    };

    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
    };

    return (
    <div>
        <div className="dataContainer">
            <RenderComponent data={getPaginatedData()} />
        </div>

        <div className="pagination">
            {/* previous button */}
            <button onClick={goToPreviousPage} className={`prev ${currentPage === 1 ? 'disabled' : ''}`}>
                Prev
            </button>

            {/* show page numbers */}
            {getPaginationGroup().map((item, index) => (
                <button
                    key={index}
                    onClick={changePage}
                    className={`paginationItem ${currentPage === item ? 'active' : null}`}
                >
                    <span>{item}</span>
                </button>
            ))}

            {/* next button */}
            <button onClick={goToNextPage} className={`next ${currentPage === pages ? 'disabled' : ''}`}>
                Next
            </button>
        </div>
    </div>
    );
}

export default Pagination
