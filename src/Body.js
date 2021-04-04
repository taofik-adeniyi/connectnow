import React, { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios"
import { movies } from "./movies"

const Body = () => {
  const [movies, setMovies] = useState([])
  var config = {
    headers: {
      'accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9': '*',
      'access-control-allow-headers': 'X-Requested-With, Origin, Content-Type',
      'access-control-allow-origin': '*',
      "access-control-allow-methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
  };
  useEffect(() => {
     function fetchData() {
      axios.get('https://public.connectnow.org.uk/applicant-test', config)
      .then(response => console.log(response))
      .catch(err => console.log(err))
      // axios.get('https://public.connectnow.org.uk/applicant-test', config)
      //   .then(response => {
      //     console.log('d res', response)
      //   })
      //   .catch(error => {
      //     console.log('d err', error);
      //   })
    }
    fetchData()
  }, [])
  
  
  console.log('the movies', movies);
  return (
    <div className="body">
      <Card 
        title="Game Title" 
        releasedate="07/06/1993" 
        rating="7"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Vivamus viverra convallis ex. Ut consectetur scelerisque
        efficitur. Mauris nec gravida dui. Proin urna leo, tempus vehicula
        tempus ut, facilisis a mi. In eu arcu nulla. Aenean faucibus quam
        ut purus ullamcorper tempor. Vivamus id hendrerit elit, et
        imperdiet lacus. Nullam vehicula nisi vitae velit lobortis, id
        euismod odio tincidunt. Quisque id feugiat orci. Donec viverra
        pharetra lorem nec rhoncus." />

        <Card 
        title="Game Title" 
        releasedate="07/06/1993"
        rating="9"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Vivamus viverra convallis ex. Ut consectetur scelerisque
        efficitur. Mauris nec gravida dui. Proin urna leo, tempus vehicula
        tempus ut, facilisis a mi. In eu arcu nulla. Aenean faucibus quam
        ut purus ullamcorper tempor." />

        <Card 
        title="Resident Evil" 
        releasedate="07/06/1993"
        rating="3"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Vivamus viverra convallis ex. Ut consectetur scelerisque
        efficitur. Mauris nec gravida dui." />

        <Card 
        title="Game Title" 
        releasedate="07/06/1993"
        rating="4"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Vivamus viverra convallis ex. Ut consectetur scelerisque
        efficitur. Mauris nec gravida dui. Proin urna leo, tempus vehicula
        tempus ut, facilisis a mi. In eu arcu nulla. Aenean faucibus quam
        ut purus ullamcorper tempor." />
    </div>
  );
};

export default Body;
