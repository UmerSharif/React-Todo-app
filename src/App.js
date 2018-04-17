import React, { Component } from 'react';
import './App.css';
import {CreateTodo} from "./create_todo";
import {TodosList} from "./todos_list";


const todos = [
    {
        task: 'make React Tutorial',
        isCompleted:false
    },
    {
        task: 'eat Dinner',
        isCompleted:true
    }
];

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos
        };

        this.createTask = this.createTask.bind(this);
        this.toggleTask = this.toggleTask.bind(this);
        this.saveTask = this.saveTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }


    createTask(task){
         this.state.todos.push({
             task,
             isCompleted: false
         });

         this.setState({todos: this.state.todos});
    }

    toggleTask(task){

        const foundTodo = this.state.todos.find(todo => todo.task === task);
        console.log("value : " + foundTodo);
        foundTodo.isCompleted = !foundTodo.isCompleted;
        this.setState({todos : this.state.todos})
    }

    saveTask(oldTask, newTask){
        const foundTodo = this.state.todos.find(todo => todo.task === oldTask);
        foundTodo.task = newTask;
        this.setState({todos : this.state.todos})

    }

    deleteTask(taskToDelete){
        this.state.todos.splice(this.state.todos.findIndex(todo => todo.task === taskToDelete),1);
        this.setState({todos : this.state.todos});
    }


  render() {
    return (
      <div className="App">
       <h1>React to Do app</h1>
          <CreateTodo createTask = {this.createTask}/>
          <TodosList todos = {this.state.todos}
          toggleTask = {this.toggleTask}
          saveTask = {this.saveTask}
          deleteTask = {this.deleteTask}
          />
      </div>
    );
  }
}

export default App;
