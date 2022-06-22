import React from 'react';
//import './Dashboard_Topic.css'

class DashboardFavoriteTable extends React.Component {
  render() {
      return (
        <div className="col-sm-4">
        <table className="table table-bordered" style={{borderStyle: 'solid',  borderWidth: 5, backgroundColor: '#ffb701'}}>
            <thead>
            <tr>
                <th style={{width: "30%"}}>Name</th>
                <th style={{width: "70%"}}>Content</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>User Name</td>
                <td>{this.props.Name}</td>
            </tr>
            <tr>
                <td>Topic</td>
                <td>{this.props.Topic}</td>
            </tr>
            <tr>
                <td>Favorite</td>
                <td>{this.props.Favorite}</td>        
            </tr>
            <tr>
                <td>Comments</td>
                <td>{this.props.Comments}</td>        
            </tr>
            </tbody>
        </table>
    </div>
      );
  }
}

export default DashboardFavoriteTable;