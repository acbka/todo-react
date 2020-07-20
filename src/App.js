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
         task: "",
         tasks: [],
         index: 0
      };
   }
   
   updateDataInput = (value) => {
      this.setState({ task: value })
   }

   addTask = () => {
      if(this.state.task != ""){
         this.state.tasks.push(this.state.task)
      }
      this.setState({
         tasks: this.state.tasks,
         task: ""
      })
   }

   deleteTask = (index) => {
      this.state.tasks.splice(index, 1);
	   this.setState({tasks: this.state.tasks});
   }
 
	render() {
		return (
         <div>   
            <form className="form">
               <label className="label">New Task</label>
               <div className="newTask">
                  <Input value={this.state.task} dataInput={this.updateDataInput} />
                  <Button className="addButton" clickButton={this.addTask} value={"add"}/>
               </div>
            </form>
            <div className="tasks">
            <Tasks items={this.state.tasks} deleteItem={this.deleteTask} />
            </div>
         </div>
      );
	}
}

export default App;