import React from 'react';
import {v4 as uuid} from 'uuid';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';
//COMPONENTS
import Todos from './components/Todos';
import Header from './components/layout/header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';

class App extends React.Component {
	// state = {
	// 	todos: [
	// 		{
	// 			id: 1 ,
	// 			title: 'Take out trash',
	// 			completed: false,
	// 		},
	// 		{
	// 			id: 2,
	// 			title: 'Assignment complete',
	// 			completed: false,
	// 		},
	// 		{
	// 			id: 3,
	// 			title: 'Cook dinner ',
	// 			completed: false,
	// 		}

	// 	]
	// };

	state = {
		todos: [
		]
	};

	componentDidMount(){
		axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
		.then(response => this.setState({ todos: response.data}))
	}

	// toggle complete from todoitems.js --> todo.js --> app.js
	markComplete = (id) => {
		this.setState({
			todos: this.state.todos.map(todo => {
				if(todo.id === id){
					todo.completed = !todo.completed;
				}
				return todo;
			})
		});
	};

	deleteTodo___ = (id) => {
		this.setState({
			todos: [...this.state.todos.filter(todo => todo.id !== id)]
		});
	};

	addTodo____From = (title) => {
		const newTodo = {
			id: uuid,
			title,
			completed: false
		}
		this.setState({ todos: [...this.state.todos, newTodo]});
	}

	addTodo = (title) => {
		axios.post('https://jsonplaceholder.typicode.com/todos', {
			title,
			completed:false
		})
		.then(response => this.setState({
			todos: [...this.state.todos, response.data]
		}));
	};

	deleteTodo = (id) => {
		axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
		.then(response => this.setState({
			 todos: [...this.state.todos.filter(todo => todo.id !== id)]
		}));
	};

	render(){
		return (
			<Router>
				<div className="App">
					<div className ="container">
						<Header />
						<Route exact path="/" render={props => (
							<React.Fragment>
								<div style={itemStyle}>
									<Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo} style={itemStyle} />
								</div>
								<AddTodo addTodo={this.addTodo} />
							</React.Fragment>
						)} />

						<Route path="/about" component={About} />
					</div>
				</div>
			</Router>
		);
	}
}

const itemStyle = {
	backgroundColor: '#282c34',
	textAlign: 'left',
	color: '#fff',
	padding: '15px',
}

export default App;