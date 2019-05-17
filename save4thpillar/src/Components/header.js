import React,{Component} from 'react';
import {NavLink,Route,withRouter} from 'react-router-dom';
import NewsListView from '../Container/News/NewsListView';
import StatsView from '../Container/StatsView';
import VotingView from '../Container/VotingView.js';
import Rightsidebar from '../Container/rightsidebar';
import Footer from './footer';
import Loginform from '../Container/loginform'
import SignUp from '../Container/SignUp'
import {connect} from 'react-redux';
import * as actions from '../Store/actions/auth';
import Ndtv from '../Container/News/ndtv';

class Header extends React.Component{
    constructor(props){
      super(props);
      { this.props.isAuthenticated ? 
        console.log("enter")
        :
        console.log("exit")
      }
    }
    componentDidMount
    
    render(){
    return (
            <div>
              <nav className="navbar navbar-inverse navbar-fixed-top">
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
        <li><NavLink to="/" className="navlink"><span><img src="https://s3.ap-south-1.amazonaws.com/fourthpillar-static/media/icon/home+.png"/></span>Home</NavLink></li>
        <li><NavLink to="/news" className="navlink"><span><img src="https://s3.ap-south-1.amazonaws.com/fourthpillar-static/media/icon/news.png"/></span>News</NavLink></li>
        <li><NavLink to="/stats" className="navlink"><span><img src="https://s3.ap-south-1.amazonaws.com/fourthpillar-static/media/icon/stats.png"/></span>Stats</NavLink></li>
      </ul>
   
      { this.props.isAuthenticated ? 
               <ul className="nav navbar-nav navbar-right"> 
                <li><NavLink to="/logout" onClick={this.props.logout} className="navlink">Profile</NavLink></li>
              <li><NavLink to="/logout" onClick={this.props.logout} className="navlink">Logout</NavLink></li>
           </ul>
          :
          <ul className="nav navbar-nav navbar-right">
              <li><NavLink to="/signup" className="navlink"><span><img src="https://s3.ap-south-1.amazonaws.com/fourthpillar-static/media/icon/signup.png"/></span>Sign Up</NavLink></li>
              <li><NavLink to="/login" className="navlink"><span><img src="https://s3.ap-south-1.amazonaws.com/fourthpillar-static/media/icon/login.png"/></span>Login</NavLink></li>
          </ul>
      
        }
    </div>
  </div>
</nav>
  <div className="container">
    <div className="row">
          <div className="col-md-2">
              <Rightsidebar />
          </div>
          <div className="col-md-8">
              <Route exact path="/" component={ VotingView }  {...this.props} />
              <Route exact path="/news" component={ NewsListView } />
              <Route exact path="/stats" component={ StatsView } />
              <Route exact path="/login" component={ Loginform } />
              <Route exact path="/signup" component={ SignUp } />
          </div>
          <div className="col-md-2">
              <Rightsidebar />
          </div>
          <div>
            </div>
            </div>
          
        
      </div>
      <Footer/>
      <br></br>
  </div>
)
}
}


const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  }
}
const mapDispatchToProps = dispatch => {
  return {
      logout: () => dispatch(actions.logout()) 
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)( Header));