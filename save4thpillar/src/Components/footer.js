import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
    
      <div className="page-footer">
          <footer>
            <div className="row">
                <div className="col-md-1">
                </div>
              <div className="col-md-5">
                <h5 className="white-text">Save4Pillar</h5>
                <p className="grey-text text-lighten-4">Media is the fourth pillar of democracy. The platform Save4Pillar is to rank the
                    news media platform based on the content provided by them. We believe if we have system to rank the news media then
                    we could get more quality news related to our issue like population , pollution , unemployment , child labour etc unlike the
                    trend in media nowadays in which they talk mostly about politics , celebrities and cricket etc.
                </p>
              </div>
                <div className="col-md-1">
                </div>
              <div className="col-md-2">
                <h5 className="white-text">Links</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#!">Home</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">About Us</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Contact Us</a></li>
                </ul>
              </div>
                <div className="col-md-3">
                <h5 className="white-text">Follow Us</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#!">Facebook</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Instagram</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Twitter</a></li>
                </ul>
              </div>
            </div>
          <div className="footer-copyright">
            <div className="container">
            © 2019 Save Fourth Pillar

            </div>
          </div>
        </footer>

      </div>
      
      
    )
  }
}

export default Footer;
