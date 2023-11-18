import React, { useState } from "react";

export default function Textarea(props) {

  const handleUpClick = () => {
    // console.log("UpperCase: " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text Converted to Uppercase","success")
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text Converted to Lowercase","success")
  };

  const handleOnChange = (event) => {
    // console.log("Change Handled");
    setText(event.target.value);
    // console.log(event.target.value);
  };

  const handleClear = () => {
    setText("");
    props.showAlert("Text Cleared","success")
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied","success")
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));

    if(text.charAt(0) === " "){
      setText(text.slice(1));
    }
    if(text.charAt(text.length-1) === " "){
      setText(text.slice(0,text.length-1));
    }
    props.showAlert("Extra Space Removed","success")
  };

  const [text, setText] = useState("");
  // setText("New Text"); // to change state

  return (
    <>
      <div
        className={` container text-${
          props.mode === "dark" ? "light" : "dark"
        }`}
      >
        <h1 className="my-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="mybox"
            value={text}
            onChange={handleOnChange}
            rows="8"
            placeholder="Enter text here"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "rgb(15 12 28)",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClear}>
          Clear
        </button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>
          Remove Extra Space
        </button>
      </div>
      <div
        className={` container my-3 text-${
          props.mode === "dark" ? "light" : "dark"
        }`}
      >
        <h2>Text Summary</h2>
        <p>
          Words: {text.split(" ").filter((element)=>{return element.length!==0}).length} and Characters: {text.length}
        </p>
        <p>Expected reading time: {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Nothing to Preview'}</p>
      </div>
    </>
  );
}
