import CheckBox from "../CheckBox/CheckBox"

import "./SearchForm.css"

export default function SearchForm() {
    return (
        <section className="search-form">
            <div className="search-form__container">
                <form className="search-form__form">
                    <div className="search-form__icon"/>
                    <input className="search-form__input" type="text" placeholder="Фильм" required></input>
                    <button className="search-form__button" type="button"></button>
                </form>
                <CheckBox/>
            </div>
        </section>
    )
}
