import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import { Timeline, TimelineEvent } from "react-event-timeline";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faTint, faWrench, faCogs, faGraduationCap } from "@fortawesome/fontawesome-pro-solid";
import './Experience.css';

class Experience extends Component {






  render() {
    return (
      <div className="experience-frame">
        
        <Grid className="experience">
          <Row>
            <Col xs={12} md={8} className="experience-text">
                <div className="section-title">
                    <h1>Experience</h1>
                </div>
                <Timeline>
                    <TimelineEvent icon={<FontAwesomeIcon icon={faTint}/>} >
                        <h3>Henry Pump, Midland, TX (Remote)</h3>
                        <h4>Product Manager — 2017-Present</h4>
                        <h4>Electrical Engineer— 2014-2017</h4>
                        <ul>
                            <li>Work directly with clients and advisers to adapt and design products to meet customer needs</li>
                            <li>Develop and implement control algorithms, interfaces, data storage, and analysis platforms for solving problems common to oil and water production companies</li>
                            <li>Support and continuously improve existing products to provide new feature sets and utilize new frameworks, techniques, and programming languages</li>
                            <li>Integrate with existing customer SCADA systems and financial databases through development and documentation of APIs</li>
                            <li>Responsible for all product development and programming, including:</li>
                            <ul>
                                <li>Pump-Off Controller with real-time analysis</li>
                                <li>Intelligent Pump Panel for smart water well control</li>
                                <li>POConsole Data Acquisition and Storage platform</li>
                                <li>POCloud remote monitoring and data aggregation solution</li>
                                <li>Henry Downhole Pump</li>
                            </ul>
                        </ul>
                    </TimelineEvent>

                    <TimelineEvent icon={<FontAwesomeIcon icon={faWrench} />} >
                        <h3>Rockwell Automation, Dallas, TX</h3>
                        <h4>Field Service Engineer — 2013-2014</h4>
                        <ul>
                            <li>Planned, quoted, programmed, and executed projects for water filtration systems, legacy migrations, and implementation of complex mathematical algorithms </li>
                            <li>Performed field service calls and executed projects focusing on:</li>
                            <ul>
                                <li>Programmable Logic Controllers</li>
                                <li>Human-Machine Interfaces and Panel PCs</li>
                                <li>Variable Frequency Drives</li>
                            </ul>
                        </ul>
                    </TimelineEvent>

                    <TimelineEvent
                        icon={<FontAwesomeIcon icon={faCogs} />}
                    >
                        <h3>Barry-Wehmiller Design Group, St. Louis, MO</h3>
                        <h4>Electrical Engineer — 2011-2013</h4>
                        <ul>
                            <li>Lead project execution for installation of new processing areas and integration to existing systems</li>
                            <li>Executed manufacturing control projects as part of the Unilever team</li>
                            <li>Oversaw the virtualization of all manufacturing servers in the Jefferson City, MO plant</li>
                        </ul>  
                    </TimelineEvent>


                </Timeline>

            </Col>

            <Col xs={12} md={4} className="experience-text">
                <div className="section-title">
                    <h1>Education</h1>
                </div>
                <Timeline>
                    <TimelineEvent icon={<FontAwesomeIcon icon={faGraduationCap} />}>
                        <h3>University of Missouri</h3>
                        <h4>Columbia, MO, 2007 - 2011</h4>
                        <h4>B.S. in Electrical Engineering</h4>
                    </TimelineEvent>
                </Timeline>

                
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Experience;
