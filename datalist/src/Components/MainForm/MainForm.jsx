import { useState } from "react";
import "./MainForm.css";
import React from "react";
import AddedData from "../AddedData/AddedData";
import MainList from "../MainList/MainList";
const MainForm = () => {
  const [Maindata, MainState] = useState([]);

  const [Namedata, SetName] = useState("");

  const [AgeData, SetAge] = useState("");

  const [GenderData, SetGender] = useState("");

  const [message, SetMessage] = useState("");

  const [showMessage, SetShowMessage] = useState(false);

  const onNameChangeHandler = (event) => {
    SetName(event.target.value);
  };

  const onAgeChangeHandler = (event) => {
    SetAge(event.target.value);
  };

  const onGenderChangeHandler = (event) => {
    SetGender(event.target.value);
  };

  const onSubmitHandler = () => {
    console.log(Maindata);
    const data = { Namedata, AgeData: +AgeData, GenderData };
    console.log(data);
    if (Namedata && AgeData) {
      MainState((prevState) => [...prevState, data]);
      SetName("");
      SetAge("");
      SetGender("");
      SetShowMessage(false);
    } else {
      SetShowMessage(true);
      SetMessage("Please Enter both Name as well as Age");
    }
  };

  const onClearDataHandler = () => {
    SetName("");
    SetAge("");
    SetGender("");
  };

  const onClearListDataHandler = () => {
    MainState("");
  };
  return (
    <div className="container w-50 decorate-font">
      <div className="row centerit spacing">
        <div className=" col-md">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Name
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="name"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={(event) => onNameChangeHandler(event)}
              value={Namedata}
            />
          </div>
          <p>Name : {Namedata}</p>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Age
            </span>
            <input
              type="number"
              className="form-control"
              placeholder="age"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={(event) => onAgeChangeHandler(event)}
              value={AgeData}
            />
          </div>
          <p>Age : {AgeData}</p>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Gender
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="gender"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={(event) => onGenderChangeHandler(event)}
              value={GenderData}
            />
          </div>
          <p>Gender : {GenderData}</p>
          <div className="column-gap-3">
            <div className="container d-flex justify-content-center">
              <div className="row">
                <div className="col-md d-flex justify-content-center">
                  <button
                    type="button"
                    id="space-left"
                    className="btn btn-info"
                    onClick={onSubmitHandler}
                  >
                    Add Data
                  </button>

                  <button
                    type="button"
                    className="btn btn-info space-left"
                    id="space-left"
                    onClick={onClearDataHandler}
                  >
                    Clear Data
                  </button>

                  <button
                    type="button"
                    className="btn btn-info space-left"
                    id="space-left"
                    onClick={onClearListDataHandler}
                  >
                    Clear Data List
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      {showMessage && <p className="text-center">{message}</p>}
      <AddedData></AddedData>

      <div className="container">
        <div className="row">
          <div className="col-md">
            {Maindata.length ? (
              Maindata.map((ele, index, arr) => (
                <MainList
                  Name={ele.Namedata}
                  Age={ele.AgeData}
                  Gender={ele.GenderData}
                />
              ))
            ) : (
              <div className=" d-flex justify-content-center">
                <p>Data List will be displayed here</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainForm;
