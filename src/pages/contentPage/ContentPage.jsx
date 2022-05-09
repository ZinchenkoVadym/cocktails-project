import React, {useEffect} from 'react';
import useAuth from "../../hooks/useAuth";
import {useNavigate} from "react-router-dom";
import Header from "../../components/header/Header";
import Main from "../../components/main/Main";
import Footer from "../../components/footer/Footer";

const ContentPage = () => {

    const {isAuth} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {!isAuth && (navigate('auth'))}, [isAuth])

    return (
        <>
            <Header/>
            <Main/>
            <Footer/>
        </>
    );
};

export default ContentPage;