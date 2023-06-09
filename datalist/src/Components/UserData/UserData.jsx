import React from "react";
import Access from "../Access/Access";

const UserData = () => {
  const data = [
    {
      name: "Debangshu",
      age: 20,
      gender: "Male",
    },
    {
      name: "Raghu",
      age: 20,
      gender: "Male",
    },
    {
      name: "Ram",
      age: 25,
      gender: "Male",
    },
    {
      name: "Seeta",
      age: 35,
      gender: "Female",
    },
  ];
  return (
    <div>
      {data.map((ele, index, arr) => (
        <Access name={ele.name} age={ele.age} gender={ele.gender} />
      ))}
    </div>
  );
};

export default UserData;
