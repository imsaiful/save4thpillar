import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';
import axios from 'axios'
class Voting extends Component{
    state={
        data:null
    }

    componentDidMount(){
        const id={}
        axios.get(`http://127.0.0.1:8000/api/count/${id}`)
        .then(res => {
            
            this.setState({data:res.data
            });
            console.log("data")
            console.log(this.state.data)
        });
        
    }
    
    onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
    }
    
    render(){
    return (
        <div>
         {this.props.data.map(({name,info,total_star,total_user,website,image }, index) => 
            <div key={index}>
                <div  className="card border-primary">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-6">
                                <img src={image} className="img-resonsive card-image"></img>
                            </div>
                            <div className="col-md-6">
                                <table className="table table-responsive">
                                    <tbody>
                                    <tr>
                                        <td style={{ width:"30%"}}>{index+1}</td>
                                        <td  className="card-td channelName">{name}</td>
                                    </tr>
                                    <tr>
                                        <td style={{ width:"30%"}}>URL</td>
                                        <td><Link to="" className="card-td card-link">{website}</Link></td>
                                    </tr>
                                    <tr>
                                        <td style={{ width:"30%"}}>
                                            <img src="https://s3.ap-south-1.amazonaws.com/fourthpillar-static/media/star.png" style={{width:"25px",height:"25px"}}></img>
                                        </td>
                                        <td>  
                                            <h1 style={{textAlign:"left",float:"left" }}>{total_star/total_user}</h1>
                                            <h6 style={{textAlign:"left",float:"left",paddingTop:"30px"}}>
                                                /10
                                            </h6>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ width:"30%"}}>Votes</td>
                                        <td>{total_user}</td>
                                    </tr>
                                    
                                    <tr>    
                                        <td style={{ width:"30%"}}>You rate
                                        </td>
                                        <td> 
                                            <StarRatingComponent 
                                                name="rate" 
                                                starCount={10}
                                                value={1}
                                                onStarClick={this.onStarClick.bind(this)}/>
                                        </td>
                                    </tr>    
                                        
                                    </tbody>        
                                
                                </table>
                            </div>
                    </div>
                </div>
            </div>
           
            <br></br>
            </div>
            )}
    
        </div>
    ) 
    }
}

export default Voting;

{/* <StarRatingComponent 
                                    name="rate" 
                                    starCount={1}
                                    value={total_star/total_user}
                                    onStarClick={this.onStarClick.bind(this)}
                                /> */}