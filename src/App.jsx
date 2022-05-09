import React from 'react'
import Auth from "./pages/Auth&Register/Auth";
import {Outlet, Route, Routes} from "react-router-dom";
import Register from "./pages/Auth&Register/Register";
import ContentPage from "./pages/contentPage/ContentPage";

function App() {
    return (
        <div className="wrapper">
            <Routes>
                <Route path='/' element={<ContentPage/>}/>
                <Route path='auth' element={<Auth/>}/>
                <Route path='register' element={<Register/>}/>
                <Route path='*' element={<ContentPage/>}/>
            </Routes>
            <Outlet/>
        </div>
    );
}

export default App;
