import React from 'react';
import { Link } from 'react-router';

class Info extends React.Component{
    render(){
        return (
            <div className="page">
                <div className="page-content">

                    <div className="content-block">
                        <p className="buttons-row">
                            <Link to="home" className="button">Home</Link>
                            <Link to="info" className="button active">Info</Link>
                        </p>
                    </div>

                    <div className="content-block-title">Full Layout</div>
                </div>
            </div>
        )
    }
}

export default Info;