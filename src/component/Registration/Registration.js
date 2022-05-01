import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase.init';
import Loading from '../Loading/Loading';

const Registration = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        hookError,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
    })
    const [errors, setErrors] = useState({
        email: '',
        password: '',
    })
    const handleEmailChange = e => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);
        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value })
            setErrors({ ...errors, email: '' });
        }
        else {
            setErrors({ ...errors, email: 'please enter valid email' })
            setUserInfo({ ...userInfo, email: '' });
        }

    }
    const handlePasswordChange = e => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        const validPassword = passwordRegex.test(e.target.value);
        if (validPassword) {
            setUserInfo({ ...userInfo, password: e.target.value });
            setErrors({ ...errors, password: '' });
        }
        else {
            setErrors({ ...errors, password: 'minimut 8 cahrecter and uppercase and lowercase' })
            setUserInfo({ ...userInfo, password: '' });
        }
    }


    const handleRegistration = e => {
        createUserWithEmailAndPassword(userInfo.email, userInfo.password);
        e.preventDefault();
    }

    useEffect(() => {
        if (hookError) {
            switch (hookError?.code) {
                case "auth/invalid-email":
                    alert('please give a valid email');
                    break;
                case "auth/invalid-password":
                    alert('please give a valid password');
                    break;
                default:
                    alert('something went wrong')
            }

        }

    }, [hookError]);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }
    if (loading) {
        return <Loading></Loading>
    }



    return (
        <div>
            <h1 className='login-title text-center'>PLEASE REGISTRATION</h1>
            <div className='d-flex justify-content-center'>
                <form onSubmit={handleRegistration} className='border border-primary p-4'>
                    <input onChange={handleEmailChange} type="email" placeholder='Your email' /><br />
                    {errors?.email && <p className='text-danger'>{errors.email}</p>}
                    <input onChange={handlePasswordChange} type="password" placeholder='Your password' /><br />
                    {errors?.password && <p className='text-danger'>{errors.password}</p>}<br />
                    <button>REGISTRATION</button>
                </form>
            </div>
        </div>
    );
};

export default Registration;