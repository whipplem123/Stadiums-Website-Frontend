import {GoogleMap, Marker} from '@react-google-maps/api';
import React from 'react';

const oms = require(`npm-overlapping-marker-spiderfier/lib/oms.min`);
const mlbMarkers = require('./mlb');

let spiderfy;

const onMapLoad = (map) => {
	spiderfy = new oms.OverlappingMarkerSpiderfier(map, {});
};

const onMarkerLoad = (marker) => {
	spiderfy.addMarker(marker);
};

class StadiumsMap extends React.Component {
    render() {
        return <GoogleMap
            id='data-example'
            mapContainerStyle={{height: '600px'}}
            zoom={4.5}
            center={{lat: 39.8097343, lng: -98.5556199 }}
            onLoad={onMapLoad}
        >
        {mlbMarkers.map((marker) => {
            return <Marker
                name={marker.name}
                position={marker.position}
                onLoad={onMarkerLoad}
                icon={{
                url: marker.file,
                anchor: new window.google.maps.Point(...marker.anchor),
                scaledSize: new window.google.maps.Size(...marker.scaledSize)
                }}
            />;
        })}
        </GoogleMap>;
    }
}

export default StadiumsMap;