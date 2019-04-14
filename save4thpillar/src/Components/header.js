import React from 'react';
import {NavLink,Route} from 'react-router-dom';
import NewsListView from '../Container/NewsListView';
import StatsView from '../Container/StatsView';
import VotingView from '../Container/VotingView.js';
import Rightsidebar from '../Container/rightsidebar';
import Footer from './footer';
import Loginform from '../Container/loginform'

const Header = (props) =>{
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
      <NavLink className="navbar-brand" to="/" >Save4thPillar</NavLink>
    </div>
    <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav">
        <li><NavLink to="/" className="navlink">Home</NavLink></li>
       
        <li><NavLink to="/news" className="navlink">news</NavLink></li>
        <li><NavLink to="/stats" className="navlink">stats</NavLink></li>
        { props.isAuthenticated ? 
              <li><NavLink to="/login" className="navlink">Login</NavLink></li>
          :
              <li><NavLink to="/logout" className="navlink">Logout</NavLink></li>
      
        }
        
      </ul>
    </div>
  </div>
</nav>
  <div className="container">
    <div className="row">
          <div className="col-md-8">
              <Route exact path="/" component={ VotingView } />
              <Route exact path="/news" component={ NewsListView } />
              <Route exact path="/stats" component={ StatsView } />
              <Route exact path="/login" component={ Loginform } />
              <Route exact path="/signin" component={ StatsView } />
          </div>
          <div className="col-md-4">
              <Rightsidebar />
          </div>
          <div>
            </div>
            </div>
          <Footer/>
         
      </div>
    
  </div>
)
}
export default Header;