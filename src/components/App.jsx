import { Route, Routes } from "react-router-dom";

import Main from "./Main/Main";
import Login from "./Login/Login";
import Register from "./Register/Register";
import NotFoundPage from "./NotFoundPage/NotFoundPage";
import Profile from "./Profile/Profile";
import Movies from "./Movies/Movies";
import SavedMovies from "./SavedMovies/SavedMovies";
import Header from "./Header/Header";




function App() {


    return (
            <Routes>
                <Route path="/" element={
                    <>
                    <Header loggedOut/>
                    <Main />
                    </>
                }
                />

                <Route path="/signin" element={
                    <Login/>
                } 
                />

                <Route path="/signup" element={
                    <Register/>
                } 
                />

                <Route path="*" element={
                    <NotFoundPage/>
                }
                />

                <Route path="/profile" element={
                    <>
                    <Header loggedIn/>
                    <Profile/>
                    </>
                }
                />

                <Route path="/movies" element={
                    <>
                    <Header loggedIn/>
                    <Movies/>
                    </>
                }
                />

                <Route path="saved-movies" element={
                    <>
                    <Header loggedIn/>
                    <SavedMovies/>
                    </>
                }
                />
            </Routes>
    )
}

export default App;