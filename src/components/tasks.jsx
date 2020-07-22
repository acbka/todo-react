import React from 'react';
import {Task} from './task';

export const Tasks = ({items, setDone, deleteItem}) => {
   return (
      <>
         {items.map(task => <Task key={task.id} task={task} setDone={setDone} deleteItem={deleteItem.bind(task.status, task.id)} />)}
      </>
   )
};
