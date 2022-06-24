import { useState } from 'react';
import '../CSS/Patients.css';
import CurrentP from './Components/Current.js';
import PatientPage from './Components/PatientPage.js';
import { patients } from './Data.js';

function Patients({ setAccess }) {
  let [patient, setPatient] = useState("");
  let [searching, setSearching] = useState(false);
  let [searchFor, setSearchFor] = useState("");

  const search = (
    <div className="search-container">
      <div className="search-bar">
        <input
          className="search-patient"
          type="text"
          placeholder="Search by name or patient ID..."
          value={searchFor}
          onChange={(e) => {
            setSearchFor(e.target.value);
          }}
        />
        <button
          className="close-search"
          onClick={() => {
            setSearching(false);
            setSearchFor("");
          }}>
          <b>X</b>
        </button>
      </div>
      <CurrentP searchFor={searchFor} patients={patients} setPatient={setPatient}/>
    </div>
  )

  return (
    <div id="patients-container">
      {!patient ?
        <>
          {searching && (
            search
          )}
          <div className="patients">
            <button className="p-btn" onClick={() => setSearching(true)}>Current Patient</button>
            <button className="p-btn">Today's<br/>Schedule</button>
            <button className="p-btn">New Patient</button>
            <button className="p-btn">HEP</button>
            <button className="p-btn" onClick={() => setAccess(false)}>Home</button>
          </div>

        </> :
        <PatientPage patient={patient} setPatient={setPatient} />
      }
    </div>
  );
}

export default Patients;