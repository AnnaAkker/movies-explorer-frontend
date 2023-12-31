import './Portfolio.css'

export default function Portfolio() {
    return (
        <section className="portfolio">
            <h2 className="portfolio__text">Портфолио</h2>
            <ul className="portfolio__list">
                <li className="portfolio__list-link">
                    <a className="portfolio__link" href="https://annaakker.github.io/how-to-learn/" target="_blank" rel="noreferrer">Статичный сайт<span className="portfolio__button">↗</span></a>
                </li>
                <li className="portfolio__list-link">
                    <a className="portfolio__link" href="https://annaakker.github.io/russian-travel/" target="_blank" rel="noreferrer">Адаптивный сайт<span className="portfolio__button">↗</span></a>
                </li>
                <li className="portfolio__list-link">
                    <a className="portfolio__link" href="https://annaakker.github.io/mesto/" target="_blank" rel="noreferrer">Одностраничное приложение<span className="portfolio__button">↗</span></a>
                </li>
            </ul>
        </section>
    );
};