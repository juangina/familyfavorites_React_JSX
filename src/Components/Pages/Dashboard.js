import React from 'react';
import { getTopics } from './Fetch.js';
import DashboardForm from './Dashboard_Form.js';
import DashboardTopic from './Dashboard_Topic.js';
import DashboardImage from './Dashboard_Image.js';
import DashboardQuote from './Dashboard_Quote.js';
import DashboardFavorites from './Dashboard_Favorites';


//import './Dashboard.css';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            _topic: 'Quote', 
            _description: 'Free At Last!', 
            _username: 'Juan Johnson',
            _comment: 'Georgia is a Blue State.',
            _error_message: "",
            _Topicslist: [{id: 0, topic: 'Quote', description: "A quote"}, {id: 1, topic: 'Book', description: "A book"}, {id: 2, topic: 'Social', description: "A social"}],
            _photo: '',
            _photosUrl: '',
            _photographerUrl: '',
            _photographerName: '',
            _quote: 'Hello World',
            _quoteAuthor: 'Juan Johnson',
            _randFavoriteslistIndex: [0, 1, 2],
            _Favoriteslist: ''
        } 
    }
    render() {
        return (
        <div>    
            <div className="contactusform" id="favorite-form-sect">
                <div className="row contact-info">
                    <div className="col-md-6 contact-details" align="center">
                        <DashboardTopic Topic={this.state._topic} TopicDescription={this.state._description} /><br/><hr/>   
                        <DashboardImage Photo={this.state._photo} PhotosUrl={this.state._photosUrl} PhotographerUrl={this.state._photographerUrl} PhotographerName={this.state._photographerName}/><br/><hr/>   
                        <DashboardQuote QuoteText={this.state._quote} QuoteAuthor={this.state._quoteAuthor}/><br/><hr/>   
                    </div> 
                    <div className="col-md-6 emailForm" align="center">
                        <h4 style={{marginTop: 20}}> Enter your Favorite for the Week!</h4>
                        <DashboardForm Topicslist={this.state._Topicslist}/>
                    </div>
                </div>
            </div>
            <div className="container-fluid" id="favorite-list-sect">
                <h2 className="text-center text-capitalize">Sample Favorites from Family</h2>
                <DashboardFavorites randIndex={this.state._randFavoriteslistIndex} Favlist={this.state._Favoriteslist} />
            </div>
        </div>
        );
    }
    componentDidMount() {
        getTopics.getAllTopics()
        .then(dashboard_data => {
            if(dashboard_data['topics_list']) {
                this.setState({_Topicslist: dashboard_data['topics_list']});
                //console.log(this.state._Topicslist);
                var randNum = Math.floor(Math.random() * this.state._Topicslist.length);
                //console.log(randNum);
                var TopicRow = this.state._Topicslist[randNum]
                //console.log(TopicRow)
                this.setState({_topic: TopicRow['topic']});
                this.setState({_description: TopicRow['description']})
            }
            if(dashboard_data['favorites_list']) {
                this.setState({_Favoriteslist: dashboard_data['favorites_list']});
                //console.log(this.state._Favoriteslist);
                //console.log(this.state._Favoriteslist.length);
                
                var randArray = []
                for(var i=0; i<20; i++) {
                    randNum = Math.floor(Math.random() * this.state._Favoriteslist.length);
                    if(randArray.indexOf(randNum) === -1) {
                        randArray.push(randNum);
                    }
                    if(randArray.length === 3) break;
                }
                this.setState({_randFavoriteslistIndex: randArray});
                //console.log(randArray);
            }
        });

        getTopics.getQuote()
        .then(quote => {
            //console.log(quote);
            if(quote['quoteText']) {
                this.setState({_quote: quote['quoteText']});
                this.setState({_quoteAuthor: quote['quoteAuthor']});
            }
            else {
                this.setState({_quote: "Hello World"});
                this.setState({_quoteAuthor: "Juan Johnson"});
            }
        });

        getTopics.getImages(this.state._topic)
        .then(Image_list => {
            //console.log(Image_list);
            var photoCount = Image_list['total_results'];
            var randomPictureId = Math.floor(Math.random() * photoCount)
        
            if(photoCount > 0) {
                //console.log(photoCount);
                getTopics.getImage(randomPictureId, this.state._topic)
                .then(Image => {
                    this.setState({_photo: Image['photos'][0]['src']['medium']});
                    this.setState({_photosUrl: Image['photos'][0]['url']});
                    this.setState({_photographerUrl: Image['photos'][0]['photographer_url']});
                    this.setState({_photographerName: Image['photos'][0]['photographer']});
                    //console.log(Image);
                }) 
            }
            else {
                this.setState({_photo: "https://images.pexels.com/photos/5088490/pexels-photo-5088490.jpeg?auto=compress&cs=tinysrgb&h=350"});
                this.setState({_photosUrl: "https://www.pexels.com/photo/woman-in-black-long-sleeve-shirt-sitting-beside-woman-in-black-long-sleeve-shirt-5088490/"});
                this.setState({_photographerUrl: "https://www.pexels.com/@cottonbro"});
                this.setState({_photographerName: "cottonbro"});
            }
        })
    }
}

export default Dashboard;