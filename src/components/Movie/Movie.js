import "./Movie.css";

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

export default Movie;
