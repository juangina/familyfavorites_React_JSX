import React from 'react';
import { Link, withRouter } from "react-router-dom";
import './NavBar.css';

class NavBar extends React.Component {
    render() {
        return (
            <div className="topbanner" id="nav-sect">
                <nav className="navbar navbar-default navbar-static navbar-transparent" role="navigation">
                    <div className="container">
                        <div className="navbar-header">
                            <Link className="navbar-brand" to="/">
                                <img alt="Brand" src="./images/coffee-shop-logo.png" className="logo"/>
                            </Link>
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=" .navbar-collapse">
                                <span className="sr-only">Toggle navigation </span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse" align="center">
                            <ul className="nav navbar-nav">          
                                <li id="admin" align="center"><Link to="/registration">Registration</Link></li>
                                <li id="admin" align="center"><Link to="/login">Login</Link></li>
                                <li id="admin" align="center"><Link to="/contact">Contact</Link></li>
                                <li id="admin" align="center"><Link to="/dashboard">Dashboard</Link></li>
                                <li id="admin" align="center"><Link to="/trivia">Trivia</Link></li>
                                <li id="admin" align="center"><Link to="/products">Products</Link></li>
                                <li id="admin" align="center"><Link to="/debug">Debug</Link></li>
                                <li id="admin" align="center"><Link to="/logout">Logout</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <h1 align="center">Johnson-Thomas Estate<br /><span className="cursive">Favorite Things Project</span></h1>
            </div>
        );
    }
}

export default withRouter(NavBar);

//class={`nav-item  ${props.location.pathname === "/about" ? "active" : ""}`}

