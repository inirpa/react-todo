import React from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends React.Component {
	getStyle = ()=>{
		return {
			textDecoration: this.props.todo.completed?
			'line-through':'none',
		}
	};

	render() {
		const {id, title, completed} = this.props.todo;
		return (
			<div style={this.getStyle()}>
				<p>
					<input type="checkbox" checked={completed} onChange={this.props.markComplete.bind(this, id)} />{' '}
					#{id} {title}
					<button onClick={this.props.deleteTodo.bind(this, id)} style={btnStyle}>X</button>
				</p>
			</div>
		)
	}
}

// propType is object as single row of todo is an object with id, title and complete
TodoItem.propTypes = {
	todo: PropTypes.object.isRequired,
	markComplete: PropTypes.func.isRequired,
	deleteTodo: PropTypes.func.isRequired
}

const btnStyle = {
	background: '#ff0000',
	color: '#fff',
	padding: '5px 9px',
	border: '1px solid #ff0000',
	borderRadius: '50%',
	cursor: 'pointer',
	float: 'right'
}

export default TodoItem