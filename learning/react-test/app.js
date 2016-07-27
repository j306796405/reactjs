/**
 * FileName test
 * Date 2016-07-14
 * Created by jianglinj
 */
import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class Hello extends Component{
    render(){
        return (
            <h1>Hello world</h1>
        );
    }
}
ReactDOM.render(<Hello />,document.getElementById('container'));