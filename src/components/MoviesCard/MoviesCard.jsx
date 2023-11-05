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
        <img className="movies-card__poster" src={require(`../../images/pic_1.png`)} alt="Постер"/>
        <div className="movies-card__container">
            <div className="movies-card__description">
                <h2 className="movies-card__name">33 слова о дизайне</h2>

                {pathname === '/movies' ? (
                  
                    <button type="button" className={`movies-card__button ${active ? 'movies-cards__button_like' : ''}`} onClick={handleClick}/>
                ) : (
                    <button type="button" className="movies-card__button-unlike"/>
                )}
            </div>
        <span className="movies-card__time">1ч 42м</span>
        </div>
    </li>
  )
}

export default MoviesCard