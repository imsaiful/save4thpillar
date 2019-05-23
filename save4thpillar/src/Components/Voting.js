import React, { Component } from "react";
import StarRatingComponent from "react-star-rating-component";
import axios from "axios";
import "./voting.css";
class Voting extends Component {
  state = {
    rating: [],
    stars: 0
  };

  componentDidMount() {
    const id = localStorage.getItem("id");

    axios
      .get(
        `http://ec2-13-233-199-251.ap-south-1.compute.amazonaws.com/api/count/${id}`
      )
      .then(res => {
        console.log("rating valueeeesss:", res.data);
        if (id) {
          this.setState({
            stars: res.data[0].rate
          });
        }
      });
  }

  onStarClick = nextValue => {
    const id = localStorage.getItem("id");
    console.log("next Rating:", nextValue);
    if (id) {
      axios
        .post("http://127.0.0.1:8000/api/count/1/update/", nextValue)
        .then(res => {
          console.log("response:", res);
        });
    } else {
      window.location.replace("/login");
    }
  };

  render() {
    let channel = this.props.data;
    return (
      <div>
        {console.log("props data: ", this.props.data)}
        {this.props && this.props.data && this.props.data.News_Channel
          ? this.props.data.News_Channel.map(
              (
                { name, info, total_star, total_user, website, image, id },
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
                            <div className="col-md-8">{id}</div>
                          </div>
                          <div className="row">
                            <div className="col-md-4">You Rate</div>
                            <div className="col-md-8">
                              <StarRatingComponent
                                name="rate"
                                starCount={10}
                                value={this.state.stars}
                                renderStarIcon={() => (
                                  <span style={{ fontSize: "18px" }}>
                                    <i className="fa fa-star" />
                                  </span>
                                )}
                                onStarClick={rating =>
                                  this.onStarClick({ rating, id: id })
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
    );
  }
}

export default Voting;