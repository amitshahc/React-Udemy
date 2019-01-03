import React from 'react';

const cockpit = (props) => {
    const button_style = {
        border: '1px solid blue',
        padding: '5px'
      };  
      
    return (
        <div>
            <h1>My React App</h1>
            <button onClick={props.click} style={button_style}>Click</button>            
        </div>
    );
}

export default cockpit;