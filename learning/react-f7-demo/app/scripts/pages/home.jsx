import React from 'react';
import { Link } from 'react-router';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            loading: false
        };
    }

    render() {
        return (
            <div className="page">
                <div className="page-content">
                    <div>
                        <div className="content-block">
                            <p className="buttons-row">
                                <Link to="home" className="button active">Home</Link>
                                <Link to="info" className="button">Info</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;

