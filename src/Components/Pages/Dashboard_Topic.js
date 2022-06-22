import React from 'react';
import './Dashboard_Topic.css'

class DashboardTopic extends React.Component {
  render() {
      return (
        <div>
            <h4 className="contact-heading" style={{marginTop: 20}}>Favorite Topic</h4>
            <p className="info">
              <strong>{this.props.Topic}</strong> - {this.props.TopicDescription}
            </p>
        </div>
      );
  }
}

export default DashboardTopic;