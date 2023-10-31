import './AboutMe.css'

export default function AboutMe() {

    return (
        <section className="about" id="about">
            <h2 className="about__text">Студент</h2>
            <div className="about__line"></div>
            <div className="about__description">
                <div className="about__container">
                    <h3 className="about__title">Виталий</h3>
                    <p className="about__subtitle">Фронтенд-разработчик, 30&nbsp;лет</p>
                    <p className="about__paragraph">Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове,
              закончил факультет экономики СГУ. У&nbsp;меня есть жена
              и&nbsp;дочь. Я&nbsp;люблю слушать музыку, а ещё увлекаюсь бегом.
              Недавно начал кодить. С&nbsp;2015 года работал в&nbsp;компании &laquo;СКБ Контур&raquo;.
              После того, как прошёл курс по&nbsp;веб-разработке,
              начал заниматься фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.</p>
                    <a className="about__link" href="https://github.com/AnnaAkker" target="_blank" rel="noreferrer">Github</a>
                </div>
                <div className="about__pic"></div>
            </div>
        </section>
    );
};