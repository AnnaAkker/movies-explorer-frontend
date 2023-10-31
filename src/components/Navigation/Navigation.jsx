import { NavLink } from 'react-router-dom';
import account from '../../images/account.svg';

import './Navigation.css';

function Navigation ({ handleClose }) {

    return (

    <div className='navigation'>
        <div className='navigation__container'>
            <button className='navigation__button-close' type='button' onClick={handleClose}/>
            <nav className="navigation__menu-links">
                <NavLink to="/" className={({ isActive }) => `navigation__link  ${ isActive ? 'navigation__link_actv' : ''}`} onClick={handleClose}>Главная</NavLink>
                <NavLink to="/movies" className={({ isActive }) => `navigation__link  ${ isActive ? 'navigation__link_actv' : ''}`} onClick={handleClose}>Фильмы</NavLink>
                <NavLink to="/saved-movies" className={({ isActive }) => `navigation__link  ${ isActive ? 'navigation__link_actv' : '' }`} onClick={handleClose}> Сохранённые фильмы</NavLink>
            </nav>
            <NavLink to="/profile" className="navigation__profile-link"onClick={handleClose}>
                Аккаунт
                <img src={account} className="navigation__profile-button" alt="Аккаунт"/>
            </NavLink>
        </div>
      </div>
    )
}


export default Navigation;