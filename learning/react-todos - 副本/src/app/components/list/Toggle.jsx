import React from 'react';

export default class Toggle extends React.Component{

  constructor(){
    super();
    this.updateItemsStatus = this.updateItemsStatus.bind(this);
  }

  updateItemsStatus(e){
    let {updateItemsStatus} = this.props;
    let isChecked = e.target.checked;

    updateItemsStatus(isChecked);
  }

  render () {

    return (<input id="toggle-all" type="checkbox" onChange={this.updateItemsStatus}/>)
  }
}
