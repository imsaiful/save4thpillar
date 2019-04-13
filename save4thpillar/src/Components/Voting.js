import React from 'react';
import {Link} from 'react-router-dom';

const Voting = (props) => {
    console.log(props.data);


    return (
        <div>
         {props.data.map(({name,info,total_star,total_user,website,image }, index) => 
            <li key={index}>
            <div class="card border-primary">
            <div class="card-body">
                <h4 class="card-title"><b>Name</b>: {name}</h4>
                <div className="row">
                    <div className="col-md-8">
                        <p class="card-text"> <b>info</b>: {info}</p>
                    </div>
                    <div className="col-md-4">
                        <img src={image} className="img-resonsive center-block" style={{width:"80%",height:"50%"}}></img>
                    </div>
                </div>
                
                <p>URL:<Link to="" class="card-link">{website}</Link></p>

                <p><b>Total Star</b>: {total_star}, </p>
                <p><b>Total User</b>: {total_user},</p>
                
            </div>
            </div>
            </li>)}
        
        </div>
    ) 
}

export default Voting;