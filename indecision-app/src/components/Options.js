import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
    <button onClick={props.handleDeleteOptions}>Remove all here</button>
    {props.options.length === 0 && <p>please add an option to get started</p>}
      {
        props.options.map((option) => (
          <Option 
            key={option} 
            optionText={option}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))
      }
    </div>  
);

export default Options;