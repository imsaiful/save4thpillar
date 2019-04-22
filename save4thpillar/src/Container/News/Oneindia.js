import React, { Component } from 'react'
import axios from 'axios'
import Show from './Show'
class Oneindia extends Component {

  state = {
    data:[]
  }
  componentDidMount(){
      axios.get('http://ec2-13-233-199-251.ap-south-1.compute.amazonaws.com/api/oneindia')
      .then(res => {
          this.setState({data:res.data
          });
          console.log(res.data);
      });
  }
  render() {
    return (
      <div>
        <h1>Oneindia</h1>
        <Show data={this.state.data} />        
      </div>
    )
  }
}

export default Oneindia;