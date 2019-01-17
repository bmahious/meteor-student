import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 
import { createContainer } from 'meteor/react-meteor-data';
import { withTracker } from 'meteor/react-meteor-data';
import { Tasks } from '../api/tasks.js';


import Task from './Task.jsx';

 
// App component - represents the whole app
class App extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      hideCompleted: false,
    };
  }
  getTasks() {
    return [];
  }
  handleSubmit(event) {
    event.preventDefault();
 
    // Find the text field via the React ref
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
    const text2 = ReactDOM.findDOMNode(this.refs.prenom).value.trim();
 
    Tasks.insert({
      text,
      text2,
      createdAt: new Date(), // current time
    });
 
    // Clear form;
    ReactDOM.findDOMNode(this.refs.prenom).value = '';
  }
  toggleHideCompleted() {
    this.setState({
      hideCompleted: !this.state.hideCompleted,
    });
  }
  renderTasks() {
    let filteredTasks = this.props.tasks;
    if (this.state.hideCompleted) {
      filteredTasks = filteredTasks.filter(task => !task.checked);
    }
    return filteredTasks.map((task) => (
      <Task key={task._id} task={task} />
    ));
  }
 
  render() {
    return (
      <div className="container">
        <header>
          <h1 className="title-student">Liste des étudiants({this.props.incompleteCount})</h1>
          <label className="hide-completed">
            <input
              type="checkbox"
              readOnly
              checked={this.state.hideCompleted}
              onClick={this.toggleHideCompleted.bind(this)}
            />
            Hide Completed Tasks
          </label>
        </header>
        <div>
        <div className="container">
            <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
              <div className="row">
                  <div className="col">
                    {/* <input type="text" ref="textInput"  placeholder="Type to add new tasks" /> */}
                    <input className="form-control inputForm" type="text" ref="prenom"  placeholder="Prénom"/>
                  </div>
                  <div className="col">
                    <input className="form-control inputForm" type="text" ref="name" placeholder="Nom" />
                  </div>
              </div>

              <div className="row">
                  <div className="col">
                    <input className="form-control inputForm" type="email" ref="email" placeholder="Email" />
                  </div>
                  <div className="col">
                    <input className="form-control inputForm" type="text" ref="link" placeholder="Lien Github" />
                  </div>
              </div>

              <div className="row">
                  <div className="col submit-inp">
                    {/* <button className="btn btn-success btn_success" id="submit">Ajouter un étudiant</button> */}
                    <input className="btn_success" type="submit"/>
                  </div>
              </div> 
              
            </form>
         </div> 
          {this.renderTasks()}
        </div>
      </div>
    );
  }
}
export default withTracker(() => {
  return {
    tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
    incompleteCount: Tasks.find({ checked: { $ne: true } }).count(),
  };
})(App);