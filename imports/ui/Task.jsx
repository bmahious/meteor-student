import React, { Component } from 'react';
import { Tasks } from '../api/tasks.js';
 

export default class Task extends Component {
  // toggleChecked() {
  //   Tasks.update(this.props.task._id, {
  //     $set: { checked: !this.props.task.checked },
  //   });
  // }


  toggleChecked() {
    // Set the checked property to the opposite of its current value
    Tasks.update(this.props.task._id, {
      $set: { this: this.props.task },
    });
  }
 


  deleteThisTask() {
    Tasks.remove(this.props.task._id);
  }
  render() {
    const taskClassName = this.props.task.checked ? 'checked' : '';
    return (
      <div className="container">
          <div className={taskClassName}>
      
              {/* <input
                type="checkbox"
                readOnly
                checked={!!this.props.task.checked}
                onClick={this.toggleChecked.bind(this)}
              /> */}
      
              <span className=""> 
                <table class="table table-dark table-style table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">Prénom</th>
                        <th scope="col">Nom</th>
                        <th scope="col">Email</th>
                        <th scope="col">Lien Github</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{this.props.task.text2}</td>
                        <td>{this.props.task.text3}</td>
                        <td>{this.props.task.text4}</td>
                        <td> <a href="{this.props.task.text5}">{this.props.task.text5}</a> </td>
                        <td className="td-delete-update">
                          <div className="delete-update">
                              <button className="update" onClick={this.toggleChecked.bind(this)}>
                               
                              </button>
                              <button className="delete" onClick={this.deleteThisTask.bind(this)}>
                              &times;
                              </button>
                              
                          </div>
                        
                        </td>
                      </tr>
                    </tbody>
                </table>
              </span>
          </div>
      </div>
      
    );
  }
}