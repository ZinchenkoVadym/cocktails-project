import React from 'react';
import './Header.scss'
import MyButton from "../UI/button/MyButton";
import {logOutUser} from "../../store/reducers/loginReducer";
import {useDispatch} from "react-redux";

const Header = () => {
    const dispatch = useDispatch();

    return (
        <header className='header'>
            <div className="header__container container">
                <div className='header__logo'>
                    Cocktails
                </div>
                <MyButton onClick={ () => {dispatch(logOutUser())}}>
                    Log out
                </MyButton>
            </div>
        </header>
    );
};

export default Header;