import React from 'react'
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/navbar/navbar';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/results/:animeName" component={Search}/>
    </div>
  );
}

export default App;
