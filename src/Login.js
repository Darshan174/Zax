import { Link, useNavigate } from 'react-router-dom';
import { auth } from './Firebase';
import React, { useState } from 'react';
import './Login.css'

function Login() { 
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventdefualt();
        auth 
        .signInWithEmailAndPassword(email, password)
        .then(auth => {
            navigate('/')
        })
        .catch(error => alert(error.message))

    }

    const register = e => {
        e.preventDefualt();
        auth
        .createUserWithEMailAndPassword(email, password)
        .then((auth) => {
            
            console.log(auth);
            if (auth) {
                navigate('/')
            }
        })
        .catch(error => alert(error.message))
    }


    return(
        <div className='login'>
            <Link to="/">
                <img 
                className='login__logo'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3P0-WYoj8-FxOaGX72wa-xunLDmdtwaMNcA&usqp=CAU'
                 alt="" />
            </Link>
            
            <div className="login__container">
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail
                    (e.target.value)}/>

                    <h5>Password</h5>
                    <input type='password' value={password}
                    onChange={e => setPassword(e.target.value)}/>


                    <button type='submit' onClick={signIn}
                    className='login__signInButton'>Sign In</button>
                </form>
                <p>Login in with your existing zax account or create a new one below 👇</p>
                <button onClick={register}
                className='login__registerButton'>Create Zax account</button>

            </div>
            
            </div>
    )

}
//the e.value.target take the current input and gives it to setPasswprd
export default Login