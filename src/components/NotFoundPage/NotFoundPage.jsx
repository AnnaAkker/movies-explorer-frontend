import { Link } from "react-router-dom";

import './NotFoundPage.css'

export default function NotFoundPage() {
    
    return (
        <main className="main">
            <section className="not-found">
                <h1 className="not-found__title">404</h1>
                <h2 className="not-found__subtitle">Страница не найдена</h2>
                <Link to="/" className="not-found__link">Назад</Link>
            </section>
        </main>
    );
}