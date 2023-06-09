import React from "react";

const MainList = ({ Name, Age, Gender }) => {
  return (
    <>
      <ul className="list-group list-group-horizontal justify-content-center mb-3">
        <li className="list-group-item">Name : {Name}</li>
        <li className="list-group-item">Age : {Age}</li>
        <li className="list-group-item">Gender : {Gender}</li>
      </ul>
    </>
  );
};

export default MainList;
