import './SavedMoviesPage.css'
import MoviesCard from '../MoviesCard/MoviesCard';

import '../MoviesCardList/MoviesCardList.css';

const SavedMoviesPage = () => {
  const moviesSaved = ['pic_2.png', 'pic_2.png', 'pic_2.png']

  return (
    <section>
    <div className="movies-saved__line"></div>
      <ul className="movies-saved__list">
        {moviesSaved.map((movie,i) => (
          <MoviesCard path={movie} key={i}/>
        ))}
      </ul>
    </section>
  )
}

export default SavedMoviesPage;