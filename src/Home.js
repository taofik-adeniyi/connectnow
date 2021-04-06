import React, { useState } from "react";
import SideNav from "./SideNav";
import Header from "./Header";
import Body from "./Body";
import "./app.css";
import Layout from "./Layout";

const Home = () => {

  const [name, setName] = useState('')
  const [rate, setRate] = useState()

  function nameChange(e){
    console.log('>>>>>>', e.target.value);
    setName(e.target.value)
  }

  function ratingChange(e){
    console.log('>>>>>>', e.target.value);
    setRate(e.target.value)
  }
  
  return (
    <div>
      <Layout>
        <div className="main">
          <SideNav name={name} setName={setName} nameChange={nameChange}  ratingChange={ratingChange} />
          <Body name={name} rate={rate} />
        </div>
      </Layout>
    </div>
  );
};

export default Home;
