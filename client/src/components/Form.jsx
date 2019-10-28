import React, { Component } from "react";

const Form = ({ handleClick, onInputChange, inputValue }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Add to do!</h1>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <input
            type="text"
            placeholder="Write here..."
            onChange={onInputChange}
            value={inputValue}
          />
          <button
            className="btn btn-primary ml-3"
            onClick={e => {
              e.preventDefault();
              handleClick();
            }}
          >
            Go!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
