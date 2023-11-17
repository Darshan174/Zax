import './App.css';
import Header  from './Header';
import Home  from './Home';
import Example  from './StaticPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { useStateValue } from './StateProvider';
import Checkout from './Checkout';
import Sell from './Sell';



import React,{ useEffect } from "react";
import { auth } from "./firebase";





import Login from "./Login";
 function App() {
  //   const [{}, dispatch] = useStateValue();
  //   useEffect(() => {
  //     // will only run once when the app component loads... 
  //     auth.onAuthStateChanged(authUser => {
  //       console.log('THE USER IS >>> ', authUser);
  
  //       if (authUser) {
  //         // the user just logged in / the user was logged in
  //         dispatch({
  //           type: 'SET_USER',
  //           user: authUser
  //         })
  //       } else {
  //         // the user is logged out
  //         dispatch({
  //           type: 'SET_USER',
  //           user: null
  //         })
  //       }
  //     })
  //   }, [])

  return (

      <BrowserRouter >
    <div className="app">
     
      <Routes>
      

       <Route path='/'>
       <Route path="/" element={<Example />}/>
       <Route path="/login" element={<Login />}/>
       <Route path="/home" element={ [<Header/>,<Home/>]}/> 
       <Route path="/checkout" element={ [<Header/>,<Checkout/>]}/> 
       <Route path="/server" element={[<Header/>,<Sell/>] }/>

       {/* <Sell setProducts={setProducts} />
       <Home products={products} /> */}

      
      </Route >
      </Routes>
    </div>
 </BrowserRouter>

  );
}

export default App;
