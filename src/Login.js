import React from 'react';
import { Link } from 'react-router-dom';

function Login() { 
    return(
        <div className='login'>
            <Link to="/">
                <img 
                className='login__logo'
                src='' alt="" />
            </Link>
            
        </div>
    )

}

export default Login