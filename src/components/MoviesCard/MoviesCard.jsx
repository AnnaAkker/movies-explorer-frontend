import { useState } from 'react'
import { useLocation } from 'react-router-dom'

import './MoviesCard.css'

const MoviesCard = () => {

  const { pathname } = useLocation();
  const [active, setActive] = useState(false);

  const handleClick = (e) => {
    setActive((current) => !current)
  };

  return (
    
    <li className="movies-card">
        <img className="movies-cards__card" src={require(`../../images/pic_1.png`)} alt="заставка"/>
        <div className="movies-cards__container">
            <div className="movie-card__description">
                <h2 className="movie-card__name">33 слова о дизайне</h2>

                {pathname === '/movies' ? (
                  
                    <button type="button" className={`movies-cards__button ${active ? 'movies-cards__button_like' : ''}`} onClick={handleClick}/>
                ) : (
                    <button type="button" className="movies-cards__button_unlike"/>
                )}
            </div>
        <span className="card__time">1ч 42м</span>
        </div>
    </li>
  )
}

export default MoviesCard