import React, { Component } from 'react';
import {Link} from 'react-router-dom';

 class Show extends Component {
    
  render() {
    return (
        <div>
            <div  className="card border-primary">
                {this.props.data.map(({headline,link,date }, index) => 
                    <div key={index}>
                        <div className="card-body">
                            <h3><a href={link}>{headline}</a></h3> 
                            <h6>{date}</h6>           
                        </div>
                    </div>
                 )}
              
        </div>  
       
           <br></br>
           
          
   
       </div>
    )
  }
}

export default Show;