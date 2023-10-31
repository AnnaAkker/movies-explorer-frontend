import MoviesCard from "../MoviesCard/MoviesCard";

import "./MoviesCardList.css"

const MoviesCardList = () => {

    const movie = [ 'pic_1.png',  'pic_1.png',  'pic_1.png',  'pic_1.png',  'pic_1.png' ]

    return (

      <section className="movies-list">
        <ul className="movies-list__cards">
          {movie.map((card, i) => (
            <MoviesCard path={card} key={i} />
          ))}
        </ul>
        <div>
      <button className="movies-list__more">Ещё</button>
  </div>
      </section>
    )
  }
  
  export default MoviesCardList;