import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./AboutMe.css";

class AboutMe extends Component {
    render() {
        return (
            <div className="about-me-frame">
                <div className="section-title">
                    <h1>About Me</h1>
                </div>
                <Container className="about-me">
                    <Row>
                        <Col xs={12} md={6} className="about-me-text">
                            <p>
                                My name is Patrick McDonagh. I'm a product manager living in Kansas City, MO. For as long as I can remember, I've always been fascinated with
                                finding out how things work. Whether it was taking apart an old VCR, tinkering with a pair of speakers, or building an iPod radio transmitter that
                                would have made the FCC quite upset, I've always had the itch to tinker. In my quest for figuring out how things work, I earned a Bachelor of
                                Science in Electrical Engineering from the University of Missouri.
                            </p>
                            <br />
                            <p>
                                I pride myself on being a perpetual learner, a self-starter, and a mentor to less-experienced engineers. I value quickly creating solutions, but at
                                the same time ensuring that I produce the best results, envisioning all possible scenarios. I’m not afraid to jump head-first into a new framework
                                or language in order to create the best possible solution. I work hard to make sure I stay actively engaged in both my work and my personal
                                development.
                            </p>
                            <br />
                            <p>
                                Although I love what I do at work, I rather enjoy my life outside of work. I'm an avid musician, always finding time to strum a few chords on
                                guitar, tickle the keys of a piano, or try to carry a tune singing. In my younger days, I even played in a band with a repertoire that mostly
                                consisted of Greenday, Incubus, and AC/DC covers. When the weather is nice, I enjoy watersports, especially the ones like wakesurfing that don't
                                hurt as much. My wonderful wife and I have a grump of a goldendoodle who loves his walks and swim sessions. You can usually find the three of us on
                                a patio in the sun enjoying a good craft beer and each other's company!
                            </p>
                        </Col>

                        <Col xs={12} md={6} className="about-me-image">
                            <Image src="pic_of_me.jpg" rounded fluid />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default AboutMe;
