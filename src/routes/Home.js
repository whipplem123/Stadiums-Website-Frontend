import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {LoadScript} from '@react-google-maps/api';

import StadiumsMap from '../components/Map';
import NavBar from '../components/NavBar';

const leagueSelectedEvent = (eventKey) => {
    alert(`Selected league is ${eventKey}`);
};

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='Home'>
                <NavBar/>
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

export default Home;