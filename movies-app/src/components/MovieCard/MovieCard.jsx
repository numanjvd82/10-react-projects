import './MovieCard.css';

const MovieCard = () => {
  return (
    <div className="movie-card">
      <div className="movie-card__image">
        <img
          src="https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"
          alt="movie poster"
        />
      </div>
      <div className="movie-card__info">
        <h2 className="movie-card__title">Money Plane</h2>
        <p className="movie-card__description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
          repellendus, enim libero dolor accusantium qui nam explicabo minima
          corporis sunt, perferendis quae dignissimos perspiciatis voluptate
          quos et officiis, aliquam ipsam!
        </p>
        <div className="movie-card__rating">
          <span className="movie-card__rating-value">7.5</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
