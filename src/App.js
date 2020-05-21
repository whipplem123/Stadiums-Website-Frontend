import React, { Component} from 'react';
import {
  Map,
  Marker,
  GoogleApiWrapper
} from 'google-maps-react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
	<Map google={this.props.google} />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(App);
