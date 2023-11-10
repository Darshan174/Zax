import './App.css';
import Header  from './Header';
import { HashRouter as Route } from 'react-router-dom';
import Login from "./Login";
// import { useStateValue } from './StateProvider'
// import { useEffect } from "react";
// import { auth } from "./Firebase";


function App() {
  // const [{}, dispatch] = useStateValue();

  // useEffect(() => {
  //   auth.onAuthStateChanged(authUser => {

  //     console.log('THE USER IS  >>> ', authUser);

  //     if (authUser) {
  //       dispatch({
  //         type: 'SET_USER',
  //         user: authUser
  //       })
  //     } else {
  //       dispatch({
  //         type: 'SET_USER',
  //         user: null
  //       })
  //     }
  //   })
  // })


  return (
    <div className="app">
      <Header />
      <Route path='/login'>
         <Login />
      </Route>
    </div>
  );
}

export default App;
