import MoviesCard from "../MoviesCard/MoviesCard";

import "./MoviesCardList.css"

const MoviesCardList = () => {

    const movie = [ 'pic_1.svg',  'pic_1.svg',  'pic_1.svg',  'pic_1.svg',  'pic_1.svg' ]

    return (

      <section className="movies-list">
        <ul className="movies-list__cards">
          {movie.map((card, i) => (
            <MoviesCard path={card} key={i} />
          ))}
        </ul>
        <div>
      <button type="button" className="movies-list__more">Ещё</button>
  </div>
      </section>
    )
  }
  
  export default MoviesCardList;