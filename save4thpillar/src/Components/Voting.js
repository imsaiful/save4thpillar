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
        const id=localStorage.getItem('id');
        console.log("id="+id);
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
            <div>
            <div className="thumbnail">
          <div className="row">
              <div className="col-md-7">
                  <table className="table-responsive">
                      <tbody>
                        <tr><td className="td-voting"><h5><b>Name</b></h5></td><td><h5>{name}</h5></td></tr>
                        <tr><td className="td-voting"><h5><b>Info</b></h5></td><td><h5>{info}</h5></td></tr>
                        <tr><td className="td-voting"><h5><b>Anchor:</b></h5></td><td><h5>{total_star/total_user}</h5></td></tr>
                        <tr><td className="td-voting"><h5><b>Rating</b></h5></td><td><h5>{total_star/total_user}</h5></td></tr>
                        <tr><td className="td-voting"><h5><b>You rate</b></h5></td><td><h5> <StarRatingComponent 
                                    name="rate" 
                                    starCount={10}
                                    value={total_star/total_user}
                                    renderStarIcon={() => (
                                        <span style={{ fontSize: "10px"  }}>
                                          <i className="fa fa-star" />
                                        </span>
                                      )}
                                    onStarClick={this.onStarClick.bind(this)}
                                />  </h5></td></tr>
                        <tr><td className="td-voting"><h5><b>Websites</b></h5></td><td><h5>              <Link style={{ fontSize:"10px" }}>{website}</Link></h5></td></tr>

                     </tbody>
                  </table>
              </div>
              <div className="col-md-5">
                  <img className="img-responsive center" src={image} alt="backmyitem" style={{ width:"100%",height:"100%",margin:"0 auto"}}></img><br></br>
                                                                                                                        </div>
          </div>
         
             

         
      </div>


            </div>
                {/* <div className="container">
  <div className="row">
    <div className="col-12 col-sm-8 col-md-6 col-lg-4">
      <div className="card">
        <img style={{ width:"100%",height:"200px"}}  className="card-img" src={image} alt="Bologna"/>
       
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
            <table className="table table-responsive">
                <tbody>
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
            
                </tbody>
            </table>
           
          
        </div>
        
      </div>
    </div>
  </div> */}


            <br></br></div>)}
        </div>
    ) 
    }
}

                         
        

export default Voting;
