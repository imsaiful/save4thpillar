import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Show extends Component {
  constructor(props) {
    super(props)
  }
  RenderData = () => {
    const { data } = this.props;
    return Object.keys(data).map((key) => {
      return (
        <div key={key}>
        { data[key].map(({headline, date, link}, index) => {
          return (
            <div className="Newscards" key={index}>
              <div className="row">
                <div className="col-md-12">
                  <a href={link}>{headline} </a>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 align-div-right">
                  Date: {date} 
                </div>
              <div className="col-md-6 align-div-left">
                  Source:<b>{key}</b>
              </div>
              </div>
              <h4></h4>
            </div>
          )
        })}


          <br/>
          <br />
        </div>
      )
    }
    );
  }

  render() {
    const { RenderData } = this;
    const { data } = this.props;

    return (
      <div>
        {data && <RenderData />}
       </div>
    )
  }
}

export default Show;