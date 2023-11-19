// import React, { useState } from "react";

export default function About(props) {

  let myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "rgb(29 22 52)" : "white",
  };

  return (
    <div style={{ color: props.mode === "dark" ? "white" : "black" }}>
      <h1 className="my-3 mx-5">About</h1>
      <div className="accordion mx-4" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              <strong>Analyze Your Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
            style={myStyle}
          >
            <div className="accordion-body">
              You can analyze your text in different formats. This webpage will give you:
              <ul>
                <li>Total number of Words</li>
                <li>Total number of Characters</li>
                <li>Preview Text</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              <strong>Free To Use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
            style={myStyle}
          >
            <div className="accordion-body">
              There are a few advantages to using a free website:
              <ul>
                <li><i>Cost-effectiveness:</i> You don't need to pay for hosting services or any hidden fees.</li>
                <li><i>Ease of setup:</i> Free hosting platforms often have user-friendly website builders and templates.</li>
                <li><i>No coding knowledge required:</i> Many free templates can be used without any coding knowledge.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              <strong>Capabilities</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
            style={myStyle}
          >
            <div className="accordion-body">
              This program is capable of following functions
              <ul>
                <li><i>Convert to UpperCase:</i> It will convert all the Characters in textarea to Upper-case</li>
                <li><i>Convert to LowerCase:</i> It will convert all the Characters in textarea to Lower-case</li>
                <li><i>Remove Extra Space:</i> It will remove all the extra spaces from the text file</li>
                <li><i>Copy Text:</i> It will copy the text present in the textarea to your clipboared</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
