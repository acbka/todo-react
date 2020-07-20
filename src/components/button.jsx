import React from 'react';

export const Button = ({clickButton, value, disabled=false}) => { 
   const handleClick = e => {
      e.preventDefault();
      clickButton();
   };

   return (
      <button className="addButton" onClick={handleClick} disabled={disabled}>{value}</button>
   );
}