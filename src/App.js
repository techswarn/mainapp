import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';

// import Login from './Components/Login';
import Header from './Components/Header';
import Home from './Components/Home';

import Posts from './Components/Posts';
import Weather from './Components/Weather';
import Todos from './Components/Todos';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className='container'>
          <Header/>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/posts" element={<Posts />} />         
              <Route path="/weather" element={<Weather />}/>     
              <Route path="/todos" element={<Todos />} />
            </Routes>                   
        </div>
      </div>
    </  Router>
  );
}

export default App;
