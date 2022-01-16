import React, { useState } from "react";
import { filterRows } from "../helpers/helperMethods";
import Pagination from "./Pagination";

/**
 * Table with pagination and filtering
 */
function TableV3({ columns, rows = [] }) {
  const [activePage, setActivePage] = useState(1);
  const [filters, setFilters] = useState({});
  const filteredRows = filterRows(rows, filters);
  const count = filteredRows.length;
  const rowsPerPage = 3;
  const totalPages = Math.ceil(count / rowsPerPage);
  const calculatedRows = filteredRows.slice(
    (activePage - 1) * rowsPerPage,
    activePage * rowsPerPage
  );

  const handleSearch = (searchValue, id) => {
    setActivePage(1);

    if (searchValue) {
      setFilters((prevFilters) => {
        return { ...prevFilters, [id]: searchValue };
      });
    } else {
      setFilters((prevFilters) => {
        const updatedFilters = { ...prevFilters };
        delete updatedFilters[id];
        return updatedFilters;
      });
    }
  };
  return (
    <>
      <table>
        <thead>
          <tr>
            {columns.map((col) => {
              return (
                <td key={col.id} style={col.headerStyle}>
                  {col.label}
                </td>
              );
            })}
          </tr>
          <tr>
            {columns.map((col) => {
              return (
                <td key={col.id}>
                  <input
                    type="search"
                    key={`${col.id}-search`}
                    placeholder={`Search ${col.label}`}
                    value={filters[col.id]}
                    onChange={(event) =>
                      handleSearch(event.target.value, col.id)
                    }
                  />
                </td>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {calculatedRows.map((row) => {
            return (
              <tr key={row.id}>
                {columns.map((col) => {
                  if (col.format) {
                    return (
                      <td key={col.id} style={col.style}>
                        {col.format(row[col.id])}
                      </td>
                    );
                  } else {
                    return (
                      <td key={col.id} style={col.style}>
                        {row[col.id]}
                      </td>
                    );
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

export default TableV3;
