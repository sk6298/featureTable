export const data = [
  {
    id: 1,
    name: "shubham",
    age: 21,
    dob: "06-02-1998",
    isMarried: false,
  },
  {
    id: 2,
    name: "raj",
    age: 22,
    dob: "06-06-1998",
    isMarried: false,
  },
  {
    id: 3,
    name: "rushabh",
    age: 23,
    dob: "06-02-1999",
    isMarried: true,
  },
  {
    id: 4,
    name: "vivek",
    age: 24,
    dob: "06-02-1908",
    isMarried: false,
  },
  {
    id: 5,
    name: "vaibhav",
    age: 24,
    dob: "06-02-2000",
    isMarried: true,
  },
  {
    id: 6,
    name: "rahul",
    age: 23,
    dob: "06-04-1998",
    isMarried: false,
  },
  {
    id: 7,
    name: "aman",
    age: 26,
    dob: "06-02-2005",
    isMarried: false,
  },
  {
    id: 8,
    name: "devendra",
    age: 27,
    dob: "06-02-1990",
    isMarried: true,
  },
  {
    id: 9,
    name: "mahesh",
    age: 23,
    dob: "06-02-1997",
    isMarried: false,
  },
];

export const column = [
  {
    label: "Name",
    id: "name",
    headerStyle: {
      textAlign: "center",
    },
    style: {
      textAlign: "left",
    },
  },
  {
    label: "Age",
    id: "age",
    headerStyle: {
      textAlign: "center",
      width: "100px"
    },
    style: {
      textAlign: "right",
    },
  },
  {
    label: "Date of Birth",
    id: "dob",
    headerStyle: {
      textAlign: "center",
    },
    style: {
      textAlign: "center",
    },
  },
  {
    label: "Married",
    id: "isMarried",
    format: (value) => (value ? "✔" : "✖"),
    headerStyle: {
      textAlign: "center",
      width: "100px"
    },
    style: {
      textAlign: "center",
    },
  },
];
