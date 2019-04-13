import React from 'react';
import {NavLink,Route} from 'react-router-dom';
import NewsListView from '../Container/NewsListView';
import StatsView from '../Container/StatsView';
import VotingView from '../Container/VotingView.js';
const Header = () =>{
    return (
            <div>
              <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>                        
      </button>
      <NavLink className="navbar-brand" to="/">Save4thPillar</NavLink>
    </div>
    <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav">
        <li><NavLink to="/">Home</NavLink></li>
       
        <li><NavLink to="/news">news</NavLink></li>
        <li><NavLink to="/stats">stats</NavLink></li>
      </ul>
    </div>
  </div>
</nav>
        <Route exact path="/" component={ VotingView } />
        <Route exact path="/news" component={ NewsListView } />
        <Route exact path="/stats" component={ StatsView } />
       

            </div>

    )
}
export default Header;