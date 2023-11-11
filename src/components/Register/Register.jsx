import React from "react";
import "../Form/Form.css";
import Form from "../Form/Form";
import { EMAIL_VALIDATION } from "../../utils/constants";
import useForm from "../../hooks/useForm";

function Register({ isLoading, onRegister }) {
  const { enteredValues, isErrors, handleChangeInput, isFormValid } = useForm();

  function onSubmitUserForm(event) {
    event.preventDefault();
    onRegister({
      name: enteredValues.name,
      email: enteredValues.email,
      password: enteredValues.password,
    });
  }

  return (
    <Form
      title="Добро пожаловать!"
      buttonText="Регистрация"
      question="Уже зарегистрированы?"
      linkText=" Войти"
      link="/signin"
      onSubmit={onSubmitUserForm}
      isDisabled={!isFormValid}
      isLoading={isLoading}
    >
      <label className="form__label">
        Имя
        <input
          name="name"
          className={`form__input ${isErrors.name ? 'form__input_type_error' : ''}`}
          id="name-input"
          type="text"
          minLength="2"
          maxLength="40"
          required
          placeholder="Имя"
          onChange={handleChangeInput}
          value={enteredValues.name || ""}
        />
        <span className="form__input-error">{isErrors.name}</span>
      </label>
      <label className="form__label">
        E-mail
        <input
          name="email"
          className={`form__input ${isErrors.email ? 'form__input_type_error' : ''}`}
          id="email-input"
          type="email"
          required
          placeholder="E-mail"
          onChange={handleChangeInput}
          pattern={EMAIL_VALIDATION}
          value={enteredValues.email || ""}
        />
        <span className="form__input-error">{isErrors.email}</span>
      </label>
      <label className="form__label">
        Пароль
        <input
          name="password"
          className={`form__input ${isErrors.password ? 'form__input_type_error' : ''}`}
          id="password-input"
          type="password"
          required
          placeholder="Пароль"
          onChange={handleChangeInput}
          value={enteredValues.password || ""}
          minLength="6"
          maxLength="12"
        />
        <span className="form__input-error">{isErrors.password}</span>
      </label>
    </Form>
  );
}

export default Register;
