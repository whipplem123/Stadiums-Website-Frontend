import {GoogleMap, Marker, InfoBox} from '@react-google-maps/api';
import React from 'react';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

const oms = require('npm-overlapping-marker-spiderfier/lib/oms.min');
let spiderfy;

const onMarkerLoad = (marker) => {
    spiderfy.addMarker(marker);
};

class StadiumsMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mapMarkers: [],
            activeMarker: null
        };
    }

    onMapLoad = (map) => {
        spiderfy = new oms.OverlappingMarkerSpiderfier(map, {keepSpiderfied: true});
        spiderfy.addListener('click', (marker, event) => {
            const activeMarker = this.state.activeMarker === marker.title ? null : marker.title;
            this.setState({activeMarker});
            console.log(event);
        });
    };

    componentDidMount() {
        fetch('https://e4oec3pez7.execute-api.us-west-2.amazonaws.com/prod/stadiums/map')
            .then(res => res.json())
            .then(data => this.setState({ mapMarkers: data.mapData, activeMarker: null }))
            .catch(err => console.error('Failed to retrieve map data: ' + err));
    }

    render() {
        console.log(this.state.activeMarker);
        return <GoogleMap
            id='stadiums-map'
            mapContainerStyle={{height: '600px'}}
            zoom={4}
            center={{lat: 39.8097343, lng: -98.5556199 }}
            onLoad={this.onMapLoad}
            onClick={() => this.setState({activeMarker: null})}
        >
        {this.state.mapMarkers.map((marker) => {
            return <Marker
                id={marker.teamId}
                key={marker.teamId}
                name={marker.teamId}
                title={marker.teamId}
                position={marker.position}
                onLoad={onMarkerLoad}
                icon={{
                    url: marker.logoUrl,
                    anchor: new window.google.maps.Point(marker.markerSize.x / 2, marker.markerSize.y / 2),
                    scaledSize: new window.google.maps.Size(marker.markerSize.x, marker.markerSize.y)
                }}
            >
                {marker.teamId === this.state.activeMarker && <InfoBox
                    key={`infowindow-${marker.teamId}`}
                    // options={{disableAutoPan: true, pixelOffset: { width: 0, height: 0}}}
                    onCloseClick={() => this.setState({activeMarker: null})}
                >
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={marker.imageUrl}/>
                        <Card.Body>
                            <Card.Title>{marker.stadiumName}</Card.Title>
                            <Table borderless={true}>
                                <tbody>
                                    <tr>
                                        <th>Team</th>
                                        <td>{marker.teamName}</td>
                                    </tr>
                                    <tr>
                                        <th>Location</th>
                                        <td>{`${marker.city}, ${marker.state}`}</td>
                                    </tr>
                                    <tr>
                                        <th>Opened</th>
                                        <td>{marker.openingDate}</td>
                                    </tr>
                                    <tr>
                                        <th>Capacity</th>
                                        <td>{marker.capacity}</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <Card.Link href="https://google.com">Read More</Card.Link>
                        </Card.Body>
                    </Card>
                </InfoBox>}
            </Marker>;
        })}
        </GoogleMap>;
    }
}

export default StadiumsMap;