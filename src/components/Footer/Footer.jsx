import './Footer.css'

export default function Footer() {

    return (
        <footer className="footer">
            <h3 className="footer__paragraph">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
            <span className="footer__line"></span>
            <div className="footer__nav">
                <p className="footer__year">&copy;&nbsp;2020</p>
                <ul className="footer__list">
                    <li className="footer__list_link">
                        <a className="footer__link" href="https://practicum.yandex.ru" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
                    </li>
                    <li className="footer__list_link">
                        <a className="footer__link" href="https://github.com/AnnaAkker" target="_blank" rel="noreferrer">Github</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}