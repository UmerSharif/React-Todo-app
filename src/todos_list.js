import React, { Component } from 'react';
import {TodosHeader} from "./todos_header";
import {TodosListItem} from "./todo_list_item";


export class TodosList extends Component {

    renderItems(){
        // noinspection JSAnnotator
        return this.props.todos.map((todo,index) => <TodosListItem key = {index} {...todo} toggleTask = {this.props.toggleTask}
        saveTask = {this.props.saveTask}
        deleteTask = {this.props.deleteTask}

        />)
    }

    render() {
       // console.log(this.props);
        return (
            <div className="todoApp">
             <table>
              <TodosHeader/>
                 <tbody>
                     {this.renderItems()}
                 </tbody>
             </table>
            </div>
        );
    }
}

