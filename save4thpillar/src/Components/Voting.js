import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';
import axios from 'axios'
import './voting.css';
class Voting extends Component{
    state={
        data:null
    }

    componentDidMount(){
        const id={}
        axios.get(`http://ec2-13-233-199-251.ap-south-1.compute.amazonaws.com/api/count/${id}`)
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
                <div class="container">
  <div className="row">
    <div className="col-12 col-sm-8 col-md-6 col-lg-4">
      <div className="card">
        <img style={{ width:"100%",height:"200px"}}  className="card-img" src={image} alt="Bologna"/>
       
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
            <table class="table table-responsive">
                <tr>
                    <td className="card-left-td">
                    Total Rating
                    </td>
                    <td >
                    {total_star/total_user}
                    </td>
                </tr>
                <tr>
                    <td className="card-left-td">
                    You Rate
                    </td>
                    <td className="align-middle">
                    <StarRatingComponent 
                                    name="rate" 
                                    starCount={10}
                                    value={total_star/total_user}
                                    renderStarIcon={() => (
                                        <span style={{ fontSize: "20px" , margin: "0 auto" }}>
                                          <i className="fas fa-star" />
                                        </span>
                                      )}
                                    onStarClick={this.onStarClick.bind(this)}
                                />  
                    </td>
                </tr>
            
            
            </table>
            <i className="far fa-star text-info"></i> 
            <i className="fas fa-users text-info"></i><br></br>
            <i className="far fa-star text-info"></i> 
            <i className="fas fa-users text-info"></i> <br></br>
            
          <a href="#" className="btn btn-info">Read Recipe</a>
        </div>
        <div className="card-footer text-muted d-flex justify-content-between bg-transparent border-top-0">
          <div className="views">Oct 20, 12:45PM
          </div>
          <div className="stats">
           	<i className="far fa-eye"></i> 1347
            <i className="far fa-comment"></i> 12
          </div>
           
        </div>
      </div>
    </div>
  </div>
</div>




            <br></br></div>)}
        </div>
    ) 
    }
}

                {/* <div  className="card border-primary">
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
                </div></div> */}
          
        

export default Voting;

{/* <StarRatingComponent 
                                    name="rate" 
                                    starCount={1}
                                    value={total_star/total_user}
                                    onStarClick={this.onStarClick.bind(this)}
                                /> */}