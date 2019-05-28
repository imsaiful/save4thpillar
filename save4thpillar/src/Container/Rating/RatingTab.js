import React, { Component } from 'react';
import {Link,Route,BrowserRouter} from 'react-router-dom';
import Voting from '../../Components/Voting';
import VotingView from '../VotingView';

class RatingTab extends Component {
    render() {
    return (
      <div>
        <h1>Rating</h1>
        <BrowserRouter>
        <ul className="nav nav-tabs">
          <table>
            <tbody>
              <tr>
                <td>
                  <li className="tab-link"><Link  to="/">News Channel</Link></li>
                </td>
                <td>
                <li className="tab-link"><Link  to="/republic-news">News Anchor</Link></li>
                </td>
              </tr>
              </tbody>
          </table>
             
              
          </ul>
          <div className="tab-content">
              <Route exact path="/" component={VotingView}  {...this.props} />
              <Route exact path="/republic-news" component={VotingView} {...this.props}/>
            </div> 
          </BrowserRouter>
    
      </div>
    )
  }
}

export default RatingTab;