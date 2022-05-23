import React from "react";

import "./form.css";

class form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            name_completed:'',
            email_completed:'',
            completed:'',
        };
    }

    updateName(event){
        this.setState({name: event.target.value, name_completed:'completed'});
        this.checkCompletion();
    }

    updateEmail(event){
        this.setState({email: event.target.value, email_completed:'completed'});
        this.checkCompletion();
    }

    checkCompletion(){
        if(this.state.name_completed === 'completed' && this.state.email_completed === 'completed'){
            this.setState({completed:'completed'});
        }
    }

    incomplete(event){
        alert("You need to complete the name and email fields!!!");
        event.preventDefault();
    }

    render(){
        const {name, email} = this.state;
        const{addUser} = this.props;
        return(
                <form className="addUser-form" onSubmit={(event) => this.state.completed == 'completed' ? addUser(event, name, email) : this.incomplete(event) }>
                   
                <label htmlFor="email"> 
                    <input className="user-input" type="email" onChange={(event) => this.updateEmail(event)}>
                    </input><br></br>
                </label>
                <label htmlFor="name"> 
                    <input className="user-input" type="username" onChange={(event) => this.updateName(event)}>
                    </input>
                </label><br></br>
                <button className="submit">sign up</button>
                </form>
        );
    }
}

export default form;