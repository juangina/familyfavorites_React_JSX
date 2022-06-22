import React from 'react';
import './Dashboard_Form.css'

class DashboardForm extends React.Component {
  constructor(props) {
      super(props);
      this.state = { 
        _username: 'Juan Johnson',
        _topic: 'Quote', 
        _favorite: 'Free At Last!',
        _comments: 'Georgia is Blue State.',
        _username_length: false,
        _error_message: "",
        _Topic: "Quote",
      };
    this.reset_states=this.reset_states.bind(this);
    this.send=this.send.bind(this);
    this.renderTopicslist=this.renderTopicslist.bind(this);
  }

  reset_states = () => {
    //Reset Component State
    this.setState({_username: 'Juan Johnson'})
    this.setState({_topic: "Quote"});
    this.setState({_favorite: 'Free At Last!'});
    this.setState({_comments: 'Georgia is a Blue State!'});
    this.setState({_username_length: false});
    this.setState({_error_message: ""});
    this.setState({_topic_list: ""})
  }
    
  send = async e => {
    e.preventDefault();
    console.log(e.target.value)
    
    try {
        //Collect Form Data
        const body = {
            username: this.state._username,
            topic: document.getElementById("sel1").value, //this.state._topic,
            favorite: this.state._favorite,
            comments: this.state._comments
        };
        //Send form data to server
        var response = await fetch(
            "http://localhost:5000/dashboard",
            {
                method: "POST",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify(body)
            }
        );
        const jsonResponse = await response.json();
        console.log(jsonResponse);

        if(jsonResponse.favorite_status === true) {
          this.reset_states();
          window.location = "/dashboard";
        }
        else {
          this.reset_states();
          this.setState({_error_message: "Favorite not Logged.  Please try again later."});
          window.location = "/dashboard";
        }
    }
    catch (err) {
        console.error(err.message);
    }
    
  }

  renderTopicslist = () => {
    var ArrayTopics = Object.values(this.props.Topicslist);
    //console.log(ArrayTopics);
    return <select className="form-control" id="sel1" name="topic" onClick={this.renderTopicslist}>
    {ArrayTopics.map(topic => {
        return <option key={topic.id} value={topic.topic}>{topic.topic}</option>;  
    })}  
    </select>
  }

  render() {
      return (
        <form onSubmit={this.send}>
            <div className="form-group">
              <label >Select Topic from Dropdown List</label>
              {this.renderTopicslist()}
            </div>
            <div className="form-group">
              <input type="text" name="favorite" className="form-control" placeholder="Your Favorite" value={this.state._favorite} onChange={e => this.setState({_favorite: e.target.value})} required/>
            </div>
            <div className="form-group">
              <textarea className="form-control" id="message" name="comments" placeholder="Comments" value={this.state._comments} onChange={e => this.setState({_comments: e.target.value})}></textarea>
            </div>
            <div className="form-group">
              <input type="submit" name="submit" className="btn btn-lg" style={{backgroundColor: "#ffb701"}} value="Submit Favorite" />
            </div>
          </form>
      );
  }
}

  export default DashboardForm;