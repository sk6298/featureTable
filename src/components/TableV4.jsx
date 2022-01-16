import React, { useState } from "react";
import { filterRows, sortRows } from "../helpers/helperMethods";
import Pagination from "./Pagination";

/**
 * Table with pagination and filtering and sorting
 */
function TableV4({ columns, rows = [] }) {
  const [activePage, setActivePage] = useState(1);
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState({ order: "asc", orderBy: "id" });

  const filteredRows = filterRows(rows, filters);
  const sortedRows = sortRows(filteredRows, sort);

  const count = sortedRows.length;
  const rowsPerPage = 3;
  const totalPages = Math.ceil(count / rowsPerPage);
  const calculatedRows = sortedRows.slice(
    (activePage - 1) * rowsPerPage,
    activePage * rowsPerPage
  );

  //   methods
  const handleSort = (id) => {
    setActivePage(1);

    setSort((prevSort) => ({
      order: sort.order === "asc" && sort.orderBy === id ? "dsc" : "asc",
      orderBy: id,
    }));
  };

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
              const sortIcon = () => {
                if (col.id === sort.orderBy) {
                  if (sort.order === "asc") return "⬆";
                  if (sort.order === "dsc") return "⬇";
                } else {
                  return "↕";
                }
              };

              return (
                <td key={col.id} style={col.headerStyle}>
                  <span>{col.label} </span>
                  <button onClick={() => handleSort(col.id)}>
                    {" "}
                    {sortIcon()}
                  </button>
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

export default TableV4;
