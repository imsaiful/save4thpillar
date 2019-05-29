import React from 'react';
import axios from 'axios';
import Anchor from '../../Components/Anchor';


class AnchorListView extends React.Component{
  state = {
    data:[],    
  }
  componentDidMount(){
    axios.get('http://127.0.0.1:8000/api/jlist')
    .then(res => { 
        this.setState({data: res.data});
    })
    
  }
  render(){
      return (
        <Anchor data={this.state.data} ></Anchor>
        )
  }
}

export default AnchorListView;
