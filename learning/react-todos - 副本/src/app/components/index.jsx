import React from 'react';
import ListBox from './list'

export default class Index extends React.Component{
  render(){
    return (
      <div>
        <h1>Todo-List</h1>
        <div className="box clearfix">
          <ListBox />
        </div>
      </div>
    )
  }
}
