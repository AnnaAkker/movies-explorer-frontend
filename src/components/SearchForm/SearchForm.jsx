import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import searchIcon from "../../images/lupa.svg";

function SearchForm({ isShortMovies, searchAndFilterMovies, onFilterMovies }) {
  const [request, setRequest] = useState("");
  const [isQueryError, setisQueryError] = useState(false);
  const location = useLocation();

  function onSubmitUserForm(e) {
    e.preventDefault();
    console.log("click form");
    if (request.trim().length === 0) {
      setisQueryError(true);
    } else {
      setisQueryError(false);
      searchAndFilterMovies(request);
    }
  }

  function handleChangeInputRequest(e) {
    setRequest(e.target.value);
  }

  useEffect(() => {
    if (
      location.pathname === "/movies" &&
      localStorage.getItem("movieSearch")
    ) {
      const localRequest = localStorage.getItem("movieSearch");
      setRequest(localRequest);
    }
  }, [location]);
  return (
    <section className="search-form">
      <form
        className="search-form__container"
        id="form"
        onSubmit={onSubmitUserForm}
      >
        <div className="search-form__label">
          <img
            src={searchIcon}
            alt="Значек поиска"
            className="search-form__icon"
          />
          <input
            name="request"
            className="search-form__input"
            id="search-input"
            type="text"
            placeholder="Фильм"
            onChange={handleChangeInputRequest}
            value={request || ""}
          ></input>

          <button
            className="search-form__button"
            type="submit"
            onClick={onSubmitUserForm}
          ></button>
        </div>
        <div className="search-form__checkbox-container">
          <FilterCheckbox
            isShortMovies={isShortMovies}
            onFilterMovies={onFilterMovies}
          />
        </div>
        {isQueryError && (
          <span className="search__form-error">Нужно ввести ключевое</span>
        )}
      </form>
    </section>
  );
}

export default SearchForm;
