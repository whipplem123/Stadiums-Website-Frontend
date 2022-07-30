import React from 'react';

import NavBar from '../components/NavBar';

class StadiumsList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <NavBar/>
                <h1>StadiumsList Page</h1>
            </div>
        );
    }
}

export default StadiumsList;