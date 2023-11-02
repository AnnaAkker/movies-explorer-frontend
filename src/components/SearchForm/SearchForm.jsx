import { useState } from "react";
import on from "../../images/on.svg"
import off from "../../images/off.svg"

import "./SearchForm.css"

export default function SearchForm() {

    const [isSwitchOn, setSwitchOn] = useState(false);

    const handleSwitchToggle = () => {
    setSwitchOn(!isSwitchOn);
    }

    return (
        <section className="search-form">
            <form className="search-form__container">
                <div className="search-form__label">
                        <div className="search-form__icon"/>
                        <input className="search-form__input" type="text" placeholder="Фильм" required></input>
                        <button className="search-form__button" type="button"></button>
                </div>
                <div className="search-form__checkbox-container">
                    <img className="searchform__checkbox" alt="Фильтр" src={isSwitchOn ? on : off} onClick={handleSwitchToggle}/>
                    <p className="searchform__checkbox-text">Короткометражки</p>
                </div>
            </form>
        </section>
    )
}
