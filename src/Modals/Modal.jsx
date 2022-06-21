import React, { useState } from "react";
import "../CSS/Modal.css";


export default function Modal ({showModal, onClose}) {

  let [pin, setPin] = useState("");

  if (!showModal) {
    return null
  }

  if (showModal) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(pin);
  }

  const handleOne = (e) => {
    e.preventDefault();
    setPin(pin + e.target.value);
    document.getElementById("2").focus();
  }
  const handleTwo = (e) => {
    e.preventDefault();
    setPin(pin + e.target.value);
    document.getElementById("3").focus();
  }
  const handleThree= (e) => {
    e.preventDefault();
    setPin(pin + e.target.value);
    document.getElementById("4").focus();
  }
  const handleFour = (e) => {
    e.preventDefault();
    setPin(pin + e.target.value);
  }

  return (
    <div className={`modal ${showModal ? 'show' : ''}`}>
      <div className="modal-content">
        <div className="modal-header">
          <div className="modal-header">
            <p>Please enter you pin below:</p>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <input
                className="user-input"
                type="tel"
                id="1"
                // value={oneNum}
                pattern="[0-9]{1}"
                onChange={handleOne}
                autoFocus
                required
                >
              </input>
              <input
                className="user-input"
                type="tel"
                id="2"
                // value={twoNum}
                pattern="[0-9]{1}"
                onChange={handleTwo}
                required
                >
              </input>
              <input
                className="user-input"
                type="tel"
                id="3"
                // value={threeNum}
                pattern="[0-9]{1}"
                onChange={handleThree}
                required
                >
              </input>
              <input
                className="user-input"
                type="tel"
                id="4"
                // value={fourNum}
                pattern="[0-9]{1}"
                onChange={handleFour}
                required
                >
              </input>
              <input className="submit-button" type="submit" value="Sign In" />
            </form>
          </div>
          <div className="modal-footer">
            <button className="close-button" onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}