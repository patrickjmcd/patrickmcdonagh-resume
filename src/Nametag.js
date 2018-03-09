import React, { Component } from 'react';
import './Nametag.css';

class Nametag extends Component {
  render() {
    return (
      <div className="nametag-frame">
        <div className="nametag">
          <div className="nametag-top">
            <h1>Hello</h1>
            <p>My name is</p>
          </div>
          <div className="name-part">
            <p className="full-name">{this.props.fullName}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Nametag;
