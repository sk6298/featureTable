import React, { useState } from "react";
import Pagination from "./Pagination";

/**
 * Table with pagination
 */
function TableV2({ columns, rows = [] }) {
  const [activePage, setActivePage] = useState(1);
  const count = rows.length;
  const rowsPerPage = 3;
  const totalPages = Math.ceil(count / rowsPerPage);
  const calculatedRows = rows.slice(
    (activePage - 1) * rowsPerPage,
    activePage * rowsPerPage
  );
  return (
    <>
      <table>
        <thead>
          <tr>
            {columns.map((col) => {
              return <td key={col.id} style={col.headerStyle}>{col.label}</td>;
            })}
          </tr>
        </thead>
        <tbody>
          {calculatedRows.map((row) => {
            return (
              <tr key={row.id}>
                {columns.map((col) => {
                  if (col.format) {
                    return <td key={col.id} style={col.style}>{col.format(row[col.id])}</td>;
                  } else {
                    return <td key={col.id} style={col.style}>{row[col.id]}</td>;
                  }
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        activePage={activePage}
        count={count}
        rowsPerPage={rowsPerPage}
        totalPages={totalPages}
        setActivePage={setActivePage}
      />
    </>
  );
}

export default TableV2;
