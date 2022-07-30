import React from 'react';

import NavBar from '../components/NavBar';

class Games extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <NavBar/>
                <h1>Games Page</h1>
            </div>
        );
    }
}

export default Games;