import React from 'react';
import { Link, withRouter } from "react-router-dom";
import './Login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            _username: 'juaneric', 
            _password: 'user01', 
            _passcheck: false,
            _username_length: false,
            _error_message: ""
        };
        this.verify_send = this.verify_send.bind(this);
        this.reset_states = this.reset_states.bind(this);
      }

      reset_states = () => {
        //Reset Component State
        this.setState({_username: ""});
        this.setState({_password: ''});
        this.setState({_passcheck: false});
        this.setState({_username_length: false});
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

        //If there are no submission errors continue with registration submission
        if(this.state._username_length) {
            try {
                //Collect Form Data
                const body = {
                    username: this.state._username,
                    password: this.state._password
                };
                //Send form data to server
                var response = await fetch(
                    "http://localhost:5000/login",
                    {
                        method: "POST",
                        headers: {"Content-type": "application/json"},
                        body: JSON.stringify(body)
                    }
                );
                const jsonResponse = await response.json();
                console.log(jsonResponse);
                //If response is okay, redirect to Dashboard Page
                if(jsonResponse.user_status === "dashboard") {
                    this.reset_states();
                    window.location = "/dashboard";
                }
                else {
                    this.reset_states();
                    this.setState({_error_message: "Login not valid.  Please try again."});
                }
            }
            catch (err) {
                console.error(err.message);
            }
        }

      }
      
    render() {
        return (
            <div className="container" id="login-form-sect">
                <h2>Login</h2>		
                <p>Please fill in your credentials to login.</p>		
                <form onSubmit={this.verify_send} id='login-form'>		
                    <div className="form-group">
                        <span className="help-block">{this.state._error_message}</span>
                        <input type="text" name="name" className="form-control" id='form_username' placeholder="User Name" minLength="3" maxLength="15" value = {this.state._username} onChange={e => this.setState({_username: e.target.value})} required/>
                    </div>    
                    <div className="form-group">
                        <input type="password" name="password" className="form-control" id='form_password' placeholder="Password" minLength="6" maxLength="15" value = {this.state._pass1} onChange={e => this.setState({_password: e.target.value})} required/>
                    </div>
                    <div className="form-group">
                        <input type="submit" name="submit" className="btn btn-lg" value="Login"/>
                        <input type="reset" name="reset" className="btn btn-default btn-lg" value="Reset"/>
                    </div>
                    <p>Don't have an account? <Link to="/registration">Sign up now</Link>.</p>
                </form>
            </div>
        );
    }
}

  export default withRouter(Login);









