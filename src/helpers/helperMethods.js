export const filterRows = (rows, filters) => {
  if (isEmpty(filters)) return rows;

  return rows.filter((row) => {
    return Object.keys(filters).every((filterId) => {
      const searchValue = filters[filterId];
      const value = row[filterId];

      if (isString(value)) {
        return value.toLowerCase().includes(searchValue.toLowerCase());
      }

      if (isBoolean(value)) {
        return (
          (value && searchValue === "true") ||
          (!value && searchValue === "false")
        );
      }

      if (isNumber(value)) {
        return value.toString().includes(searchValue);
      }

      return false;
    });
  });
};

export const sortRows = (rows, sort) => {
  return rows.sort((a, b) => {
    const { order, orderBy } = sort;
    if (isNil(a[orderBy])) return 1;
    if (isNil(b[orderBy])) return -1;

    const aToString = convertType(a[orderBy]);
    const bToString = convertType(b[orderBy]);

    if (order === "asc") {
      return aToString.localeCompare(bToString, "en", {
        numeric: isNumber(a[orderBy]),
      });
    } else {
      return bToString.localeCompare(aToString, "en", {
        numeric: isNumber(b[orderBy]),
      });
    }
  });
};

const convertType = (value) => {
  if (isBoolean(value)) {
    return value ? "1" : "-1";
  }

  if (isNumber(value)) {
    return value.toString();
  }

  if (isDateString(value)) {
    return convertToDateString(value);
  }

  return value;
};

const convertToDateString = (value) => {
  return value.substring(6, 10) + value.substring(3, 5) + value.substring(0, 2);
};

const isDateString = (value) => {
  return value.match(/^\d{2}-\d{2}-\d{4}$/);
};

const isEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

const isString = (value) => {
  return typeof value === "string";
};

const isBoolean = (value) => {
  return typeof value === "boolean";
};

const isNumber = (value) => {
  return typeof value === "number";
};

const isNil = (value) => {
  return value === null || typeof value === "undefined";
};
