import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {Button} from './components/button';
import {Input} from './components/input';
import {Tasks} from './components/tasks'

class App extends React.Component {
	constructor(props) {
		super(props);
      this.state = {
         task: {
            id: 1,
            name: "",
            status: false
         },
         tasks: []
      };
   }
   
   updateDataInput = (value) => {
      this.setState({ task: {
         id: this.state.task.id,
         name: value, 
         status: this.state.task.status
      }})
   }

   setDone = (id, status) => {
      const taskIndex = this.state.tasks.findIndex(task => task.id === id);
      const newTasks = [...this.state.tasks];
      newTasks[taskIndex] = {...newTasks[taskIndex], status: status};
      this.setState({tasks: newTasks});
  }

   addTask = () => {
      if (this.state.task !== "") {
         this.state.tasks.push(this.state.task)
      };

      this.setState({
         tasks: this.state.tasks,
         task: {
            id: this.state.task.id + 1,
            name: "",
            status: false
         }
      })
   }

   deleteTask = (index, status) => {
      if (status === false) {
         this.state.tasks.splice(index, 1);
         this.setState({tasks: this.state.tasks});
      }      
   }
 
	render() {
		return (
         <div>   
            <form className="form">
               <label className="label">New Task</label>
               <div className="newTask">
                  <Input value={this.state.task.name} dataInput={this.updateDataInput} />
                  <Button clickButton={this.addTask}>add</Button>
               </div>
            </form>
            <div className="tasks">
               <Tasks items={this.state.tasks} deleteItem={this.deleteTask} setDone={this.setDone.bind(this)} />
            </div>
         </div>
      );
	}
}

export default App;