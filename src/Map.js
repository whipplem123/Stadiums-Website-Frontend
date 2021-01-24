import {GoogleMap, Marker} from '@react-google-maps/api';
import React from 'react';

const oms = require('npm-overlapping-marker-spiderfier/lib/oms.min');
let spiderfy;

const onMapLoad = (map) => {
	spiderfy = new oms.OverlappingMarkerSpiderfier(map, {});
};

const onMarkerLoad = (marker) => {
	spiderfy.addMarker(marker);
};

class StadiumsMap extends React.Component {
    state = {
        mapMarkers: []
    }

    componentDidMount() {
        fetch('https://e4oec3pez7.execute-api.us-west-2.amazonaws.com/prod/stadiums/map')
            .then(res => res.json())
            .then(data => this.setState({ mapMarkers: data.mapData }))
            .catch(err => console.error('Failed to retrieve map data: ' + err));
    }

    render() {
        return <GoogleMap
            id='stadiums-map'
            mapContainerStyle={{height: '600px'}}
            zoom={4.5}
            center={{lat: 39.8097343, lng: -98.5556199 }}
            onLoad={onMapLoad}
        >
        {this.state.mapMarkers.map((marker) => {
            return <Marker
                key={marker.teamId}
                name={marker.teamId}
                position={marker.position}
                onLoad={onMarkerLoad}
                icon={{
                    url: marker.logoUrl,
                    anchor: new window.google.maps.Point(marker.markerSize.x / 2, marker.markerSize.y / 2),
                    scaledSize: new window.google.maps.Size(marker.markerSize.x, marker.markerSize.y)
                }}
            />;
        })}
        </GoogleMap>;
    }
}

export default StadiumsMap;