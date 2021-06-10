import React, { useEffect, useState } from "react";

export default function Exercises() {
  const [characters, setCharacters] = useState([]);
  const [prev, setPrev] = useState(null);
  const [next, setNext] = useState(null);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((json) => {
        setCharacters(json.results);
        setPrev(json.info.prev);
        setNext(json.info.next);
      });
  }, []);

  const buildCard = ({ id, name, image }) => (
    <div key={id} className="col justify-content-center d-flex">
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={image} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );

  const getNextPage = () => {
    fetch(next)
      .then((response) => response.json())
      .then((json) => {
        setCharacters(json.results);
        setPrev(json.info.prev);
        setNext(json.info.next);
      });
  };

  const getPrevPage = () => {
    fetch(prev)
      .then((response) => response.json())
      .then((json) => {
        setCharacters(json.results);
        setPrev(json.info.prev);
        setNext(json.info.next);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col justify-content-center d-flex flex-wrap">
          {characters.map(buildCard)}
        </div>
      </div>
      <div className="row">
        <div className="col justify-content-center d-flex flex-wrap p-5">
          <button
            disabled={prev === null ? true : false}
            type="button"
            className="btn btn-dark btn-lg mx-3"
            onClick={getPrevPage}
          >
            Prev
          </button>
          <button
            disabled={next === null ? true : false}
            type="button"
            className="btn btn-dark btn-lg mx-3"
            onClick={getNextPage}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
