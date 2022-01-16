import React, { useState } from "react";

function Form({ handleSubmit }) {
  const [userInfo, setUserInfo] = useState({
    name: "",
    age: 23,
    dob: "2000-01-01",
    isMarried: true,
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [id]: value,
    }));
  };

  return (
    <div style={{
      width: "100%",
      margin: "20px"
    }}>
      <form
        onSubmit={(event) => handleSubmit(event,userInfo)}
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto auto",
          gap: "20px",
          padding: "20px",
          border: "1px dashed black",
        }}
      >
        <label htmlFor="name">
          Name
          <input
            type="text"
            value={userInfo.name}
            id="name"
            onChange={(event) => handleChange(event)}
          />
        </label>
        <label htmlFor="age">
          Age
          <input
            type="number"
            value={userInfo.age}
            id="age"
            onChange={(event) => handleChange(event)}
          />
        </label>
        <label htmlFor="dob">
          Date of Birth
          <input
            type="date"
            value={userInfo.dob}
            id="dob"
            max="99"
            min="0"
            onChange={(event) => handleChange(event)}
          />
        </label>
        <label htmlFor="isMarried">
          Marriage Status
          <select
            id="isMarried"
            value={userInfo.isMarried}
            onChange={(event) => handleChange(event)}
          >
            <option value="false">Single</option>
            <option value="true">Married</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Form;
