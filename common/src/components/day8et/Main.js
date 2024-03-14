
import React, { useState, useEffect } from 'react';
import Progress from './Progress';

const Main = () => {
  const [percentage, setPercentage] = useState(0);
  const [status, setStatus] = useState('Loading');

  useEffect(() => {
    if (percentage <100) {
      const timer = setTimeout(() => {
        setPercentage(percentage + 0.1);
      }, 1);

      
    } else {
      setStatus('Complete');
    }
  }, [percentage]);

  return (
    <div className="app">
      <h1>Progress Bar</h1>
      <Progress percentage={percentage} status={status} />
    </div>
  );
};

export default Main;
