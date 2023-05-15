import ProfilePhoto from './Components/Profile/ProfilePhoto';
import FullName from './Components/Profile/FullName';
import Address from './Components/Profile/Address';
import React from 'react';

import './index.css';
import './App.css';


function App() {
  return (
    <div ClassName="App">
      <FullName />
      <Address />
      <ProfilePhoto />
    
    </div>
  );
}

export default App;

