import React, { Component } from 'react'
import axios from 'axios'
import Show from './Show'
class indiatv extends Component {

  state = {
    data:[]
  }
  componentDidMount(){
      axios.get('http://127.0.0.1:8000/api/indiatv')
      .then(res => {
          this.setState({data:res.data
          });
          console.log(res.data);
      });
  }
  render() {
    return (
      <div>
        <h1>indiatv</h1>
        <Show data={this.state.data} />        
      </div>
    )
  }
}

export default indiatv;