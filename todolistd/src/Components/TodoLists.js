import React from 'react';

export default class TodoList extends React.Component {
    constructor(props){
        super(props);
    }
    render () {
        const {isCompleted} = this.props.todo;
        return (
            <div 
                onClick={this.props.toggleComplete}
                style={{textDecoration: isCompleted ? "line-through" : ""}}
            >
                {this.props.todo.text}
            </div>
        );
    }
}