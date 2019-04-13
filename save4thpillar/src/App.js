import React, { Component } from 'react';
import Header from './Components/header';
import {BrowserRouter} from 'react-router-dom';
import Rightsidebar from './Container/rightsidebar';
import './app.css'
class App extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
        <div>
          <Header/>
        </div>
      </BrowserRouter>
      </div>
    )
  }
}
export default App;


