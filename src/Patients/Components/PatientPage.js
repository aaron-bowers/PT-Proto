import { useState } from 'react';
import FlowChart from './Flow.js';

function PatientPage({ patient, setPatient }) {
  let [flow, setFlow] = useState(false);

return (
  <div className="p-page">
    {!flow ?
      <>
        <div className="p-cont">
          <img
            src={patient.photo}
            className="p-photo"
            alt={`${patient.name}'s pic`}
          />
          <div className="p-info-container">
            <div>{patient.name}</div>
            <div>ID: {patient.id}</div>
            <div>Condition: {patient.condition}</div>
          </div>
        </div>
        <div className="p-btn-cont">
          <button
            className="flow-btn"
            onClick={() => setFlow(true)}
            >Flow Chart
          </button>
          <button
            className="back"
            onClick={() => setPatient("")}
            >Back
          </button>
        </div>
      </> :
      <FlowChart photo={patient.flow} setFlow={setFlow}/>
    }
  </div>
  );
}

export default PatientPage;
