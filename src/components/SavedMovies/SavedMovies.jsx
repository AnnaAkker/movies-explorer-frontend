import SavedMoviesPage from '../SavedMoviesPage/SavedMoviesPage';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer'

import './SavedMovies.css'


export default function SavedMovies () {
  return (
    <>
    <main className="movies-saved">
        <SearchForm />
        <SavedMoviesPage/>
        </main>
    <Footer/>
    </>
  )
}