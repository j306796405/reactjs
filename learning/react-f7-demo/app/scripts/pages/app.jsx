/**
 * FileName app.jsx
 * Date 2016-09-06
 * Created by jianglinj
 */
'use strict'

import React, { cloneElement } from 'react/addons';
import { RouteHandler } from 'react-router';
import TimeoutTransitionGroup from '../../lib/timeoutTransitionGroup.js';

class App extends React.Component{
    componentDidMount(prevProps, prevState) {
        var myApp = new Framework7();
        var $$ = Dom7;
        var mainView = myApp.addView('.view-main', {
            dynamicNavbar: true
        });
    }

    render(){
        var transitionName = this.props.location === "/home" ? "view-transition-reveal-from-right" : "view-transition-show-from-right";

        return (
            <div className="views">
                <div className="view view-main">
                    <div className="pages navbar-through toolbar-through">
                        <TimeoutTransitionGroup transitionName={transitionName} transitionEnter={true} transitionLeave={true} component="div" enterTimeout={500} leaveTimeout={500}>
                            <RouteHandler key={this.props.location}/>
                        </TimeoutTransitionGroup>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;