import React from 'react';
import AlertButton from './AlertButton';

const Toolbar = () => {
  return (
    <div>
      <AlertButton message="Hello from Button 1">Button 1</AlertButton>
      <AlertButton message="Greetings from Button 2">Button 2</AlertButton>
    </div>
  );
};

export default Toolbar;