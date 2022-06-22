import React, { useState } from "react";
import "../CSS/Modal.css";
import { employees } from '../Verify.js';

export default function Modal ({showModal, setAccess, setEmployee, onClose}) {
  let [one, setOne] = useState("");
  let [two, setTwo] = useState("");
  let [three, setThree] = useState("");
  let [four, setFour] = useState("");

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
    let pin = one + two + three + four;
    if (employees[pin]) {
      setAccess(true);
      setEmployee(employees[pin]);
    } else {
      alert('Invalid Pin. Please try again.')
      setOne("");
      setTwo("");
      setThree("");
      setFour("");
      document.getElementById("1").focus();
    }
  }

  const handleOne = (e) => {
    e.preventDefault();
    setOne(e.target.value);
    document.getElementById("2").focus();
  }
  const handleTwo = (e) => {
    e.preventDefault();
    setTwo( e.target.value);
    document.getElementById("3").focus();
  }
  const handleThree= (e) => {
    e.preventDefault();
    setThree(e.target.value);
    document.getElementById("4").focus();
  }
  const handleFour = (e) => {
    e.preventDefault();
    setFour(e.target.value);
  }

  return (
    <div className={`modal ${showModal ? 'show' : ''}`}>
      <div className="modal-content">
        <div className="modal-footer">
          <button className="close-button" onClick={onClose}>X</button>
        </div>
        <div className="modal-header">
          <div className="modal-header">
            <p>Please enter you pin below:</p>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <input
                className="user-input"
                type="text"
                id="1"
                value={one}
                maxLength={1}
                onChange={handleOne}
                autoFocus
                required
                >
              </input>
              <input
                className="user-input"
                type="text"
                id="2"
                value={two}
                maxLength={1}
                onChange={handleTwo}
                required
                >
              </input>
              <input
                className="user-input"
                type="text"
                id="3"
                value={three}
                maxLength={1}
                onChange={handleThree}
                required
                >
              </input>
              <input
                className="user-input"
                type="text"
                id="4"
                value={four}
                maxLength={1}
                onChange={handleFour}
                required
                >
              </input>
              <input className="submit-button" type="submit" value="Sign In" />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}