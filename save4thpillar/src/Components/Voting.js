import React,{Component} from 'react';
import StarRatingComponent from 'react-star-rating-component';
import axios from 'axios'
import './voting.css';
class Voting extends Component{
    state={
        rating:[],
        // channel: []
    }

    componentDidMount(){
        const id=localStorage.getItem('id');
        
        axios.get(`http://ec2-13-233-199-251.ap-south-1.compute.amazonaws.com/api/count/${id}`)
        .then(res => {
            
            this.setState({rating:res.data
            });
        });

        // get channel data from props and save them into state
        // if(this.props && this.props.data) {
        //     console.log("channle data from props: ", this.props)
        //     this.setState({
        //         channel: this.props.data
        //     })
        // }
            }
    
    onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
    }
    
    render(){
        let channelData = [];

        const rating = this.state.rating;
        let channel = this.props.data



        rating.forEach((itm, i) => {
            channelData.push(Object.assign({}, itm, channel[i]));
          });
   
          let channelCard = <p>loading... please wait</p>
          if(channelData[0] !== null) {
               channelCard = channelData.map((item, index) => {
                return (
                    <div key={index}>
                    <div>
                    <div className="thumbnail">
                    <div className="row">
                        <div className="col-md-3">
                            <img alt="save4thpillar" className="img-responsive center" src={item.image} alt="backmyitem" style={{ width:"100%",height:"100%",margin:"0 auto"}}></img><br></br>
                        </div>
                        <div className="col-md-9">
                            <div className="row">
                                <div className="col-md-4">Name</div>
                                <div className="col-md-8">{item.name}</div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">Anchors:</div>
                                <div className="col-md-8">{item.info}</div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">Rating</div>
                                <div className="col-md-8">{2}</div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">Website</div>
                                <div className="col-md-8"><a href={item.website}>{item.website}</a></div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">ChannelId</div>
                                <div className="col-md-8">{item.id}</div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">You Rate</div>
                                <div className="col-md-8">
                                <StarRatingComponent 
                                            name="rate" 
                                            starCount={10}
                                            value={item.rate}
                                            renderStarIcon={() => (
                                                <span style={{ fontSize: "10px"  }}>
                                                  <i className="fa fa-star" />
                                                </span>
                                              )}
                                            onStarClick={this.onStarClick.bind(this)}
                                        /> </div>
                                </div>
                            </div>
                            
                        </div>
                     </div>
                    </div>
                </div>        
                )
              }
              );
          } else return null;
    return ( 
        <div>
        {channelCard}
         {/* {this.props.data.map(({name,info,total_star,total_user,website,image,id }, index) => 
            <div key={index}>
            <div>
            <div className="thumbnail">
            <div className="row">
                <div className="col-md-3">
                    <img className="img-responsive center" src={image} alt="backmyitem" style={{ width:"100%",height:"100%",margin:"0 auto"}}></img><br></br>
                </div>
                <div className="col-md-9">
                    <div className="row">
                        <div className="col-md-4">Name</div>
                        <div className="col-md-8">{name}</div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">Anchors:</div>
                        <div className="col-md-8">{info}</div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">Rating</div>
                        <div className="col-md-8">{total_star/total_user}</div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">Website</div>
                        <div className="col-md-8"><a href={website}>{website}</a></div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">ChannelId</div>
                        <div className="col-md-8">{id}</div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">You Rate</div>
                        <div className="col-md-8">
                        <StarRatingComponent 
                                    name="rate" 
                                    starCount={10}
                                    value={2}
                                    renderStarIcon={() => (
                                        <span style={{ fontSize: "10px"  }}>
                                          <i className="fa fa-star" />
                                        </span>
                                      )}
                                    onStarClick={this.onStarClick.bind(this)}
                                /> </div>
                        </div>
                    </div>
                    
                </div>
             </div>
            </div>
        </div>)} */}
    </div>
    ) 
    }
}

                         
        

export default Voting;