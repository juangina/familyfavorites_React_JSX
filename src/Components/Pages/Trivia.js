import React from 'react';
import './Trivia.css'

class Trivia extends React.Component {
    render() {
        return (
            <div id="morecustomers">
                <div className="container">
                    <h3 align="center">Some Favorites</h3>
                    <div className="row">
                        <div className="col-md-4" align="center">
                            <h2>Books</h2>
                            <p>Reading takes you on a special journey through the soul.</p>
                        </div>
                        <div className="col-md-4" align="center">
                            <h2>Quotes</h2>                
                            <p>Our daily mantras to help us manage and prosper in life.</p>
                        </div>
                        <div className="col-md-4" align="center">
                            <h2>Social Media</h2>
                            <p>Keeping in touch with friends and family around the world.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

  export default Trivia;