import './Techs.css'

export default function Techs() {
    
    return (
        <section className="techs">
            <h2 className="techs__title">Технологии</h2>
            <div className="techs__line"></div>
            <h3 className="techs__subtitle">7 технологий</h3>
            <p className="techs__paragrah">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <ul className="techs__list">
                <li className="techs__lists-object">
                    <p className="techs__lists-object_text">HTML</p>
                </li>
                <li className="techs__lists-object">
                    <p className="techs__lists-object_text">CSS</p>
                </li>
                <li className="techs__lists-object">
                    <p className="techs__lists-object_text">JS</p>
                </li>
                <li className="techs__lists-object">
                    <p className="techs__lists-object_text">React</p>
                </li>
                <li className="techs__lists-object">
                    <p className="techs__lists-object_text">Git</p>
                </li>
                <li className="techs__lists-object">
                    <p className="techs__lists-object_text">Express.js</p>
                </li>
                <li className="techs__lists-object">
                    <p className="techs__lists-object_text">mongoDB</p>
                </li>
            </ul>
        </section>
    );
};
  
