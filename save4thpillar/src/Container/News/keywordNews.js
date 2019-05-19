import React, { Component } from 'react'
import axios from 'axios'
import NewsSource from './NewsSource'
class keywordNews extends Component {
    state = {
        data:[]
      }
      async componentDidMount(){
          const keyword=localStorage.getItem('keyword');
          const url=`http://ec2-13-233-199-251.ap-south-1.compute.amazonaws.com/api/keyword/${keyword}`;
          console.log(url);
          axios.get(url).then(res => {
            let result = Object.keys(res.data).map(function(key) {
                return [key, res.data[key]];
            });
            this.setState({
                data : result
            });
        });
          
      }
  render() {
    if (this.state && this.state.data) {
      var allNewsCard =
        this.state &&
        this.state.data &&
        this.state.data.map((item, index) => {
          return (
              <NewsSource data={item} key={index} />
          );
        });
    } else return null;

    return (
      <div className="App">
        
        {allNewsCard}
      </div>
    );
  }
}


export default keywordNews;