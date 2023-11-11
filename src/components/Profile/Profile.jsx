import React, { useEffect, useContext, useState } from "react";
import CurrentUserContext from "../CurrentUserContext/CurrentUserContext";
import useForm from "../../hooks/useForm";
import "./Profile.css";
import Header from "../Header/Header";
import { EMAIL_VALIDATION } from "../../utils/constants";

export default function Profile({
  loggedIn,
  signOut,
  onUpdateUser,
  isLoading,
}) {
  const currentUser = useContext(CurrentUserContext);
  const { enteredValues, isErrors, handleChangeInput, isFormValid, resetForm } =
    useForm();
  const [isLastData, setIsLastData] = useState(false);

  function onSubmitUserForm(event) {
    event.preventDefault();
    onUpdateUser({
      name: enteredValues.name,
      email: enteredValues.email,
    });
  }

  useEffect(() => {
    if (
      currentUser.name === enteredValues.name &&
      currentUser.email === enteredValues.email
    ) {
      setIsLastData(true);
    } else {
      setIsLastData(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enteredValues]);

  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser);
    }
  }, [currentUser, resetForm]);

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="main">
        <section className="profile">
          <h1 className="profile__title">Привет, {currentUser.name}!</h1>
          <form
            className="profile__form"
            name="profile"
            id="form"
            onSubmit={onSubmitUserForm}
            noValidate
          >
            <div className="profile__form-container">
              <label className="profile__form-label">Имя</label>
              <input
                className="profile__form-input"
                name="name"
                type="text"
                placeholder="Имя"
                minLength={3}
                maxLength={30}
                onChange={handleChangeInput}
                value={enteredValues.name || ""}
                required
              />
              <span className="profile__submit-error">{isErrors.name}</span>
            </div>
            <div className="profile__form-container">
              <label className="profile__form-label">E-mail</label>
              <input
                className="profile__form-input"
                name="email"
                type="email"
                placeholder="Электронная почта"
                minLength={8}
                maxLength={20}
                onChange={handleChangeInput}
                pattern={EMAIL_VALIDATION}
                value={enteredValues.email || ""}
                required
              />
              <span className="profile__submit-error">{isErrors.email}</span>
            </div>

            <div className="profile__actions">
              <button
                type="submit"
                disabled={!isFormValid ? true : false}
                className={
                  !isFormValid || isLoading || isLastData
                    ? "profile__change-button form__button-save_inactive"
                    : "profile__change-button"
                }
              >
                Редактировать
              </button>
              <button
                type="button"
                className="profile__logout"
                onClick={signOut}
              >
                Выйти из аккаунта
              </button>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}
