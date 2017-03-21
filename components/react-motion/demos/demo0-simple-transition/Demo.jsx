import React from 'react';
import {Motion, spring} from '../../src/react-motion';

const Demo = React.createClass({
    getInitialState() {
        return {
            open: false
        };
    },

    handleMouseDown() {
        this.setState({open: !this.state.open});
    },

    handleTouchStart(e) {
        e.preventDefault();
        this.handleMouseDown();
    },

    render() {
        return (
            <div>
                <button
                    onMouseDown={this.handleMouseDown}
                    onTouchStart={this.handleTouchStart}>
                    Toggle
                </button>

                <Motion style={{move: spring(this.state.open ? 400 : 0)}}>
                    {({move}) => {
                        return (
                            <div className="demo0">
                                <div className="demo0-block" style={{
                                    transform: `translate3d(${move}px, 0, 0)`,
                                }}/>
                            </div>
                        )
                    }}
                </Motion>
            </div>
        );
    },
});

export default Demo;
