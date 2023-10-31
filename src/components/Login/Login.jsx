import { Link } from "react-router-dom";
import logo from '../../images/logo.png';

import "./Login.css";

export default function Login() {
  
  return (
    <section className="auth">
      <Link to="/" className="auth__logo">
        <img src={logo} className="auth__img" alt="Лого" />
      </Link>
      <h1 className="auth__title">Рады видеть!</h1>
      <form className="auth__form">
        <div className="auth__form-container">
          <label className="auth__form-label">E-mail</label>
          <input className="auth__form-input" id="email-input" name="email" type="text" placeholder="Email" minLength={3} maxLength={30} required/>
          {/* <span className="auth__error"></span> */}
        </div>
        <div className="auth__form-container">
          <label className="auth__form-label">Пароль</label>
          <input className="auth__form-input" id="password-input" name="password" type="password" placeholder="Пароль" required/>
          {/* <span className="auth__error"></span> */}
        </div>
        <button className="auth__submit-button" type="submit">Войти</button>
        <div className="auth__links-сontainer">
          <p className="auth__links auth__links_type_name">Ещё не зарегистрированы?</p>
          <Link to="/sign-up" className="auth__link auth__links_type_link">Регистрация</Link>
        </div>
      </form>
    </section>
  );
}

