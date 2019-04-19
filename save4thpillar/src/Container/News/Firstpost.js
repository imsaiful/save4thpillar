import React, { Component } from 'react'
import axios from 'axios'
import Show from './Show'
class FirstSpot extends Component {

  state = {
    data:[]
  }
  componentDidMount(){
      axios.get('http://127.0.0.1:8000/api/firstspot')
      .then(res => {
          this.setState({data:res.data
          });
      });
  }
  render() {
    return (
      <div>
        <h1>First Spot</h1>
        <Show data={this.state.data} />        
      </div>
    )
  }
}

export default FirstSpot;