import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './AboutMe.css';

class AboutMe extends Component {
  render() {
    return (
      <div className="aboutme-frame">
        <div className="section-title">

          <h1>About Me</h1>
        </div>
        <Grid className="aboutme">
          <Row>
            <Col xs={12} md={6} className="aboutme-text">
              <p>Bacon ipsum dolor amet fatback sausage boudin ground round cow spare ribs alcatra turducken prosciutto turkey cupim tri-tip tenderloin landjaeger. Turkey venison leberkas jowl buffalo. Shank tenderloin boudin frankfurter tri-tip short ribs spare ribs turducken venison, cow alcatra. T-bone porchetta ham hock, picanha tenderloin corned beef shoulder.</p>

              <p>Pork pancetta chuck frankfurter strip steak. Pancetta burgdoggen fatback, kielbasa pork belly meatball short loin ham hamburger boudin chuck frankfurter andouille. Jowl fatback flank t-bone, salami alcatra tail pastrami frankfurter jerky burgdoggen meatloaf pork belly. Shoulder jowl ball tip, biltong venison beef pancetta sausage corned beef strip steak spare ribs pork chop turducken beef ribs. Ham hock cupim biltong chicken doner beef ribs shankle andouille short ribs alcatra corned beef filet mignon.</p>
            </Col>

            <Col xs={12} md={6} className="aboutme-image">
              <Image src="pic_of_me.jpg" rounded responsive />
            </Col>


          </Row>
        </Grid>
      </div>
    );
  }
}

export default AboutMe;
