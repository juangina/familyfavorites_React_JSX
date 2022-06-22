import React from 'react';
import './Registration.css';

class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            _username: '', 
            _useremail: '', 
            _pass1: '', 
            _pass2: '',
            _passcheck: false,
            _username_length: false,
            _email_valid: false,
            _error_message: ""
        };
        this.verify_send = this.verify_send.bind(this);
        this.reset_states = this.reset_states.bind(this);
    }

    reset_states = () => {
    //Reset Component State
    this.setState({_username: ""});
    this.setState({_useremail: ""});
    this.setState({_pass1: ''});
    this.setState({_pass2: ''});
    this.setState({_passcheck: false});
    this.setState({_username_length: false});
    this.setState({_email_valid: false});
    this.setState({_error_message: ""});
    }

    verify_send = async e => {
        e.preventDefault();

        //Client Side Validation for username length
        if(this.state._username.length >= 6 && this.state._username.length <= 15) {
            this.setState({_username_length: true});
        }
        else {
            this.setState({_error_message: "Please enter correct Length for user name."});
            return
        }
        //Client Side Validation for password match
        if(this.state._pass1 === this.state._pass2) {
            this.setState({_passcheck: true});
        }
        else {
            this.setState({_error_message: "Passwords do not match."});
            return
        }

        //If there are no submission errors continue with registration submission
        if(this.state._passcheck && this.state._username_length) {
            try {
                //Collect Form Data
                const body = {
                    username: this.state._username,
                    useremail: this.state._useremail,
                    password1: this.state._pass1,
                    password2: this.state._pass2
                };
                //Send form data to server
                var response = await fetch(
                    "http://localhost:5000/registration",
                    {
                        method: "POST",
                        headers: {"Content-type": "application/json"},
                        body: JSON.stringify(body)
                    }
                );
                const jsonResponse = await response.json();
                console.log(jsonResponse);
                //If response is okay, redirect to Login Page
                if(jsonResponse.user_status === "false") {
                    this.reset_states();
                    window.location = "/login";
                }
                else {
                    this.reset_states();
                    this.setState({_error_message: "User Already Registered.  Please use another user name or proceed to login."});
                }
            }
            catch (err) {
                console.error(err.message);
            }
        }

    }

    render() {
        return (
            <div className="container" id="registration-form-sect" >
                <h2>Register</h2>		
                <p>Please fill in your credentials to Register.</p>
                <form onSubmit={this.verify_send}>
                    <div className="form-group">
                        <span className="help-block">{this.state._error_message}</span>
                        <input type="text" name="name" className="form-control" id='form_username' placeholder="User Name" minLength="3" maxLength="15" value = {this.state._username} onChange={e => this.setState({_username: e.target.value})} required/>
                    </div>
                    <div className="form-group">
                        <input type="email" name="email" className="form-control" id='form_email' placeholder="Your Email" pattern = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$" value = {this.state._useremail} onChange={e => this.setState({_useremail: e.target.value})} required/>
                    </div>
                    <div className="form-group">
                        <input type="password" name="password1" className="form-control" id='form_pass1' placeholder="Password" minLength="6" maxLength="15" value = {this.state._pass1} onChange={e => this.setState({_pass1: e.target.value})} required/>
                    </div>
                    <div className="form-group">
                        <input type="password" name="password2" className="form-control" id='form_pass2' placeholder="Repeat Password" value = {this.state._pass2} onChange={e => this.setState({_pass2: e.target.value})}required/>
                    </div>  
                    <div className="form-group">
                        <input type="submit" name="submit" className="btn btn-lg"  value="Register" />
                        <input type="reset" name="reset" className="btn btn-default btn-lg" value="Reset"/>
                    </div>
                </form>
            </div>
        );
    }
}

  export default Registration;