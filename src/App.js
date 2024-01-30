import "./App.css";

const movieData = [
  {
    title: "Inception",
    description:
      "A thief who enters the dreams of others to steal their secrets from their subconscious.",
    reviewAmount: "87%",
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
    reviewAmount: "91%",
    director: "Frank Darabont",
    releaseYear: 1994,
    starring: ["Tim Robbins", "Morgan Freeman"],
    genre: "Drama",
    runtime: "142 minutes",
    image: "./shawshank.jpg",
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
      <img src={props.movieObj.image}></img>
      <h2>{props.movieObj.title}</h2>
      <p>{props.movieObj.director}</p>
      <div className="movie-data">
        <p className="description">{props.movieObj.description}</p>
        <ul className="runtime">
          <li>Runtime: {props.movieObj.runtime}</li>
          <li>{props.movieObj.genre}</li>
          <li>{props.movieObj.runtime}</li>
        </ul>
      </div>
    </li>
  );
}

export default App;
