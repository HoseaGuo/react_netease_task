import React, { useState, Component } from 'react';

import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

import Confirm from './task/Confirm'
import InputNumber from './task/InputNumber'

class App extends Component {
  render(){
    return (
      <Router>
        <ul>
          <li><Link to='/task1'>作业1</Link></li>
          <li><Link to='/task2'>作业2</Link></li>
        </ul>
        
        <Switch>
          <Route path='/task1' component={InputNumber} exact></Route>
          <Route path='/task2' component={Confirm} exact></Route>
        </Switch>
      </Router>
    )
  }
}


export default App;
