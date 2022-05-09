import React, {useEffect} from 'react';
import './AuthRegister.scss'
import {useForm} from "react-hook-form";
import {Link, useNavigate} from "react-router-dom";
import {getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import useAuth from "../../hooks/useAuth";
import {useDispatch} from "react-redux";
import {loginUser} from "../../store/reducers/loginReducer";
import MyButton from "../../components/UI/button/MyButton";

const Auth = () => {

    const {isAuth} = useAuth();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {isAuth && (navigate('/'))},[isAuth])

    const {register, formState: {errors, isValid}, handleSubmit} = useForm({mode: "all"})

    const onSubmit = (data) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then(({user}) => dispatch(loginUser(user)))
            .catch(e => alert('user not found'))
    }

    return (
        <section className='auth__section'>
            <div className='auth__container'>
                <form onSubmit={handleSubmit(onSubmit)} className='auth__form'>
                    <h1 className='auth__title'>Authorization</h1>
                    <div className='error__container'>
                        {errors?.email && <p className='error__text'>{errors?.email?.message || 'Error'}</p>}
                    </div>
                    <input
                        className='auth__input'
                        placeholder='Email'
                        {...register('email', {
                            required: 'The string must not be empty',
                            pattern: {
                                value: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
                                message: 'Not valid email'
                            }
                        })}
                    />
                    <div className='error__container'>
                        {errors?.password && <p className='error__text'>{errors?.password?.message}</p>}
                    </div>
                    <input
                        className='auth__input'
                        placeholder='Password'
                        {...register('password', {
                            required: 'The string must not be empty',
                            minLength: {
                                value: 4,
                                message: 'MinLength 4 elements'
                            },
                            maxLength: {
                                value: 8,
                                message: 'MaxLength 8 elements'
                            },
                            pattern: {
                                value: /^\d+$/,
                                message: 'Password must contain only numbers'
                            }
                        })}
                    />
                    <MyButton type='submit' disabled={!isValid}>Login</MyButton>
                    <p className='redirect'>Register <Link to='/register'>Sing up</Link></p>
                </form>
            </div>
        </section>
    );
};

export default Auth;