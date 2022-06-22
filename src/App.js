import { useState, useEffect } from 'react';
import fspt from './Images/fspt.jpeg';
import './CSS/App.css';
import Home from './Home.js';
import Patients from './Patients/Patients.js';
import Modal from './Modals/Modal.jsx';

function App() {
  let [date, setDate] = useState(new Date());
  let [access, setAccess] = useState(false);
  let [employee, setEmployee] = useState("");
  // const [view, setView] = useState({ name: "Product", viewProps: {} });

  useEffect(() => {
    setInterval(() => setDate(new Date()), 1000);
  }, []);

  // useEffect(() => {
  //   renderView();
  // }, [view]);

  // const changeView = (name, someProps = {}) => {
  //   return (moreProps = {}) => {
  //     setView({ name, viewProps: { ...someProps, ...moreProps } });
  //   };
  // };

  // const renderView = () => {
  //   switch (view.name) {
  //     case "PT":
  //       return <PT />
  //     case "Aide":
  //       return <
  //   };
  // };

  return (
    <div className="App">
      <div id="current-date">
        {date.toLocaleDateString('en-US', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })}
      </div>
      <div>
        {!access ? null : <p id="employee">{employee}</p>}
      </div>
      <div id="current-time">
        {date.toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true,
        })}
      </div>
      {!access ?
        <Home
          setEmployee={setEmployee}
          setAccess={setAccess}
        /> :
        <Patients
          setAccess={setAccess}
        />
      }
    </div>
  );
}

export default App;
