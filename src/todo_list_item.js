import React, { Component } from 'react';



export class TodosListItem extends Component {

    constructor(props){
        super(props);

        this.state = {
            isEditing: false
        };

        this.onEditClick = this.onEditClick.bind(this);
        this.renderActionSection = this.renderActionSection.bind(this);
        this.cancelClick = this.cancelClick.bind(this);
        this.onSaveClick = this.onSaveClick.bind(this);
        this.onDeleteClick= this.onDeleteClick.bind(this);

    }

    renderTaskSection(){
        const { task, isCompleted} = this.props;

        const taskStyle = {
            color : isCompleted ? 'green' : 'red',
            cursor: 'pointer'
        };

        if(this.state.isEditing){
            return (
                <td>
                    <form onSubmit={this.onSaveClick}>
                        <input type="text" defaultValue={task} ref="editInput"/>

                    </form>
                </td>

            );
        }

        return (

            <td style={taskStyle}

                onClick={this.props.toggleTask.bind(this,task)}

            >
                {task}</td>

        );
    }

    renderActionSection(){

        if (this.state.isEditing){
            return (
                <td>
                    <button onClick={this.onSaveClick}>Save</button>
                    <button onClick={this.cancelClick}>Cancel</button>
                </td>

            );
        }

        return (
            <td>
                <button onClick={this.onEditClick}>Edit</button>
                <button onClick={this.onDeleteClick}>Delete</button>
            </td>

        );
    }

    cancelClick(){
        this.setState({isEditing: false})
    }


    onEditClick() {
        this.setState({isEditing: true})
    }

    onSaveClick(e){
        e.preventDefault();

        const  oldTask = this.props.task;
        const  newTask = this.refs.editInput.value;

        this.props.saveTask(oldTask,newTask);
        this.setState({isEditing:false});

    }

    onDeleteClick(e){
        e.preventDefault();

        const taskToDelete = this.props.task;
        this.props.deleteTask(taskToDelete);

    }

    render(){
        return (

            <tr>
                {this.renderTaskSection()}

                {this.renderActionSection()}

            </tr>

        );
    }


}

