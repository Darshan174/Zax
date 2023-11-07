import './App.css';
import Header  from './Header';
import { BrowserRouter as Route } from 'react-router-dom';


function App() {
  return (
    <div className="app">
      <Header />
      <Route path='/login'>
        <h1>Login Page</h1>
      </Route>
    </div>
  );
}

export default App;
