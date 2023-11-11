import "./SavedMoviesPage.css";
import MoviesCard from "../MoviesCard/MoviesCard";

import "../MoviesCardList/MoviesCardList.css";

const SavedMoviesPage = () => {
  const movieSaved = ["pic_2.png", "pic_2.png", "pic_2.png"];

  return (
    <section>
      <ul className="movies-saved__list">
        {movieSaved.map((movie, i) => (
          <MoviesCard path={movie} key={i} />
        ))}
      </ul>
    </section>
  );
};

export default SavedMoviesPage;
