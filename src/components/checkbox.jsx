import React from 'react';

export const Checkbox = ({value = false, update}) => {
   const handleChange = (e) => {
      update(e.target.checked);
   }

   return (
      <input type="checkbox" checked={value} onChange={handleChange}/>
   )
}