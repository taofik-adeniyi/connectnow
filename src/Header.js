import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      {/* <div>Video</div> */}
      <div className="headings video-game-heading">
        <Link to="/">
        <h1>Video games</h1>
        </Link>
      </div>
      <div className="headings contact-heading">
        <Link to="/contact">
        <h1>
          Contact
        </h1>
        </Link>
      </div>
    </div>
  );
};

export default Header;
