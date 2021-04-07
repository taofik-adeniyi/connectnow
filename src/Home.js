import React, { useState } from "react";
import SideNav from "./SideNav";
import Header from "./Header";
import Body from "./Body";
import "./app.css";
import Layout from "./Layout";

const Home = () => {
  const [name, setName] = useState("");
  const [rate, setRate] = useState("");

  function nameChange(e) {
    console.log(">>>>>>", e.target.value);
    setName(e.target.value);
  }

  function ratingChange(e) {
    console.log(">>>>>>", e.target.value);
    setRate(e.target.value);
  }

  function clear() {
    setName("");
    setRate("");
  }

  const orderByName = (array) => {
    array.sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
      }
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
      }
      return 0;
    });
  };

  const orderByRating = (array) => {
    array.sort((a, b) => {
      return a.rating - b.rating;
    });
  };

  const orderByReleaseDate = (array) => [
    array.sort((a, b) => {
      a.releasedate > b.releasedate;
    }),
  ];

  return (
    <div>
      <Layout>
        <div className="main">
          <SideNav
            name={name}
            setName={setName}
            rate={rate}
            setRate={setRate}
            nameChange={nameChange}
            ratingChange={ratingChange}
            clear={clear}
            orderByName={orderByName}
            orderByRating={orderByRating}
            orderByReleaseDate={orderByReleaseDate}
          />
          <Body
            orderByName={orderByName}
            orderByRating={orderByRating}
            orderByReleaseDate={orderByReleaseDate}
            name={name}
            rate={rate}
            clear={clear}
          />
        </div>
      </Layout>
    </div>
  );
};

export default Home;
