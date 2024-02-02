import "./App.css";
import movieData from "./movies.js";

import Navbar from "./components/Navbar/Navbar.js";
import Movie from "./components/Movie/Movie.js";
import Carousel from "./components/Carousel/Carousel.js";

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
  const currentDate = new Date();

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
      <footer>
        Time(GMT) --
        {String(currentDate.getHours()) +
          ":0" +
          String(currentDate.getMinutes())}
      </footer>
    </div>
  );
}

export default App;
