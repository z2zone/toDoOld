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
		this.props.addToDos(this.state.inputText);
		this.setState({ inputText: "" });
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
