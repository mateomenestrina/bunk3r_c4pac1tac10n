import React from 'react';

export const Metrica = props => {
  return (
      <div className="metric">
        <div className='value'>{props.value}</div>
        <div className="name">{props.name}</div>
      </div>
    )
};
 