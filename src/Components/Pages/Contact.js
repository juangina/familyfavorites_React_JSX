import React from 'react';
import './Contact.css';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            _username: 'Juan Johnson', 
            _useremail: 'ericrenee21@gmail.com', 
            _phone: '4704038474', 
            _comments: 'This is a test email from Family Favorites - Favorites-NodeJS-React',
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
    this.setState({_phone: ''});
    this.setState({_comments: ''});
    this.setState({_email_valid: false});
    this.setState({_error_message: ""});
    }

    verify_send = async e => {
        e.preventDefault();
        try {
            //Collect Form Data
            const body = {
                username: this.state._username,
                useremail: this.state._useremail,
                phone: this.state._phone,
                comments: this.state._comments
            };
            //Send form data to server
            var response = await fetch(
                "http://localhost:5000/contact",
                {
                    method: "POST",
                    headers: {"Content-type": "application/json"},
                    body: JSON.stringify(body)
                }
            );
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            //If response is okay, redirect to Login Page
            if(jsonResponse.mail_status === true) {
                this.reset_states();
                this.setState({_error_message: "Email Sent.  You will be contacted soon."});
            }
            else {
                this.reset_states();
                this.setState({_error_message: "Problem Sending Email.  Try again later."});
            }
        }
        catch (err) {
            console.error(err.message);
        }
    }

    render() {
        return (
            <div id="contact-form-sect" className="container">
                <h2>Contact Me</h2>		
                <p>If you have a question or concern about how to use the Favorites application, please let me know.  I will monitor my email and will return your answer in 1-3 days.</p>
                <form onSubmit={this.verify_send} id="contact-form">
                    <div className="form-group">
                        <span className="help-block1">{this.state._error_message}</span>
                        <input type="text" name="name" className="form-control" placeholder="Your Name" value = {this.state._username} onChange={e => this.setState({_username: e.target.value})} required/>
                    </div>
                    <div className="form-group">
                        <input type="email" name="email" className="form-control" placeholder="Your Email" value = {this.state._useremail} onChange={e => this.setState({_useremail: e.target.value})} required/>
                    </div>
                    <div className="form-group">
                        <input type="tel" name="phone" className="form-control" placeholder="Your Phone" value = {this.state._phone} onChange={e => this.setState({_phone: e.target.value})} />
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" id="message" name="message" placeholder="Message" value={this.state._comments} onChange={e => this.setState({_comments: e.target.value})} required></textarea>
                    </div>
                    <div className="form-group">
                        <p>
                            <input type="submit" name="submit" className="btn btn-lg" value="Send Message" />
                            <input type="reset" name="reset" className="btn btn-default btn-lg" value="Reset"/>
                        </p>
                    </div>
                </form>
            </div>
        );
    }
}

  export default Contact;