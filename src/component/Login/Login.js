import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from '../../firebase.init';
import Loading from '../Loading/Loading';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-bootstrap';

const Login = () => {
    const [signInWithEmailAndPassword, user, loading, hookError,] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, loading2, googleError] = useSignInWithGoogle(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(
        auth
    );
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
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
    const handleLogin = async event => {
        const email = userInfo.email;
        const password = userInfo.password;
        event.preventDefault();
        await signInWithEmailAndPassword(email, password);
        const { data } = await axios.post('https://young-earth-40481.herokuapp.com/login', { email })
        console.log(data);
        localStorage.setItem('accessToken', data.accessToken);
        navigate(from, { replace: true });

    }
    useEffect(() => {
        if (hookError || googleError) {
            switch (hookError?.code) {
                case "auth/invalid-email":
                    toast('please give a valid email');
                    break;
                case "auth/invalid-password":
                    alert('please give a valid password');
                    break;
                default:
                    toast('something went wrong')
            }

        }

    }, [hookError || googleError]);
    if (user || googleUser) {
        // navigate(from, { replace: true });
    }
    if (loading || loading2) {
        return <Loading></Loading>
    }
    const SendPasswordReset = async () => {
        await sendPasswordResetEmail(userInfo.email);
        toast('Sent email');
    };
    const handleRegistration = () => {
        navigate('/registration');
    }
    return (
        <div>
            <h3 className='login-title text-center'>PLEASE LOGIN</h3>
            <div className='d-flex justify-content-center'>
                <form onSubmit={handleLogin} className='border border-primary p-4'>
                    <input className='my-3' onChange={handleEmailChange} type="email" placeholder='Your email' /><br />
                    {errors?.email && <p className='text-danger'>{errors.email}</p>}
                    <input onChange={handlePasswordChange} type="password" placeholder='Your password' /><br />
                    {errors?.password && <p className='text-danger'>{errors.password}</p>}<br />
                    <button>Login</button>
                </form>
            </div>
            <div className='text-center'>
                <button className='w-25  bg-info google-button' onClick={() => signInWithGoogle()}>Sign in withGoogle</button>
            </div>
            <div className='text-center mt-2'>
                <button onClick={SendPasswordReset}>Foget Password</button>
            </div>
            <h6 className='text-center mt-2'>Haven't any account?<button onClick={handleRegistration}>Please Registration</button></h6>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;