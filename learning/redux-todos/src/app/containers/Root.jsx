import React, {Component} from 'react';
import {Provider} from 'react-redux';
import App from './App';

//注意，不要直接这样做，要区分开发环境和生产环境
import DevTools from './../tools/DevTools';

export default class Root extends Component{
  render(){
    return (
      <Provider store={this.props.store}>
        <div>
          <App/>
          <DevTools />
        </div>
      </Provider>
    )
  }
}
