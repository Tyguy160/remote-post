import React, { Component } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../styles/letter.css";

class Letter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
    // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this);
    this.captureLetterText = this.captureLetterText.bind(this);
  }

  handleChange(value) {
    this.setState({ text: value });
  }

  captureLetterText() {
    console.log(this.state.text);
  }

  modules = {
    toolbar: [
      [{ font: [] } /*{ size: [] }*/],
      // [{ header: 1 }, { header: 2 }],
      // [{ script: "sub" }, { script: "super" }],
      ["bold", "italic", "underline", "strike"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" }
      ],
      // [{ align: [] }],
      // [{ color: [] }, { background: [] }],
      ["clean"]
    ]
  };

  formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "indent",
    "background",
    "color",
    "script",
    "align"
  ];

  render() {
    return (
      <div className="letter-container">
        <ReactQuill
          className="letter"
          value={this.state.text}
          onChange={this.handleChange}
          modules={this.modules}
          formats={this.formats}
        />
        <button className="letter-submit" onClick={this.captureLetterText}>
          Submit
        </button>
      </div>
    );
  }
}
export default Letter;
