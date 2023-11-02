import { Link } from "react-router-dom";
import logo from '../../images/logo.svg'

import "./Register.css"

export default function Register() {

  return (
    <main className="main">
      <section className="register">
        <Link className="register__logo" to="/">
          <img className="register__img" src={logo} alt="Логотип" />
        </Link>
        <h1 className="register__title">Добро пожаловать!</h1>
        <form className="register__form">
          <div className="register__form-container">
            <label className="register__form-label">Имя</label>
            <input className="register__form-input register__form-input_line" name="name" type="text" placeholder="Имя" minLength={2}  maxLength={30} required/>
          </div>
          <div className="register__form-container">
            <label className="register__form-label">E-mail</label>
            <input className="register__form-input" name="email" type="email" placeholder="Электронная почта" minLength={2} maxLength={30} required/>
          </div>
          <div className="register__form-container">
            <label className="register__form-label">Пароль</label>
            <input className="register__form-input" name="password" type="password" placeholder="Пароль" minLength={2} maxLength={30} required/>
            <span className="register__error">Что-то пошло не так...</span>
          </div>
          <button className="register__submit-button" type="submit">Зарегистрироваться</button>
          <div className="register__auth">
            <p className="register__text">Уже зарегистрированы?</p>
            <Link className="register__auth-link" to="/signin">Войти</Link>
          </div>
        </form>
      </section>
    </main>
  );
}

  
