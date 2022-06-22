import { useState, useEffect } from 'react';
import '../CSS/Patients.css';
import CurrentP from './Components/Current.js';

function Patients({ setAccess }) {
  let [patient, setPatient] = useState("");
  let [searching, setSearching] = useState(false);
  let [searched, setSearched] = useState("");
  let [view, setView] = useState({ name: "Select", viewProps: {} });

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

  const search = (
    <div className="search-bar">
      <input
        className="search-patient"
        type="text"
        placeholder="Search by name or patient ID..."
        value={searched}
        onChange={(e) => {
          setSearched(e.target.value);
        }}
      />
      <button
        className="close-search"
        onClick={() => {
          setSearching(false);
          setSearched("");
        }}>
        <b>X</b>
      </button>
    </div>
  )

  return (
    <div>
      <div className="patients">
        <button className="p-btn" onClick={() => setSearching(true)}>Current Patient</button>
        <button className="p-btn">Today's<br/>Schedule</button>
        <button className="p-btn">New Patient</button>
        <button className="p-btn">HEP</button>
        <button className="p-btn" onClick={() => setAccess(false)}>Home</button>
      </div>
      {searching && (search)}
    </div>
  );
}

export default Patients;
