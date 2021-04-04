import React from "react";
import SideNav from "./SideNav";
import Header from "./Header";
import Body from "./Body";
import "./app.css";
import Layout from "./Layout";

const Home = () => {
  return (
    <div>
      <Layout>
        <div className="main">
          <SideNav />
          <Body />
        </div>
      </Layout>
    </div>
  );
};

export default Home;
