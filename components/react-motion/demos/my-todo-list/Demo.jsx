import React from 'react';
import {TransitionMotion, spring, presets} from '../../src/react-motion';

const Demo = React.createClass({
    getInitialState() {
        return {
            players: [
                {name: 'Kevin Love', position: 'pf'},
                {name: 'Lebron James', position: 'sf'},
                {name: 'Kevin durant', position: 'sf'},
                {name: 'Chris Paul', position: 'pg'},
                {name: 'Dwyane Wade', position: 'sg'},
            ]
        };
    },
    getStyles(){
        const {players} = this.state;

        return players.map((player, index) => {
            /*
            * key required
            * data option
            * style required
            * */
            return {
                key: 'player-' + index,
                data: player,
                style: {
                    height: spring(60, presets.gentle),
                    opacity: spring(1, presets.gentle)
                }
            }
        })
    },
    getDefaultStyles(){
        const {players} = this.state;

        return players.map((player, index) => {
            return {
                key: 'player-' + index,
                data: player,
                style: {
                    height: 0,
                    opacity: 1
                }
            }
        })
    },
    willEnter(styleThatEntered) {
        return {
            height: 0,
            opacity: 1,
        };
    },

    didLeave(){
        debugger;
        console.log(123);
    },

    willLeave(styleThatLeft) {
        return {
            height: spring(0),
            opacity: spring(0),
        };
    },
    removePlayer(index){
        const {players} = this.state;
        players.splice(index, 1)

        this.setState({
            players
        })
    },
    handleSubmit({target: {value}, keyCode}){
        if(keyCode === 13){
            const {players} = this.state;
            players.push({name: value, position: 'c'})

            this.setState({
                players
            })
        }
    },
    render(){
        const {players} = this.state;

        return (
            <section className="todoapp">
                <header className="header">
                    <h1>todos</h1>
                    <input
                        autoFocus={true}
                        className="new-todo"
                        placeholder="Add Player"
                        onKeyDown={this.handleSubmit}
                    />
                </header>
                <section className="main">
                    <TransitionMotion
                        defaultStyles={this.getDefaultStyles()}
                        styles={this.getStyles()}
                        willLeave={this.willLeave}
                        willEnter={this.willEnter}
                    >
                        {styles => {
                            return (
                                <ul className="todo-list">
                                    {
                                        styles.map(({data, key, style}, index) => {
                                            return (
                                                <li key={key} style={style}
                                                    onClick={this.removePlayer.bind(this, index)}
                                                >
                                                    <div className="view">
                                                        <label>{data.position} - {data.name}</label>
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            )
                        }}
                    </TransitionMotion>
                </section>
            </section>
        )
    }
});

export default Demo;
