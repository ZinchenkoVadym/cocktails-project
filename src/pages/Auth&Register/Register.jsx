import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import './AuthRegister.scss'
import {Link, useNavigate} from "react-router-dom";
import {getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import useAuth from "../../hooks/useAuth";
import {useDispatch} from "react-redux";
import {loginUser} from "../../store/reducers/loginReducer";
import MyButton from "../../components/UI/button/MyButton";


const Register = () => {

    const navigate = useNavigate();
    const {isAuth} = useAuth();
    const dispatch = useDispatch();

    useEffect(() => {
        isAuth && (navigate('/'))
    },[isAuth])

    const {register, formState: {errors, isValid}, handleSubmit} = useForm({mode: "all"})

    const onSubmitRegister= (data) => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, data.email, data.password )
            .then(({user}) => {
                dispatch(loginUser(user))
                return (navigate('/'))
            })
            .catch(e => alert('USER NOT FOUND'))
    }

    return (
        <section className='auth__section'>
            <div className='auth__container'>
                <form onSubmit={handleSubmit(onSubmitRegister)} className='auth__form'>
                    <h1 className='auth__title'>Register</h1>
                    <div className='error__container'>
                        {errors?.name && <p className='error__text'>{errors?.name?.message}</p>}
                    </div>
                    <input
                        className='auth__input'
                        placeholder="Name"
                        {...register('name', {
                            required: 'The string must not be empty',
                            minLength: {
                                value: 2,
                                message: 'MinLength 2 elements'
                            },
                            maxLength: {
                                value: 12,
                                message: 'MaxLength 12 elements'
                            },
                            pattern: {
                                value: /^([а-яё]{1,23}|[a-z]{1,12})$/,
                                message: 'Name must contain only liters'
                            }
                        })}
                    />
                    <div className='error__container'>
                        {errors?.surname && <p className='error__text'>{errors?.surname?.message}</p>}
                    </div>
                    <input
                        className='auth__input'
                        placeholder="Surname"
                        {...register('surname', {
                            required: 'The string must not be empty',
                            minLength: {
                                value: 2,
                                message: 'MinLength 2 elements'
                            },
                            maxLength: {
                                value: 12,
                                message: 'MaxLength 12 elements'
                            },
                            pattern: {
                                value: /^([а-яё]{1,23}|[a-z]{1,12})$/,
                                message: 'Surname must contain only liters'
                            }
                        })}
                    />
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
                    <MyButton type='submit' disabled={!isValid}>Sing up</MyButton>
                    <p className='redirect'>Already have an account? <Link to='/auth'>Sing in</Link></p>
                </form>
            </div>
        </section>
    );
};

export default Register;