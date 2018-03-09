import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer-frame">
        <Grid className="footer">
          <Row>
            <hr />
            <Col xs={12} md={4} className="contact-email">

            </Col>

            <Col xs={12} md={4} className="contact-github">

            </Col>

            <Col xs={12} md={4} className="footer-source">
              <p>Check out the source code for this site on <a href="https://github.com/patrickjmcd/patrickmcdonagh-resume">Github</a>!</p>
            </Col>


          </Row>
        </Grid>
      </div>
    );
  }
}

export default Footer;
