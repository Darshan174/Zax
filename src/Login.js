import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import React, { useState } from "react";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventdefualt();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/home");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefualt();
    auth
      .createUserWithEMailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          navigate("/home");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div class="bg-gradient-to-r from-gray-400 via-gray-100 to-gray-400 ...">
      <div className="login">
        <Link to="/home">
          <img
            className="login__logo"
            src="https://media.canva.com/1/image-resize/1/224_224_100_PNG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9MVWZhay9NQUZ6N1RMVWZhay8xL3AucG5n?osig=AAAAAAAAAAAAAAAAAAAAAF8RkYQ-VBPtBg7w_4mv-yiZA28hN5kmOF8hrWqn29WF&exp=1699783979&x-canva-quality=thumbnail_large&csig=AAAAAAAAAAAAAAAAAAAAAMaXr6-tqO36GIwG7M7612A8Wuc55kqGN0S8Ms3JEcmP"
            alt=""
          />
        </Link>

        <div class="relative" className="login__container">
          <h1 >Log-In</h1>

          <form>
            <h5>E-mail</h5>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <h5>Password</h5>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border
           border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700
            dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 w-1/2"
              type="submit"
              onClick={signIn}
            >
              Sign In
            </button>
          </form>


          <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border
           border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700
            dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 w-full" onClick={register}>
            Create Zax account
          </button>
          <button
            type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border
            border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700
             dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 w-full"
          >
            Sign in with Google
          </button>
          <Link to="/home">
          <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 
          focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white
           dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 width=100% w-full">

            Trail (no signup)

          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
//the e.value.target take the current input and gives it to setPasswprd
export default Login;
