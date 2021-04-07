import React, { useEffect, useLayoutEffect, useState } from "react";
import Card from "./Card";
import Pagination from "./Pagination";
import moment from "moment";
import Spin from "./Spin"

const Body = ({ name, rate, clear }) => {
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [movielist, setMovieList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const curentMoviePage = movielist.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    setFiltered(
      movielist &&
        movielist.filter((current) => {
          return current.name.toLowerCase().includes(name.toLowerCase());
        })
    );
  }, [name, movielist]);

  useLayoutEffect(() => {
    setFiltered(
      movielist &&
        movielist.filter((current) => {
          return current.rating == rate;
        })
    );
  }, [rate, movielist]);

  useEffect(() => {
    fetch("https://public.connectnow.org.uk/applicant-test/")
      .then((response) => response.json())
      .then((data) => {
        setMovieList(data);
        setLoading(false);
      });
  }, []);

  function roundOff(num) {
    return Math.ceil(num);
  }

  return (
    <div style={{ width: "70%" }}>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={movielist.length}
        paginate={paginate}
      />

      <div style={{ color: "white", fontSize: "35px" }}>
        {loading && <Spin />}
      </div>

      {filtered &&
        filtered.map((movie, i) => (
          <Card
            key={movie.id}
            name={movie.name}
            releasedate={moment(movie.first_release_date).format("DD-MM-YYYY")}
            rating={roundOff(movie.rating)}
            summary={movie.summary}
          />
        ))}

      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={movielist.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Body;
