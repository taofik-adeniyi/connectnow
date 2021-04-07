import React, { useState } from "react";
import Input from "./Input";
import "./sidenav.css";

const SideNav = ({
  name,
  setName,
  rate,
  setRate,
  nameChange,
  ratingChange,
  clear,
  orderByName,
  orderByRating,
  orderByReleaseDate,
}) => {
  const [show, setshow] = useState(false);
  const [orderreleasedate] = useState("Release Date");
  const [orderscore] = useState("Score");
  const [ordername] = useState("Name");

  const handleShow = () => {
    setshow(!show);
    // orderByReleaseDate();
  };

  return (
    <div className="side-container">
      <div className="side-menu">
        <div>
          <h2 className="headings">Filter Results</h2>
        </div>
        <Input
          change={nameChange}
          name={name}
          setName={setName}
          title="Name (contains)"
          placeholder="Text String"
        />
        <Input
          change={ratingChange}
          name={rate}
          setName={setRate}
          title="Minimum Score"
          placeholder="1 - 10"
        />
        <div>
          <h3 className="headings">Order Buy</h3>
        </div>
        <div className="icon-dropdown">
          <div className="icon-wrapper">
            <i className="bi bi-arrow-up-short my-icon"></i>
          </div>

          <div className="drop-wrapper">
            <div onClick={handleShow} className="drop-one-wrap">
              <div className="release">{orderreleasedate}</div>
              <div className="caret-wrapper">
                <i className={`bi bi-caret-${show ? "up" : "down"}-fill my-icon`}></i>
              </div>
            </div>
            {show && (
              <div>
                <div className="order-by" 
                  // onClick={orderByRating}
                  >
                  {orderscore}
                </div>
                <div className="order-by" 
                  // onClick={orderByName}
                >
                  {ordername}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="clear-wrapper">
          <button onClick={clear}>Clear</button>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
