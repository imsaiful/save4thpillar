import React, { Component } from 'react';
import Header from './Components/header'
import {BrowserRouter} from 'react-router-dom'
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


