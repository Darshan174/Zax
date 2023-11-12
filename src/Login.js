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
            navigate('/home')
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
                navigate('/home')
            }
        })
        .catch(error => alert(error.message))
    }


    return(
        <div class="bg-gradient-to-r from-indigo-200 via-purple-100 to-pink-200 ...">
        <div className='login'>
            <Link to="/home">
                <img 
                className='login__logo'
                src='https://media.canva.com/1/image-resize/1/224_224_100_PNG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9MVWZhay9NQUZ6N1RMVWZhay8xL3AucG5n?osig=AAAAAAAAAAAAAAAAAAAAAF8RkYQ-VBPtBg7w_4mv-yiZA28hN5kmOF8hrWqn29WF&exp=1699783979&x-canva-quality=thumbnail_large&csig=AAAAAAAAAAAAAAAAAAAAAMaXr6-tqO36GIwG7M7612A8Wuc55kqGN0S8Ms3JEcmP'
                 alt="" />
            </Link>
            
            <div className="login__container">
                
                <h1>Log-in</h1>

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


                
                <button onClick={register}
                className='login__registerButton'>Create Zax account</button>
                <button onClick={register}
                className='login__registerButton'>Login with Google</button>

            </div>
            
            </div>
            </div>
    )

}
//the e.value.target take the current input and gives it to setPasswprd
export default Login