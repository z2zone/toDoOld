import React from 'react';

export default class TodoList extends React.Component {
    constructor(props){
        super(props);
    }
    render () {
        return (
<<<<<<< HEAD
            <div style={{display:"flex", justifyContent:"center"}}>            
                <div 
                    onClick={this.props.toggleComplete}
                    style={{textDecoration: isCompleted ? "line-through" : ""}}
                >
                    {this.props.todo.text}
                </div>
                <button onClick={this.props.handleDelete}>x</button>
=======
            <div>
                {JSON.stringify(this.props.todos)}
>>>>>>> parent of 3cd7426 (add filter functionality)
            </div>
        );
    }
}