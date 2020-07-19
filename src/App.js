import React, { Component} from 'react';
import './App.css';
import {LoadScript} from '@react-google-maps/api';
import StadiumsMap from './Map';

class App extends Component {
  render() {
    return (
      <div className="App">
		<LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
			<StadiumsMap />
		</LoadScript>
      </div>
    );
  }
}

export default App;
