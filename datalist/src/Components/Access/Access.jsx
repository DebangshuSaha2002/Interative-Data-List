import React from "react";

const Access = ({ name, age, gender }) => {
  return (
    <>
      <div>
        <p>Name:{name}</p>
        <p>Age:{age}</p>
        <p>Gender:{gender}</p>
      </div>
    </>
  );
};

export default Access;
