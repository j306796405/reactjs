import React from 'react';

export default class TodoFooter extends React.Component{
	clickHandler(event){
		this.props.changeTodoState(null, event.target.checked, true);
	}

	render(){
		return(
			<div className="clearfix todo-footer">
				<input type="checkbox" className="fl"
					checked={this.props.isAllChecked}
					onChange={this.clickHandler.bind(this)}
				/>
				<span className="fl">{this.props.todoDoneCount} 已完成 / {this.props.todoCount} 总数</span>
				<button onClick={this.props.clearDone.bind(this)}>清除已完成</button>
			</div>
		)
	}
}
