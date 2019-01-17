import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 
import Register from './Register';
import { createContainer } from 'meteor/react-meteor-data';
import { withTracker } from 'meteor/react-meteor-data';
import { Tasks } from '../api/tasks.js';
import Task from './Task.jsx';

 
// App component - represents the whole app
class App extends Component {
 
  render() {
    return (
      <div className="">
        <Register />
      </div>
    );
  }
}
export default App;