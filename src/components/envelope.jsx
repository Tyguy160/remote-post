import React, { Component } from "react";
import "../styles/envelope.css";
import stamp from "../images/stamp.png";
class Envelope extends Component {
  render() {
    return (
      <div className="envelope-container">
        <div className="envelope">
          <form className="return-address">
            <input placeholder="The Remote Post" />
            <br />
            <input placeholder="P.O. Box #2319" />
            <br />
            <input placeholder="Ladson, SC 29456" />
          </form>
          <img className="stamp" src={stamp} alt="stamp" />
          <form className="address">
            <input placeholder="Recipient's Name" />
            <br />
            <input placeholder="Address" />
            <br />
            <input placeholder="City, State Zip" />
          </form>
        </div>
        <button className="envelope-submit" onClick={this.captureLetterText}>
          Submit
        </button>
      </div>
    );
  }
}

export default Envelope;
