import React, { Component } from 'react';

class Update extends Component {
    render() {
        return(
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
        );
    }
}

export default Update;


