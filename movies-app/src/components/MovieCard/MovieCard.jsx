import './MovieCard.css';

const MovieCard = (movie) => {
  const { original_title, poster_path, vote_average, overview } = movie;
  const baseImageUrl = 'https://image.tmdb.org/t/p/w500/';
  return (
    <div className="movie-card">
      <div className="movie-card__image">
        <img src={`${baseImageUrl}${poster_path}`} alt={original_title} />
      </div>
      <div className="movie-card__info">
        <h2 className="movie-card__title">{original_title}</h2>
        <p className="movie-card__description">{overview}</p>
        <div className="movie-card__rating">
          <span className="movie-card__rating-value">
            {vote_average.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
