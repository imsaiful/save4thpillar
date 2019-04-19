import React from 'react';
import Trending from '../Components/Trending'
import axios from 'axios';
import Voting from '../Components/Voting';


class TrendingList extends React.Component{
  state = {
    data:[],
    
  }

  componentDidMount(){
    axios.get('http://127.0.0.1:8000/api/')
    .then(res => { 
        this.setState({data: res.data});
    })
    
  }
  render(){
      return (
        <Voting data={this.state.data} ></Voting>
        )
  }
}

export default TrendingList;