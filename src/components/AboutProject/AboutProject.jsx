import './AboutProject.css';

export default function AboutProject() {
    return (
        <section className="project">
            <h2 className="project__title">О проекте</h2>
            <div className="project__line"></div>
            <div className="project__description">
                <h3 className="project__subtitle">Дипломный проект включал 5 этапов</h3>
                <p className="project__paragraph">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                <h3 className="project__subtitle">На выполнение диплома ушло 5 недель</h3>
                <p className="project__paragraph">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </div>
            <div className="project__diagram">
                <p className="project__diagram-text project__diagram-text_green">1 неделя</p>
                <p className="project__diagram-text project__diagram-text_grey">4 недели</p>
                <span className="project__diagram-description">Back-end</span>
                <span className="project__diagram-description">Front-end</span>
            </div>
        </section>
    )
}