import React from 'react';

export default class Todo extends React.Component{
  constructor(){
    super();
    this.changeStatus = this.changeStatus.bind(this);
  }

  changeStatus(e){
    var isChecked = e.target.checked;
    this.props.updateItemStatus(isChecked);
  }

  render(){
    let {deleteItem} = this.props;
  
    return(
      <li>
        <input className="toggle" type="checkbox" checked={this.props.status} onChange={this.changeStatus}/>
        <label>{this.props.text}</label>
        <button className="destroy" onClick={deleteItem}></button>
      </li>
    )
  }
}
