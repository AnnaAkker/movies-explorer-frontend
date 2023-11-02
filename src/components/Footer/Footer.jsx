import './Footer.css'

export default function Footer() {

    return (
        <footer className="footer">
            <h3 className="footer__paragraph">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
            <span className="footer__line"></span>
            <div className="footer__nav">
                <p className="footer__nav-year">&copy;&nbsp;2020</p>
                <ul className="footer__nav-list">
                    <li className="footer__links">
                        <a className="footer__links-url" href="https://practicum.yandex.ru" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
                    </li>
                    <li className="footer__links">
                        <a className="footer__links-url" href="https://github.com/AnnaAkker" target="_blank" rel="noreferrer">Github</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}