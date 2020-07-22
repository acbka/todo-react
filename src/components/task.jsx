import React from 'react';
import {Button} from './button';
import {Checkbox} from './checkbox';
import bin from '../images/delete.png'

export const Task = ({setDone, task, deleteItem}) => {
   const handleCheckbox = (id, status) => {
      setDone(id, status);
   }

   return (
      <div className="task" >
         <Checkbox value={task.status} update={handleCheckbox.bind(false, task.id)} />
         <span className={`task-text ${task.status ? "decore" : ""}`}>{task.name}</span>
         <Button clickButton={deleteItem.bind(false, task.status)}  disabled={task.status ? true : false}><img src={require("../images/delete.png")}/></Button>
      </div>
   )
}
