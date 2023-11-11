import './App.css';
import Header  from './Header';
import Home  from './Home';
import { HashRouter as Route } from 'react-router-dom';
//import Login from "./Login";
// import { useStateValue } from './StateProvider'
//  import { useEffect } from "react";
//  import { auth } from "./Firebase";


 //   const [{}, dispatch] = useStateValue();
 
 //   useEffect(() => {
   //     auth.onAuthStateChanged(authUser => {
     
     //       console.log('THE USER IS  >>> ', authUser);
     
     //       if (authUser) {
       //         dispatch({
         //           type: 'SET_USER',
         //           user: authUser
         //         })
         //       } else {
           //         dispatch({
             //           type: 'SET_USER',
             //           user: null
             //         })
             //       }
             //     })
             //   })
             
  function App() {

  return (
    <div className="app">
      <Header />
      <Home />
      {/* <Route path='/login'>
         <Login />
      </Route> */}
    </div>
  );
}

export default App;
