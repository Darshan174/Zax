import './App.css';
import Header  from './Header';
import Home  from './Home';
import Example  from './StaticPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';




import Login from "./Login";
  function App() {

  return (
      <BrowserRouter >

    <div className="app">


        <Routes>

       <Route path='/'>
       <Route path="/" element={<Example />}/>
       <Route path="/login" element={<Login />}/>
       <Route path="/home" element={ [<Header/>,<Home/>]}/> 
      
      </Route >
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
