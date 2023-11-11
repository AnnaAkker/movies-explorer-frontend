import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox({ onFilterMovies, isShortMovies }) {
  return (
    <div className="filter">
      <input
        className="filter__checkbox"
        type="checkbox"
        onChange={onFilterMovies}
        checked={isShortMovies}
        required
      ></input>
      <span className="filter__title">Короткометражки</span>
    </div>
  );
}

export default FilterCheckbox;
