import "./App.css";

const movieData = [
  {
    title: "Inception",
    description:
      "A thief who enters the dreams of others to steal their secrets from their subconscious.",
    reviewAmount: "87",
    director: "Christopher Nolan",
    releaseYear: 2010,
    starring: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
    genre: "Action",
    runtime: "148 minutes",
    image: "./inception.jpg",
  },
  {
    title: "The Shawshank Redemption",
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    reviewAmount: "91",
    director: "Frank Darabont",
    releaseYear: 1994,
    starring: ["Tim Robbins", "Morgan Freeman"],
    genre: "Drama",
    runtime: "142 minutes",
    image: "./shawshank.jpg",
  },
  {
    title: "The Godfather",
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    reviewAmount: "98",
    director: "Francis Ford Coppola",
    releaseYear: 1972,
    starring: ["Marlon Brando", "Al Pacino", "James Caan"],
    genre: "Crime",
    runtime: "175 minutes",
    image: "./godfather.jpg",
  },
  {
    title: "Forrest Gump",
    description:
      "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
    reviewAmount: "71",
    director: "Robert Zemeckis",
    releaseYear: 1994,
    starring: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
    genre: "Drama",
    runtime: "142 minutes",
    image: "./forrest-gump.jpg",
  },
];

function App() {
  const movies = movieData;
  const numMovies = movies.length;

  return (
    <div className="App">
      {numMovies > 0 && (
        <ul className="movies">
          {movieData.map((movie) => (
            <Movie movieObj={movie} key={movie.title} />
          ))}
        </ul>
      )}
    </div>
  );
}

function Movie(props) {
  return (
    <li className="movie">
      <img src={props.movieObj.image} className="movie-cover" alt={props.movieObj.title} />
      <div className="movie-titles">
        <h2>{props.movieObj.title}</h2>
        <p>{props.movieObj.director}</p>
      </div>
      <div className="movie-data">
        <div className="movie-review">
          <img src="./rottenTomatoes.png" className="movie-reviews-tomato" alt="Rotten Tomatoes" />
          <p>{props.movieObj.reviewAmount}%</p>
        </div>
        <div className="movie-description">
          <p>{props.movieObj.title} was made in {props.movieObj.releaseYear}, with the genre of {props.movieObj.genre}.</p>
        </div>
      </div>
      <div className="rating">
        <div className="rating-bar">
          <div className="rating-bar-progress" style={{width: `${props.movieObj.reviewAmount}%`}}></div>
        </div>
      </div>
    </li>
  );
}


export default App;
