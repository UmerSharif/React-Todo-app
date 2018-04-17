import React, { Component } from 'react';

export class CreateTodo extends Component {
    constructor(props){
        super(props);

        this.handleCreate = this.handleCreate.bind(this);
    }

    handleCreate(e) {
        e.preventDefault();
          // console.log(this.props.createTask)
        this.props.createTask(this.refs.createInput.value);
        this.refs.createInput.value = '';
    }

    render() {
        console.log(this.props);
        return (
            <form onSubmit={this.handleCreate}>
                <input type='text' placeholder='What do I need to Do !' ref="createInput"/>
                <button>Create</button>
            </form>
        );
    }
}

