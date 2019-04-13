import React from 'react';
import Trending from '../Components/Trending'
import axios from 'axios';


class TrendingList extends React.Component{
  state = {
    keywords:[]
  }

  componentDidMount(){
    axios.get('http://127.0.0.1:8000/api/trending')
    .then(res=>{
      this.setState({
        keywords:res.data
      });
      console.log(res.data);
    }) 
  }
  render(){
      return (
        <Trending data={this.state.keywords}/>
      )
  }
}

export default TrendingList;