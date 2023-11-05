import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from "../Header/Header";

import "./Profile.css"

export default function Profile() {

    const [ inputChange, setInputChange] = useState(false);

    function handleChange(evt) {
        evt.preventDefault()
    }

    return (
        <>
            <Header isLogged={true} />
            <main className="main">
                <section className="profile">
                    <h1 className="profile__title">Привет, Виталий</h1>
                    <form className="profile__form" name="profile" noValidate>
                        <div className="profile__form-container">
                            <label className="profile__form-label">Имя</label>
                            <input className="profile__form-input" name="name" type="text" placeholder="Имя" minLength={3} maxLength={30} onClick={() => setInputChange(!inputChange)} onSubmit={handleChange} required/>
                        </div>
                        <div className="profile__form-container">
                            <label className="profile__form-label">E-mail</label>
                            <input className="profile__form-input" name="email" type="email" placeholder="Электронная почта" minLength={8} maxLength={20} required/>
                        </div>
                    </form>
                    { inputChange ? (

                        <>
                            <span className='profile__submit-error'>При обновлении профиля произошла ошибка.</span>
                            <button className="profile__submit-button" type="submit" onClick={() => setInputChange(!inputChange)} disabled={!inputChange}>Сохранить</button>
                        </>
                        ) : (
                            <div className="profile__actions">
                                <button className="profile__change-button" type="button" >Редактировать</button>
                                <Link to="/" className="profile__logout">Выйти из аккаунта</Link>
                            </div>
                        )
                    }

                </section>

            </main>

        </>
    )
}