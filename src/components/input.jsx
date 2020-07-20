import React from 'react';

export const Input = ({dataInput, value}) => { 
   const handleChange = e => {
      dataInput(e.target.value);
   };

   return (
      <input type="text" value={value} onChange={handleChange}/>
   );
}