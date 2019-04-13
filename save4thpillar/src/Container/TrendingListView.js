import React from 'react';
import Trending from '../Components/Trending'
import axios from 'axios';


class TrendingList extends React.Component{
  state = {
    data:[],
    frequency: [],
    keyword: []
  }

  componentDidMount(){
    axios.get('http://127.0.0.1:8000/api/trending')
    .then(res => {
      const data = res.data;
      console.log(data);
      
      data.map(d => {
        this.state.keyword.push(d.db_keyword)
        this.state.frequency.push(d.db_frequency)
        
        
      })
      this.setState({
        data: res.data
              });
      console.log('state data goes here:   '+ this.state.data[0].db_keyword);
    }) 
  }
  render(){
      return (
        <Trending keyword={this.state.keyword} frequency={this.state.frequency}/>
      )
  }
}

export default TrendingList;