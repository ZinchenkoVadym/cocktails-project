import React from 'react';
import './Main.scss'
import {cocktailsRequests} from "../../api/cocktailsRequests";
import {useDispatch, useSelector} from "react-redux";
import {getCocktails} from "../../store/reducers/cocktailsReducer";

const Main = () => {

    const dispatch = useDispatch();
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const cocktails = useSelector(state => state.cocktails)
    const ifObjLength = Object.keys(cocktails).length === 0;

    return (
        <main className='main'>
            <div className="main__container container">
                <div className='alphabet'>
                    {alphabet.split('').map((letter) => {
                        return <a key={letter} onClick={() => dispatch(getCocktails(letter))}>{letter}</a>
                    })}
                </div>
                <div className='cocktails'>
                    {!ifObjLength && cocktails.drinks.map((cocktail) => {
                        console.log(cocktail)
                        return <div>
                            <img src={cocktail.strDrinkThumb}/>
                            <div>{cocktail.strDrink}</div>
                        </div>
                    })
                    }
                </div>
            </div>
        </main>
    );
};

export default Main;