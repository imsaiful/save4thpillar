import React, { Component } from 'react';


 class Show extends Component {
    
  render() {
    return (
        <div>
            <div>
                {this.props.data.map(({headline,link,date,category }, index) => 
                    <div key={index}>
                        <div className="Newscards">
              <div className="row">
                <div className="col-md-12">
                  <a href={link}>{headline} </a>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                </div>

              
              </div>
              <h4></h4>
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