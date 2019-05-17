import React, { Component } from 'react'
import axios from 'axios'
import Show from './Show'
class keywordNews extends Component {
    state = {
        data:[]
      }
      componentDidMount(){
          const keyword=localStorage.getItem('keyword');
          const url=`http://ec2-13-233-199-251.ap-south-1.compute.amazonaws.com/api/keyword/${keyword}`;
          console.log(url);
          axios.get(url)
          .then(res => {
            this.setState({data:res.data.Zeenews
            });
            console.log(res.data);
        });
          
      }
  render() {
    return (
      <div>
        <h1>{localStorage.getItem('keyword')}</h1>
        <Show data={this.state.data} /> 
      </div>
    )
  }
}


export default keywordNews;