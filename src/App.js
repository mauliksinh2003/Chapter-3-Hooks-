import logo from './logo.svg';
import React from 'react';

import Button from 'react-bootstrap/Button';
import { Table } from 'react-bootstrap';
import Taskb from './Components/Taskb';
import Taskc from './Components/Taskc';
import Taska from './Components/Taska';
import LanguageCmp from './Components/LanguageCmp';
import Taske from './Components/Taske';
import Taskd from './Components/Taskd';
import Taskf from './Components/Taskf';
import Taskg from './Components/Taskg';
import Taskh from './Components/Taskh';


function App() {  
  return (
    <div className="App">
      <Taska/>
      <hr/>
      <Taskb />
      <hr/>
      <Taskc>
        <LanguageCmp/>
      </Taskc>
      <hr/>
      <Taskd/>
      <hr/>
      <Taske/>
      <hr/>
      <Taskf/>
      <hr/>
      <Taskg/>
      <hr/>
      <Taskh/>

    </div>
  );
}



export default App;
