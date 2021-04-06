import React, { useState } from "react";
import Input from "./Input";

const SideNav = ( {name, setName, nameChange, ratingChange, clear } ) => {

  
  return (
    <div className="side-container">
      <div className="side-menu">
        <div>
          <h2 className="headings">Filter Results</h2>
        </div>
        <Input change={nameChange} name={name} setName={setName} title="Name (contains)" placeholder="Text String" />
        <Input change={ratingChange} title="Minimum Score" placeholder="1 - 10" />
        <div>
          <h3 className="headings">Order Buy</h3>
        </div>
        <div
          style={{
            // backgroundColor: "purple",
            height: "60px",
            display: "flex",
            width: "100%",
          }}
        >
          <div>
            <i
              className="bi bi-arrow-up"
              style={{ fontSize: "1.5rem", color: "blue" }}
            ></i>
          </div>
          <div
            style={{ width: "90%", height: "30px", backgroundColor: "yellow" }}
          >
            <div className="over">
              <div className="user-name">Release Date</div>
              <div className="dropdown-arrow"></div>
              <div className="dropdown-menu">
                <ul>
                  <li>Release Date</li>
                  <li>Score</li>
                  <li>Name</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "8px",
          }}
        >
          <button onClick={clear}>Clear</button>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
