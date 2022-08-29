import React from 'react';
import './styles/sass/main.css';
import Rpoutes from './Rpoutes';

const App = () => {
  return (
    <div className="App">
      <Rpoutes />
      <div className="footer">
        <div className="container">© 2021 Thinkpalm. All rights reserved.</div>
      </div>
    </div>
  );
};

export default App;
