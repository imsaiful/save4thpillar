import React, { Component } from 'react';
import Header from './Components/header';
import {BrowserRouter} from 'react-router-dom';
import Rightsidebar from './Container/rightsidebar';
import { connect } from 'react-redux'
import * as actions from './Store/actions/auth'

import './app.css'
class App extends Component {
  componentDidMount(){
    this.props.onTryAutoSignUp();  
  }
  render() {
    return (
      <div>
      <BrowserRouter>
        <div>
          <Header {...this.props}>
          </Header>
        </div>
      </BrowserRouter>
      </div>
    )
  }
}

const mapStateToProps = state =>{
  return {
    isAutheticated:state.token!==null
  }
}
const mapDispatchToProps = dispatch =>{
    return {
      onTryAutoSignUp:() => dispatch(actions.authCheckState())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);


