import React from "react";
import { durationConverter } from "../../utils/utils";
import "./MoviesCard.css";

const MoviesCard = ({
  card,
  isSavedFilms,
  savedMovies,
  saved,
  handleLikeFilm,
  onDeleteCard,
}) => {
  function onDelete() {
    onDeleteCard(card);
  }

  function onCardClick() {
    if (saved) {
      onDeleteCard(savedMovies.filter((m) => m.movieId === card.id)[0]);
    } else {
      handleLikeFilm(card);
    }
  }

  const cardLikeButtonClassName = `${
    saved
      ? "movies-card__button movies-card__button_like"
      : "movies-card__button"
  }`;
  return (
    <li className="movies-card" key={card.id}>
      <a href={card.trailerLink} target="_blank" rel="noreferrer">
        <img
          className="movies-card__poster"
          alt={card.nameRU}
          src={
            isSavedFilms
              ? card.image
              : `https://api.nomoreparties.co/${card.image.url}`
          }
        />
      </a>

      <div className="movies-card__container">
        <div className="movies-card__description">
          <h2 className="movies-card__name">{card.nameRU}</h2>

          {isSavedFilms ? (
            <button
              type="button"
              className="movies-card__button-unlike"
              onClick={onDelete}
            ></button>
          ) : (
            <button
              type="button"
              className={cardLikeButtonClassName}
              onClick={onCardClick}
            ></button>
          )}
        </div>
        <span className="movies-card__time">
          {durationConverter(card.duration)}
        </span>
      </div>
    </li>
  );
};

export default MoviesCard;
