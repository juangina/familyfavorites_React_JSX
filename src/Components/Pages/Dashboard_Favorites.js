import React from 'react';
import DashboardFavoriteTable from './Dashboard_Favorites_Table.js'
import './Dashboard_Favorites.css'

class DashboardFavorites extends React.Component {
    constructor(props) {
        super(props);
        this.renderTables=this.renderTables.bind(this);
    }
    renderTables () {
        if(this.props.Favlist) {
            return (
                <div className="row">
                    <DashboardFavoriteTable 
                    Name={this.props.Favlist[this.props.randIndex[0]].username}
                    Topic={this.props.Favlist[this.props.randIndex[0]].topic}
                    Favorite={this.props.Favlist[this.props.randIndex[0]].favorite}
                    Comments={this.props.Favlist[this.props.randIndex[0]].comments}/>
    
                    <DashboardFavoriteTable 
                    Name={this.props.Favlist[this.props.randIndex[1]].username}
                    Topic={this.props.Favlist[this.props.randIndex[1]].topic}
                    Favorite={this.props.Favlist[this.props.randIndex[1]].favorite}
                    Comments={this.props.Favlist[this.props.randIndex[1]].comments}/>
    
                    <DashboardFavoriteTable 
                   Name={this.props.Favlist[this.props.randIndex[2]].username}
                   Topic={this.props.Favlist[this.props.randIndex[2]].topic}
                   Favorite={this.props.Favlist[this.props.randIndex[2]].favorite}
                   Comments={this.props.Favlist[this.props.randIndex[2]].comments}/>
                </div>
            )
            
        }
        else {
            return (
                <div className="row">
                    <DashboardFavoriteTable 
                    Name='Juan Johnson'
                    Topic='Quote'
                    Favorite="It's a Madhouse!"
                    Comments="A famous quote from 'The planet of the Apes."/>
    
                    <DashboardFavoriteTable 
                    Name='Juan Johnson'
                    Topic='Quote'
                    Favorite="It's a Madhouse!"
                    Comments="A famous quote from 'The planet of the Apes."/>
    
                    <DashboardFavoriteTable 
                    Name='Juan Johnson'
                    Topic='Quote'
                    Favorite="It's a Madhouse!"
                    Comments="A famous quote from 'The planet of the Apes."/>
                </div>
            )
        }
    }
    render() {
        return (
            <div>
                {this.renderTables()}
            </div>

        );
    }
}

export default DashboardFavorites;






















