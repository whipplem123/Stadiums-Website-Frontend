import React from 'react';

import NavBar from '../components/NavBar';

class Stadium extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <NavBar/>
                <h1>Stadium Page</h1>
            </div>
        );
    }
}

export default Stadium;