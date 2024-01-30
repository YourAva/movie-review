import "./App.css";
import movieData from "./movies.js";
import React, { useState } from "react";

function App() {
  const carouselItems = [
    {
      imgAlt: "Item 1",
      img: "./movies/matrix.jpg",
    },
    {
      imgAlt: "Item 2",
      img: "./movies/fightclub.jpg",
    },
    {
      imgAlt: "Item 3",
      img: "./movies/darkKnight.jpg",
    },
  ];
  const movies = movieData;
  const numMovies = movies.length;

  return (
    <div className="App">
      <Navbar />
      <Carousel items={carouselItems} />
      {numMovies > 0 && (
        <div className="movies">
          {movieData.map((movie) => (
            <Movie movieObj={movie} key={movie.title} />
          ))}
        </div>
      )}
    </div>
  );
}

function Navbar() {
  return (
    <div className="navbar">
      <h1>React Movies</h1>
    </div>
  );
}

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousSlide = () => {
    const index = (currentIndex - 1 + items.length) % items.length;
    setCurrentIndex(index);
  };

  const goToNextSlide = () => {
    const index = (currentIndex + 1) % items.length;
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      <div className="carousel-items">
        {items.map((item, index) => (
          <div
            key={index}
            className={index === currentIndex ? "active" : "inactive"}
          >
            <img
              src={item.img}
              alt={item.imgAlt}
              className="carousel-items-image"
            />
          </div>
        ))}
      </div>
      <button onClick={goToPreviousSlide} className="carousel-button prev">
        <img
          src="./arrow-left.png"
          alt="arrow-left"
          className="carousel-button-left-arrow"
        />
      </button>
      <button onClick={goToNextSlide} className="carousel-button next">
        <img
          src="./arrow-right.png"
          alt="arrow-right"
          className="carousel-button-right-arrow"
        />
      </button>
    </div>
  );
};

function Movie(props) {
  return (
    <div className="movie">
      <img
        src={props.movieObj.image}
        className="movie-cover"
        alt={props.movieObj.title}
      />
      <div className="movie-titles">
        <h2>{props.movieObj.title}</h2>
        <p>{props.movieObj.director}</p>
      </div>
      <div className="movie-data">
        <div className="movie-review">
          <img
            src="./rottenTomatoes.png"
            className="movie-reviews-tomato"
            alt="Rotten Tomatoes"
          />
          <p>{props.movieObj.reviewAmount}%</p>
        </div>
        <div className="movie-description">
          <ul>
            <li>
              <b>Genre:</b> {props.movieObj.genre}
            </li>
            <li>
              <b>Released:</b> {props.movieObj.releaseYear}
            </li>
            <li>
              <b>Runtime:</b> {props.movieObj.runtime}
            </li>
          </ul>
        </div>
      </div>
      <div className="rating">
        <div className="rating-bar">
          <div
            className="rating-bar-progress"
            style={{ width: `${props.movieObj.reviewAmount}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default App;
