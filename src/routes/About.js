import React from 'react';

import NavBar from '../components/NavBar';

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <NavBar/>
                <h1>About Page</h1>
            </div>
        );
    }
}

export default About;