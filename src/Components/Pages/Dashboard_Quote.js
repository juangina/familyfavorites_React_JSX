import React from 'react';
import './Dashboard_Quote.css'

class DashboardQuote extends React.Component {
  render() {
      return (
        <div style={{marginTop: 20}}>
          <h4 className="contact-heading"><strong>Interesting Quote</strong></h4>
          <blockquote className="blockquote-reverse">
            <p style={{fontStyle: 'italic'}}>
              {this.props.QuoteText}
            </p>
            <footer>
              {this.props.QuoteAuthor}
            </footer>
          </blockquote>
        </div>

      );
  }
}

export default DashboardQuote;