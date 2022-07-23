import React, { Component} from 'react';
import './App.css';
import {LoadScript} from '@react-google-maps/api';
import StadiumsMap from './Map';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';

const leagueSelectedEvent = (eventKey) => {
  alert(`Selected league is ${eventKey}`);
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
          <div className="MapsFilterMenu">
            <DropdownButton id="MapsDropdown" style={{'z-index': 999}} title="League">
              <Dropdown.Item onSelect={leagueSelectedEvent} eventKey="MLB">MLB</Dropdown.Item>
              <Dropdown.Item onSelect={leagueSelectedEvent} eventKey="NFL">NFL</Dropdown.Item>
              <Dropdown.Item onSelect={leagueSelectedEvent} eventKey="NBA">NBA</Dropdown.Item>
              <Dropdown.Item onSelect={leagueSelectedEvent} eventKey="NHL">NHL</Dropdown.Item>
              <Dropdown.Item onSelect={leagueSelectedEvent} eventKey="MLS">MLS</Dropdown.Item>
              <Dropdown.Item onSelect={leagueSelectedEvent} eventKey="NCAAF">NCAAF</Dropdown.Item>
              <Dropdown.Item onSelect={leagueSelectedEvent} eventKey="NCAAB">NCAAB</Dropdown.Item>
            </DropdownButton>
          </div>
          <div className="StadiumsMap">
            <StadiumsMap />
          </div>
        </LoadScript>
      </div>
    );
  }
}

export default App;
