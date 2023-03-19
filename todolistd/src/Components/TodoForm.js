import React from "react";

export default class TodoForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputText: "",
		};
	}
	handleInput = (event) => {
		this.setState({
			inputText: event.target.value,
		});
	};
	handleSubmit = (event) => {
		event.preventDefault();
		let todo = {
			id: new Date().valueOf(),
			text: this.state.inputText,
			isCompleted: false,
		};
		this.props.addToDos(todo);
	};
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					type="text"
					value={this.state.inputText}
					onChange={this.handleInput}
					placeholder="todo..."
				/>
			</form>
		);
	}
}
