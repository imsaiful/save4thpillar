import React from 'react';
import axios from 'axios';
import Anchor from '../../Components/Anchor';


class AnchorListView extends React.Component{
  state = {
    data:[],    
  }
  componentDidMount(){
    axios.get('http://ec2-52-66-255-118.ap-south-1.compute.amazonaws.com/api/jlist')
    .then(res => { 
        this.setState({data: res.data});
        console.log("my state", res.data);
    })
    console.log("my state"+this.state.data);
    
  }
  render(){
      return (
        <Anchor data={this.state.data} ></Anchor>
        )
  }
}

export default AnchorListView;
