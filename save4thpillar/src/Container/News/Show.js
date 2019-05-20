import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Show extends Component {
    constructor(props) {
      super(props)
    }
    RenderData() {
      const {data}  = this.props;
      return Object.keys(data).map((key) => {
        return (
          <div key={key}>
          { data[key].map(({headline, date, link}, index) => {
            return (
              <div key={index}>
                <h1> Chanel: {key} </h1>
                <h3> Headline: {headline} </h3>
                <h4> Date: {date} </h4>
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
      const { data } = this;
  
      return (
        <div>
          {data && <RenderData />}
         </div>
      )
    }
  }

  export default Show;