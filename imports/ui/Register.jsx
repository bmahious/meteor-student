import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 
import { createContainer } from 'meteor/react-meteor-data';
import { withTracker } from 'meteor/react-meteor-data';
import { Tasks } from '../api/tasks.js';
import Task from './Task.jsx';


function GuestGreeting(props) {
   return <h1>Please sign up.</h1>;
 }

class Register extends Component {

   

   getTasks() {
      return [];
    }
    handleSubmit(event) {
      event.preventDefault();
  
      // const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
      const text2 = ReactDOM.findDOMNode(this.refs.prenom).value.trim();
      const text3 = ReactDOM.findDOMNode(this.refs.name).value.trim();
      const text4 = ReactDOM.findDOMNode(this.refs.email).value.trim();
      const text5 = ReactDOM.findDOMNode(this.refs.link).value.trim();

      if( ((ReactDOM.findDOMNode(this.refs.prenom)) && (ReactDOM.findDOMNode(this.refs.name)) && (ReactDOM.findDOMNode(this.refs.email)) && (ReactDOM.findDOMNode(this.refs.link))).value === '' ) {
         return;
      }else{
         Tasks.insert({
            text2,
            text3,
            text4,
            text5,
            createdAt: new Date(), 
          });
   
          ReactDOM.findDOMNode(this.refs.prenom).value = '';
          ReactDOM.findDOMNode(this.refs.name).value = '';
          ReactDOM.findDOMNode(this.refs.email).value = '';
          ReactDOM.findDOMNode(this.refs.link).value = '';
        }      
      }
    renderTasks() {
      return this.props.tasks.map((task) => (
        <Task key={task._id} task={task} />
      ));
    }
   render() {
      return(
         <div>
            <header>
               <h1 className="title-student">Liste des étudiants</h1>
            </header>
            <div>
               <div className="container">
                  <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
                     <div className="row">
                        <div className="col col-xs-12 col-md-6">
                           <input className="form-control inputForm" type="text" ref="prenom"  placeholder="Prénom" />
                           {/* <p className="text-error">Tous les champs doivent être complétés !!</p> */}
                        </div>
                        <div className="col col col-xs-12 col-md-6">
                           <input className="form-control inputForm" type="text" ref="name" placeholder="Nom"  />
                           {/* <p className="text-error">Tous les champs doivent être complétés !!</p> */}
                        </div>
                     </div>
                     <div className="row">
                        <div className="col col col-xs-12 col-md-6">
                           <input className="form-control inputForm" type="email" ref="email" placeholder="Email" />
                           {/* <p className="text-error">Tous les champs doivent être complétés !!</p> */}
                        </div>
                        <div className="col col col-xs-12 col-md-6">
                           <input className="form-control inputForm" type="text" ref="link" placeholder="Lien Github" />
                           {/* <p className="text-error">Tous les champs doivent être complétés !!</p> */}
                        </div>
                     </div>
                     <div className="row">
                        <div className="submit-inp">
                           {/* <button className="btn btn-success btn_success" id="submit">Ajouter un étudiant</button> */}
                           <input className="btn_success" type="submit"/>
                        </div>
                     </div>
                     {/* <p className="text-error">Tous les champs doivent être complétés !!</p> */}
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
   };
 })(Register);

   