import React from 'react';

export default class TodoForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            inputText : ""
        }
    }
    handleInput = (event) => {
        this.setState({
            inputText: event.target.value
        });
    }
    render () {
        return (
            <input 
                type="text" 
                value={this.state.inputText}
                onChange={this.handleInput}
                placeholder="todo..."
            />
        );
    }
}