import React, { Component } from "react";
import StarRatingComponent from "react-star-rating-component";
import axios from "axios";
import "./voting.css";
class Voting extends Component {
  state = {
    allData: null,
    rating: null
  };

  componentDidMount() {
    const id = localStorage.getItem("id");
    if (id) {
      axios
        .get(
          `http://127.0.0.1:8000/api/count/${id}`
        )
        .then(res => {
          this.setState({
            rating: res.data
          });
        });
    }
  }

  onStarClick = rating => {
    const id = localStorage.getItem("id");
    // API call for updating stars
    if (id) {
      let rate = rating.rating;
      console.log("next Rating:", rate);
      console.log("next userID:", rating.userId);
      console.log("next docId:", rating.docId);
      console.log(rating.docId+" = "+rating.userId+" = "+rating.channelId+"  =  "+rate);
      let url="http://127.0.0.1:8000/api/count/14/update/";
      console.log(url);
      axios.patch(
          url,{
            id: rating.docId,
            userId: rating.userId,
            channelId: rating.channelId,
            rate:rate
          }

// {
//   "id": 14,
//   "userId": 1,
//   "channelId": 10,
//   "rate": 9
// }
        ).then(res => {
          console.log(res)
          window.location.reload();
        })
       
    } else {
      window.location.replace("/login");
    }
  };

  componentWillReceiveProps(nextProps) {
    // You don't have to do this check first, but it can help prevent an unneeded render
    if (nextProps && nextProps.data) {
      this.setState({ allData: nextProps.data.News_Channel });
    }
  }

  render() {
    // console.log("render state alldata: ", this.state.allData);
    // console.log("render state rating: ", this.state.rating);

    let data = [];
    let rating = [];
    let allData = [];

    if (this.state.allData && this.state.rating) {
      data = this.state.allData;
      rating = this.state.rating;
      data.filter((item, index, array) => {
        rating.find(ritem => {
          if (ritem.channelId === item.id) {
            return allData.push({
              name: item.name,
              info: item.info,
              image: item.image,
              website: item.website,
              total_star: item.total_star,
              total_user: item.total_user,
              channelId: item.id,
              userId: ritem.userId,
              docId: ritem.id,
              stars: ritem.rate
            });
          }
        });
      });
    }

    return (
      <div>
        <div>
          {/* {this.props.data ? console.log("all in render", allData) : null} */}
          {this.props.data ? console.log("rating in render", rating) : null}
          {rating !== null
            ? allData.map(
                (
                  {
                    name,
                    info,
                    image,
                    website,
                    total_star,
                    total_user,
                    channelId,
                    userId,
                    docId,
                    stars
                  },
                  index
                ) => (
                  <div key={index}>
                    <div>
                      <div className="thumbnail">
                        <div className="row">
                          <div className="col-md-3">
                            <img
                              className="img-responsive center"
                              src={image}
                              alt="backmyitem"
                              style={{
                                width: "100%",
                                height: "100%",
                                margin: "0 auto"
                              }}
                            />
                            <br />
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
                              <div className="col-md-8">
                                {total_star / total_user}
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-4">Website</div>
                              <div className="col-md-8">
                                <a href={website}>{website}</a>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-4">ChannelId</div>
                              <div className="col-md-8">{channelId}</div>
                            </div>
                            <div className="row">
                              <div className="col-md-4">You Rated</div>
                              <div className="col-md-8">
                                <StarRatingComponent
                                  name="rate"
                                  starCount={10}
                                  value={stars}
                                  renderStarIcon={() => (
                                    <span style={{ fontSize: "18px" }}>
                                      <i className="fa fa-star" />
                                    </span>
                                  )}
                                  onStarClick={rating =>
                                    this.onStarClick({ rating, userId,channelId, docId })
                                  }
                                />{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )
            : null}
        </div>
        <div>
          {console.log(this.props.data)}
          {this.props &&
          this.props.data &&
          this.props.data.News_Channel &&
          rating === null
            ? this.props.data.News_Channel.map((item, index) => (
                <div key={index}>
                  <div>
                    <div className="thumbnail">
                      <div className="row">
                        <div className="col-md-3">
                          <img
                            className="img-responsive center"
                            src={item.image}
                            alt="backmyitem"
                            style={{
                              width: "100%",
                              height: "100%",
                              margin: "0 auto"
                            }}
                          />
                          <br />
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
                            <div className="col-md-8">
                              {item.total_star / item.total_user}
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-4">Website</div>
                            <div className="col-md-8">
                              <a href={item.website}>{item.website}</a>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-4">ChannelId</div>
                            <div className="col-md-8">{item.channelId}</div>
                          </div>
                          <div className="row">
                            <div className="col-md-4">You Rated</div>
                            <div className="col-md-8">
                              <StarRatingComponent
                                name="rate"
                                starCount={10}
                                value={0}
                                renderStarIcon={() => (
                                  <span style={{ fontSize: "18px" }}>
                                    <i className="fa fa-star" />
                                  </span>
                                )}
                                onStarClick={rating =>
                                  this.onStarClick({ rating })
                                }
                              />{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : null}
          {/* <p>
            {this.props &&
              this.props.data &&
              this.props.data.News_Channel &&
              this.props.data.News_Channel[0].info}
          </p> */}
        </div>
      </div>
    );
  }
}

export default Voting;