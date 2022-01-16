import React from "react";
import "./Pagination.css";

function Pagination({
  activePage,
  count,
  rowsPerPage,
  totalPages,
  setActivePage,
}) {
  const begining = activePage === 1 ? 1 : (activePage - 1) * rowsPerPage + 1;
  const end = activePage === totalPages ? count : activePage * rowsPerPage;
  return (
    <div className="Pagination">
      <div className="Pagination-action">
        <button disabled={activePage === 1} onClick={() => setActivePage(1)}>
          ⏪ First
        </button>
        <button
          disabled={activePage === 1}
          onClick={() => setActivePage(activePage - 1)}
        >
          ⬅ Previous
        </button>
        <button
          disabled={activePage === totalPages}
          onClick={() => setActivePage(activePage + 1)}
        >
          ➡ Next
        </button>
        <button
          disabled={activePage === totalPages}
          onClick={() => setActivePage(totalPages)}
        >
          ⏩ Last
        </button>
      </div>
      <div className="Pagination-info">
        <p>
          Rows: {begining} to {end}
        </p>
        <p>Total Rows: {count}</p>
        <p>
          Pages: {activePage} of {totalPages}
        </p>
      </div>
    </div>
  );
}

export default Pagination;
