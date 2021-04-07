import React, { useEffect, useLayoutEffect, useState } from "react";
import axios from "axios";
import "regenerator-runtime/runtime.js";
import Card from "./Card";
import Pagination from "./Pagination";
import moment from "moment";
import Spin from "./Spin";
import "./body.css";

const Body = ({
  name,
  rate,
  clear,
  orderByName,
  orderByRating,
  orderByReleaseDate,
}) => {
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [movielist, setMovieList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const curentMoviePage = filtered.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    setFiltered(
        movielist.filter((current) => {
          return current.name.toLowerCase().includes(name.toLowerCase());
        })
    );
  }, [name, movielist]);

  useLayoutEffect(() => {
    setFiltered(
        movielist.filter((current) => {
          return current.rating == rate;
        })
    );
  }, [rate, movielist]);

  const fetchMovies = async () => {
      setLoading(true)
      const res = await axios.get('https://public.connectnow.org.uk/applicant-test/')
      setMovieList(res.data)
      setLoading(false)
  }
  useEffect(() => {
    fetchMovies()
    return true
  },[])

  function roundOff(num) {
    return Math.ceil(num);
  }


  return (
    <div className="card-container-all">
      <div className="loader-wrapper">{loading && <Spin />}</div>

        {curentMoviePage &&
        curentMoviePage.map((movie, i) => (
          <Card
            key={movie.id}
            name={movie.name}
            releasedate={moment(movie.first_release_date).format("DD-MM-YYYY")}
            rating={roundOff(movie.rating)}
            summary={movie.summary}
          />
        ))}

      <div style={{height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '50px'}}>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={filtered.length}
        paginate={paginate}
      />
      </div>
    </div>
  );
};

export default Body;
