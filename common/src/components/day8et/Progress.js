import React from 'react';
import './Progress.css';

const Progress = ({ percentage, status }) => {
  return (
    <div className="progress-bar" style={{ width: '50%'}}>
        {Math.floor(percentage)}%
      <div className="progress" style={{ width: `${percentage}%`}}>
        
      </div>
      {status}
    </div>
  );
};

export default Progress;
