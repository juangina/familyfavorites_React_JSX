import React from 'react';
import './Dashboard_Image.css'

class DashboardImage extends React.Component {
  render() {
      return (
        <div className="stock_photo">
            <img style={{paddingBottom: 25}} className="img-responsive" src={this.props.Photo}alt='pexels'/>       
            <span>
                <a href="https://www.pexels.com"><img src="https://images.pexels.com/lib/api/pexels.png" alt="Pexels Logo" style={{width: 150}}/></a>
            </span>
            <span>    
                This <a href={this.props.PhotosUrl}>Photo</a> was taken by <a href={this.props.PhotographerUrl}> {this.props.PhotographerName} </a> on Pexels.
            </span>
        </div>
      );
  }
}

export default DashboardImage;