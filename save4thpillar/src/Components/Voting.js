import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';
class Voting extends Component{
    state={
        rating:null
    }
    
    onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
      }
    render(){
    return (
        <div>
         {this.props.data.map(({name,info,total_star,total_user,website,image }, index) => 
            <li key={index}>
            <div className="card border-primary">
            <div className="card-body">
                <h4 className="card-title"><b>Name</b>: {name}</h4>
                <div className="row">
                    <div className="col-md-8">
                        <p className="card-text"> <b>info</b>: {info}</p>
                    </div>
                    <div className="col-md-4">
                        <img src={image} className="img-resonsive center-block" style={{width:"80%",height:"50%"}}></img>
                    </div>
                </div>
                
                <p>URL:<Link to="" className="card-link">{website}</Link></p>
                <StarRatingComponent 
                    name="rate" 
                    starCount={10}
                    value={this.state.rating}
                    onStarClick={this.onStarClick.bind(this)}
                />
                <p><b>Total Star</b>: {total_star}, </p>
                <p><b>Total User</b>: {total_user},</p>
                
            </div>
            </div>
            </li>)}
        
        </div>
    ) 
    }
}

export default Voting;