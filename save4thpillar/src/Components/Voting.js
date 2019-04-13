import React from 'react';


const Voting = (props) => {
    console.log(props.data);


    return (
        <div>
         {props.data.map(({name,info,total_star,total_user,website }, index) => 
            <li key={index}>
            <div className="thumbnail">
            <b>Name</b>: {name}, <br/>
            <b>info</b>: {info},<br/>
            <b>Total Star</b>: {total_star}, <br/>
            <b>Total User</b>: {total_user},<br/>
            <b>Website</b>: {website}<br/>
            </div>
            </li>)}
        
        </div>
    ) 
}

export default Voting;