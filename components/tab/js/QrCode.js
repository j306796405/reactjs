/**
 * Created by linjie.jiang on 17/1/25.
 */
import React, {Component} from 'react';

class QrCode extends Component {
    constructor(props) {
        super(props);

        // this.handleChange = this.handleChange.bind(this);

        this.state = {
            name: '',
            age: 18
        }
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    handleChange(name, e) {
        const { value } = e.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.name}
                    onChange={this.handleChange.bind(this, 'name')}
                />
                <input
                    value={this.state.age}
                    onChange={this.handleChange.bind(this, 'age')}
                />
            </div>
        )
    }
}

export default QrCode;