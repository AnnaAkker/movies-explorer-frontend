import { Link, NavLink } from "react-router-dom";
import { useState } from 'react';

import Profile from '../../images/accont_.svg';
import Navigation from "../Navigation/Navigation";
import Menu from '../../images/burger_button_.svg';
import logo from '../../images/logo.svg';

import './Header.css';


export default function Header ({loggedOut, loggedIn }) {

  const [isClick, setIsClick] = useState(false);

  function handleClickOpen() {
    setIsClick(true);
  }

  function handleClickClose() {
    setIsClick(false);
  }

    return(
      <>
        {loggedOut && (

            <header className="header">
                <Link to="/"><img src={logo} alt="Логотип" className="header__logo"/></Link> 
                <nav className="header__container">
                    <Link to="/signup" className="header__auth">Регистрация</Link>
                    <Link to="/signin" className="header__login">Войти</Link>
                </nav>
            </header>
        )}

        {loggedIn && (

            <header className="header header_movies">
                <Link to="/"><img src={logo} alt="логотип" className="header__logo"/></Link> 
                <div className="header__container-movies">
                    <NavLink className={({isActive}) => `header__link ${isActive ? 'header__link_active' : ''} `} to="/movies">Фильмы</NavLink>
                    <NavLink className={({isActive}) => `header__link ${isActive ? 'header__link_active' : ''} `} to="/saved-movies">Сохраненные фильмы</NavLink>
                </div>
                <div className="header__container-profile">
                    <Link to="/profile" className="header__profile-link ">
                        <img src={Profile} alt="Профиль" className="header__profile-image" />
                    </Link>
                    <button onClick={handleClickOpen} className="header__profile-button" type='button'><img src={Menu} alt="Меню"/></button>
                </div>
                {isClick ? <Navigation handleClose={handleClickClose} /> : ''}
            </header>
        )}
    </>
 );
}