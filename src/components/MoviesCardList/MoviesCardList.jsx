import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import SearchError from "../SearchError/SearchError";
import {
  DESKTOP_CARDS_DISPLAY_LIMIT,
  TABLET_CARDS_DISPLAY_LIMIT,
  MOBILE_CARDS_DISPLAY_LIMIT,
} from "../../utils/constants";
import Preloader from "../Preloader/Preloader";

function MoviesCardList({
  cards,
  isLoading,
  isNotFound,
  isSavedFilms,
  savedMovies,
  isReqError,
  handleLikeFilm,
  onDeleteCard,
}) {
  const [shownMovies, setShownMovies] = useState(0);
  const { pathname } = useLocation();

  function getMovieFromSaved(savedMovies, card) {
    return savedMovies.find((savedMovie) => savedMovie.movieId === card.id);
  }

  function setMoviesShownCount() {
    const display = window.innerWidth;
    if (display > 930) {
      setShownMovies(16);
    } else if (display > 590) {
      setShownMovies(8);
    } else {
      setShownMovies(5);
    }
  }

  useEffect(() => {
    setMoviesShownCount();
  }, [cards]);

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener("resize", setMoviesShownCount);
    }, 500);
    return () => {
      window.removeEventListener("resize", setMoviesShownCount);
    };
  });

  function expandMoviesDisplay() {
    const display = window.innerWidth;
    if (display > 1279) {
      setShownMovies(shownMovies + DESKTOP_CARDS_DISPLAY_LIMIT);
    } else if (display > 767) {
      setShownMovies(shownMovies + TABLET_CARDS_DISPLAY_LIMIT);
    } else {
      setShownMovies(shownMovies + MOBILE_CARDS_DISPLAY_LIMIT);
    }
  }

  return (
    <section className="movies-list">
      {isLoading && <Preloader />}
      {isNotFound && !isLoading && (
        <SearchError errorText={"По вашему запросу ничего не найдено"} />
      )}
      {isReqError && !isLoading && (
        <SearchError
          errorText={
            "Извините, страница, которую вы ищете, в данный момент недоступна. Пожалуйста, попробуйте позже."
          }
        />
      )}
      {!isLoading && !isReqError && !isNotFound && (
        <>
          {pathname === "/saved-movies" ? (
            <>
              <ul className="movies-list__cards">
                {cards.map((card) => (
                  <MoviesCard
                    key={isSavedFilms ? card._id : card.id}
                    saved={getMovieFromSaved(savedMovies, card)}
                    cards={cards}
                    card={card}
                    handleLikeFilm={handleLikeFilm}
                    isSavedFilms={isSavedFilms}
                    onDeleteCard={onDeleteCard}
                    savedMovies={savedMovies}
                  />
                ))}
              </ul>
            </>
          ) : (
            <>
              <ul className="movies-list__cards">
                {cards.slice(0, shownMovies).map((card) => (
                  <MoviesCard
                    key={isSavedFilms ? card._id : card.id}
                    saved={getMovieFromSaved(savedMovies, card)}
                    cards={cards}
                    card={card}
                    handleLikeFilm={handleLikeFilm}
                    isSavedFilms={isSavedFilms}
                    onDeleteCard={onDeleteCard}
                    savedMovies={savedMovies}
                  />
                ))}
              </ul>

              {cards.length > shownMovies ? (
                <button
                  className="movies-list__more"
                  onClick={expandMoviesDisplay}
                >
                  Ещё
                </button>
              ) : (
                ""
              )}
            </>
          )}
        </>
      )}
    </section>
  );
}

export default MoviesCardList;
