import React, { Component} from 'react';
import { Routes, Route, Link } from "react-router-dom";

import Home from './routes/Home';
import StadiumsList from './routes/StadiumsList';
import Stadium from './routes/Stadium';
import Games from './routes/Games';
import About from './routes/About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="stadiums" element={<StadiumsList />} />
          <Route path="stadiums/:stadium" element={<Stadium />} />
          <Route path="games" element={<Games />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
    );
  }
}

export default App;
