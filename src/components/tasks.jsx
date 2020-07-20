import React from 'react';
import {Button} from './button'

export const Tasks = ({items, deleteItem}) => { 
   const list = items.map((elem, index) => {
      return <div className="task" key={index}>{elem} 
         <Button className="delete" clickButton = {deleteItem} value = {"delete"}/>
      </div>
   })

   return (
      list
   );
}

