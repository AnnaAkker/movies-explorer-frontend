import { Link } from "react-router-dom";
import logo from '../../images/logo.svg';

import "./Login.css";

export default function Login() {
  
  return ( 
    <main className="main">
      <section className="auth">
        <Link to="/" className="auth__logo">
          <img src={logo} className="auth__img" alt="Лого" />
        </Link>
        <h1 className="auth__title">Рады видеть!</h1>
        <form className="auth__form">
          <div className="auth__form-container">
            <label className="auth__form-label">E-mail</label>
            <input className="auth__form-input" id="email-input" name="email" type="text" placeholder="Email" minLength={3} maxLength={30} required/>
          </div>
          <div className="auth__form-container">
            <label className="auth__form-label">Пароль</label>
            <input className="auth__form-input" id="password-input" name="password" type="password" placeholder="Пароль" minLength={3} maxLength={30} required/>
          </div>
          <button className="auth__submit-button button" type="submit">Войти</button>
          <div className="auth__links-сontainer">
            <p className="auth__links auth__links-name">Ещё не зарегистрированы?</p>
            <Link to="/signup" className="auth__link auth__links-link">Регистрация</Link>
          </div>
        </form>
      </section>
    </main>
  );
}

