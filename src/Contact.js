import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Contact.css";

class Contact extends Component {
    render() {
        return (
            <div className="contact-frame">
                <Container className="contact">
                    <Row>
                        <Col xs={12} md={4} className="contact-email">
                            <h1>
                                <i class="far fa-envelope"></i>
                            </h1>
                            <h3>{this.props.email}</h3>
                        </Col>

                        <Col xs={12} md={4} className="contact-github">
                            <h1>
                                <i class="fab fa-github"></i>
                            </h1>
                            <h3>
                                <i class="fas fa-code"></i>{" "}
                                <a className="github-handle" href={"https://github.com/" + this.props.githubHandle}>
                                    {this.props.githubHandle}
                                </a>
                            </h3>
                        </Col>

                        <Col xs={12} md={4} className="contact-location">
                            <h1>
                                <i class="fas fa-map-marker-alt"></i>
                            </h1>
                            <h3>{this.props.location}</h3>
                        </Col>
                    </Row>
                    <hr />
                </Container>
            </div>
        );
    }
}

export default Contact;
