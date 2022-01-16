import { column } from "./sampleData";
import "./App.css";
import TableV5 from "./components/TableV5";
import Form from "./components/Form";
import { useState } from "react";
// import TableV4 from "./components/TableV4";
// import TableV3 from "./components/TableV3";
// import Table from "./components/Table";
// import TableV2 from "./components/TableV2";

function App() {
  const [rowData, setRowData] = useState([])
  const handleSubmit = (event,userInfo) => {
    event.preventDefault();
    userInfo.id = rowData.length + 1;
    userInfo.isMarried = JSON.parse(userInfo.isMarried);
    setRowData(prevRowData => (
      [...prevRowData,
      userInfo]
    ))
  }
  return (
    <div className="App">
      <Form handleSubmit={handleSubmit}/>
      {/* <Table columns={column} rows={data} /> */}
      {/* <TableV2 columns={column} rows={data} /> */}
      {/* <TableV3 columns={column} rows={data} /> */}
      {/* <TableV4 columns={column} rows={data} /> */}
      <TableV5 columns={column} rows={rowData} />
    </div>
  );
}

export default App;
