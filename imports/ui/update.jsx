import React, { Component } from 'react';

class Update extends Component {
    state = {
        isUpdating: false
      }

    toggleChecked() {
        const { isUpdating } = this.state
        // Set the checked property to the opposite of its current value
        if (!isUpdating) {
            this.setState({ isUpdating: true })
        }
    }
    updateTask = e => {
        e.preventDefault()
        const form = e.currentTarget
        
        Tasks.update(this.props.task._id, {
          text2: form.text2.value,
          text3: form.text3.value,
          text4: form.text4.value,
          text5: form.text5.value,
        });
        this.setState({ isUpdating: false })
      }
    render() {
        return(
            <div className="container">
          <div className={taskClassName}>
      
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
                        {isUpdating ? (
                          <tr>
                            <td colSpan='5'>
                              <form onSubmit={this.updateTask}>
                                  <div className="row">
                                      <div className="col"><input className="form-control" name='text2' type="text" defaultValue={this.props.task.text2} /></div>
                                      <div className="col"><input className="form-control" name='text3' type="text" defaultValue={this.props.task.text3} /></div>
                                      <div className="col"><input className="form-control" name='text4' type="text" defaultValue={this.props.task.text4} /></div>
                                      <div className="col"><input className="form-control" name='text5' type="text" defaultValue={this.props.task.text5} /></div>
                                      <div className="col"><input className="btn btn-success" type="submit" value='update'/></div>
                                  </div>
                              </form>
                            </td>
                          </tr>
                        ) : (

                          <tr>
                            <td>{this.props.task.text2}</td>
                            <td>{this.props.task.text3}</td>
                            <td>{this.props.task.text4}</td>
                            <td> <a href="{{this.props.task.text5}}">{this.props.task.text5}</a> </td>
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
                        )}
                    </tbody>
                </table>
              </span>
          </div>
      </div>
        );
    }
}

export default Update;


